<html>
<head>
    <title>Activation Email - BNStore.com</title>
</head>
<body>
    <div >
    <p>
        Chào mừng {{ $user->name }} đã đăng ký thành viên tại BTStore.com. Bạn hãy click vào đường link sau đây để hoàn tất việc đăng ký.
        </br>
        <a href="{{ $user->activation_link }}">{{ $user->activation_link }}</a>
    </p>
    </div>
</body>
</html>