import React, { useEffect, useRef } from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImageUploading from "react-images-uploading";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useForm } from "react-hook-form";
function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [sex, setSex] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [errorEmail, setErrorEmail] = useState([]);
  const [errorUsername, setErrorUsername] = useState([]);
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [images, setImages] = React.useState([]);
  const [imageUser, setImageUser] = useState();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    re_password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const {register, handleSubmit,  formState: { errors }, watch } = useForm({});
  const Password = useRef({});
  Password.current=watch("password", "");
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    setImages(imageList);

    if (imageList[0] !== undefined) {
      setImageUser(imageList[0].data_url);
    } else {
      return;
    }
  };
  
  const onSubmit = (data) => {
    const data_user = {
      Email: data.Email,
      username: data.username,
      password: data.password,
      TenNguoidung: data.name,
      SDT: phone,
      DiaChi: data.address,
      GioiTinh: data.gender,
      Anh: imageUser,
    };
    console.log("data user:",data_user)
    setOpen(true);

    axios
      .post("http://127.0.0.1:8000/api/Register", data_user)
      .then(() => {
        setTimeout(() => {
          enqueueSnackbar("Chúc mừng bạn đăng ký thành công !", {
            variant: "success",
            autoHideDuration: 3000,
          });
          setRedirect(true);
        }, 4000);
      })
      .catch((e) => {
        setOpen(false);
        console.log(e.response);
        setErrorEmail(e.response.data.Email);
        setErrorUsername(e.response.data.username);
        if (e.response.data.Email != undefined) {
          enqueueSnackbar(e.response.data.Email, {
            variant: "error",
            autoHideDuration: 3000,
            preventDuplicate: true,
          });
        }
        if (e.response.data.username != undefined) {
          enqueueSnackbar(e.response.data.username, {
            variant: "error",
            autoHideDuration: 3000,
            preventDuplicate: true,
          });
        }

        
      });
  };
   
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowRePassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (redirect) {
    return <Redirect to="/Login" />;
  }
  return (
    <>
      <Header />
      <div className="noindex">
        <div id="layout-page-register" className="container">
          <span className="header-contact header-page clearfix">
            <h5 className="title-register">Tạo tài khoản</h5>
          </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group username">
              <TextField
                id="outlined-basic-1"
                variant="outlined"
                type="text"
                label="Tên tài khoản"
                name="username"
                {...register("username", { required: true,  maxLength: 20, pattern: /^\S*$/
                })}
                />
              {errors?.username?.type ==="required" && <p>Tài khoản không được bỏ trống</p>}
              {errors?.username?.type === "maxLength" && (
                <p>Tên tài khoản không được quá 20 ký tự</p>)}
              {errors?.username?.type === "pattern" && (
                <p>Tài khoản chỉ chứa ký tự </p>
              )}
            </div>
          </div>
          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group name">
              <TextField
                id="outlined-basic-2"
                variant="outlined"
                type="text"
                label="Họ tên"
                name="name"
                {...register("name", { required: true, pattern: /^[a-zA-Z].*[\s\.]*$/g
                })}
              />
              {errors?.name?.type ==="required" && <p>Tên không được bỏ trống</p>}
              {errors?.name?.type === "pattern" && (
                <p>Tên  chỉ chứa ký tự </p>
              )}
            </div>
          </div>

          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group email">
              <TextField
                id="outlined-basic-3"
                variant="outlined"
                type="text"
                label="Email"
                {...register("Email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                })}
              />  
              {errors?.Email?.type === "pattern" && (
                <p>Email sai định dạng </p>
              )}
                {errors?.Email?.type === "required" && (
                <p>Email không được bỏ trống</p>
              )}

              
            </div>
          </div>

          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group password">
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Mật khẩu
                </InputLabel>
                <OutlinedInput
                  name="password"
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  // onChange={handleChange("password")}
                  {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/})}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Mật khẩu"
                />
                {errors?.password?.type === "required" && (
                  <p>Mật khẩu không được bỏ trống</p>)}
                {errors?.password?.type === "pattern" && (
                  <p>Mật khẩu có 8 ký tự và 1 ký tự hoa</p>)}
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                style={{ marginLeft: "10px" }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Nhập lại mật khẩu
                </InputLabel>
                <OutlinedInput
                 name="re_password"
                  id="outlined-adornment-re_password"
                  type={values.showPassword ? "text" : "password"}
                  {...register("re_password", { validate: value => value === Password.current || "Mật khẩu không khớp"
                  })}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowRePassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Nhập lại mật khẩu"
                />
                  {errors.re_password && <p>{errors.re_password .message}</p>}
              </FormControl>
            </div>
          </div>
          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <PhoneInput country={"vn"} placeholder="+84" value={phone} onChange={setPhone} />
          </div>
          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group sex">
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-1"
                  label="Giới tính"
                  name="gender"
                  {...register("gender", { required: true})}
                >
                  <MenuItem value={1}>Nam</MenuItem>
                  <MenuItem value={0}>Nữ</MenuItem>
                  <MenuItem value={-1}>Khác</MenuItem>
                </Select>
              </FormControl>
              {errors?.gender?.type === "required" && (
                  <p>Hãy chọn giới tính</p>)}
            </div>
          </div>

          {/* <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group city">
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel id="demo-simple-select-label">
                  Chọn tỉnh/thành phố
                </InputLabel>
                  <Select
                    variant="outlined"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-city"
                    label="Tỉnh/thành phố"
                  >
                  {city?.map((city,index)=>(

                    <MenuItem value={city.id} key={index}>{city.name}</MenuItem>
                    ))}
                  </Select>
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "25ch" }}
                style={{ marginLeft: "10px" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Chọn quận/huyện
                </InputLabel>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-district"
                  label="Quận/huyện"
                >
                  {district.map((district,index)=>(
                   <MenuItem value={district.id} key={index}>{district.name}</MenuItem>

                  ))}
                </Select>
              </FormControl>
            </div>
          </div> */}

          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group ward">
              {/* <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel id="demo-simple-select-label">Xã/phường</InputLabel>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-ward"
                  label="Xã/phường"
                >
                  <MenuItem value={1}>Nam</MenuItem>
                  <MenuItem value={0}>Nữ</MenuItem>
                </Select>
              </FormControl> */}
              <TextField
                id="outlined-basic-5"
                variant="outlined"
                type="text"
                label="Địa chủ cụ thể"
                {...register("address", { required: true})}
              />
              {errors?.address?.type === "required" && (
                  <p>Hãy nhập địa chỉ cụ thể</p>)}
            </div>
          </div>

          <div id="upload" className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <Button
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Chọn ảnh avatar
                  </Button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="image-item"
                      style={{ position: "relative" }}
                    >
                      <img src={image.data_url} alt="avatar-user" />
                      <div className="image-item__btn-wrapper">
                        <i
                          className="fas fa-edit"
                          onClick={() => onImageUpdate(index)}
                          title="Chỉnh sửa"
                        ></i>
                        <i
                          className="fas fa-backspace btn-close"
                          onClick={() => onImageRemove(index)}
                          title="Xóa"
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>

          <div className="userbox col-lg-12" style={{ marginLeft: "27%" }}>
            <div className="input-group register">
            <Button
                  variant="primary"
                  className="btnRegister"
                  type="submit"
                  // onClick={onSubmit}
                >
                  Đăng ký
                </Button>
                <Backdrop
                  open={open}
                  className="backdrop-mui"
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
            </div>
          </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
