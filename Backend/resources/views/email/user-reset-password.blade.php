<html>
<head>
    <title>Reset Password Email - BNStore.com</title>
</head>
<body>
    <p>
         Bạn đã thực hiện chức năng reset password tại BTStore.com. Bạn hãy click vào đường link sau đây để hoàn tất việc reset password.
        </br>
        <a href="{{ $user->reset_password_link }}">{{ $user->reset_password_link }}</a>
    </p>
</body>
</html>