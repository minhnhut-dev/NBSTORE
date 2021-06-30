<html>

<head>
    <title>Activation Email - BNStore.com</title>
</head>

<body>
    <div style="display: flex;">
        <div style="display: block;
        width: 25%;">
        </div>
        <div style="display: block;
        width: 50%;
        text-align: center;
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
        ">
            <div style="margin: 10px">
                <h3 style="margin: 10px">
                    Chào mừng {{ $user->name }} đã đăng ký thành viên tại BTStore.com. Bạn hãy click vào đường link sau đây
                    để hoàn tất việc đăng ký.
                    </br>

                </h3>
                <div style="margin: 10px">

                    <a href="{{ $user->activation_link }}" >
                        <div style="    display: inline-block;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    text-align: center;
                    text-decoration: none;
                    vertical-align: middle;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                    background-color: transparent;
                    border: 1px solid transparent;
                    padding: .375rem .75rem;
                    font-size: 1rem;
                    border-radius: .25rem;
                    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    color: #fff;
                
                    background-color: #198754;
                    border-color: #198754;">
                            Tới trang đăng nhập</div>
                    </a>
                </div>     
                <image
                        src="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_1400/https://tentech.vn/wp-content/uploads/2019/07/banner-slider-linh-kien-may-tinh.jpg"
                        style="       display: block;
                    width: 100%;
                    object-fit: cover;">
                </image>
            </div>
        </div>
        <div style="display: block;
        width: 25%;"></div>
    </div>
    </div>
</body>

</html>