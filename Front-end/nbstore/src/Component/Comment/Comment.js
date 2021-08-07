import React, { useEffect, useState } from "react";
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  TextField,
  Box,
} from "@material-ui/core";
import ReactStars from "react-rating-stars-component";

function Comment(props) {
  const { comment } = props;
  console.log(comment.user);
  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  return (
    <>
      {comment.map((item, index) => (
        <Paper style={{ padding: "40px 20px", margin: "30px 0" }} key={index}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={item.user.Anh} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
             
              <h4 style={{ margin: 0, textAlign: "left" }}>{item.user.TenNguoidung}</h4>
              <p style={{ textAlign: "left" }}>{item.content}</p>
            </Grid>
          </Grid>
        </Paper>
      ))}

      {/* <Divider variant="fullWidth" style={{ margin: "30px 0" }} /> */}
    </>
  );
}

export default Comment;
