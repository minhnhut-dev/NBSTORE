<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>Admin</title>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.css">
    <!-- IonIcons -->
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.css">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<!--
      BODY TAG OPTIONS:
      =================
      Apply one or more of the following classes to to the body tag
      to get the desired effect
      |---------------------------------------------------------|
      |LAYOUT OPTIONS | sidebar-collapse                        |
      |               | sidebar-mini                            |
      |---------------------------------------------------------|
      -->

<body class="hold-transition sidebar-mini">
    <div class="login">
        <!-- Horizontal Form -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title text-white text-center">Đăng nhập</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form method="POST" class="form-horizontal" action="/login">
                @csrf
                <div class="card-body">

                    @if($error=$errors->first('password'))
                    <div class="alert alert-danger">
                        {{ $error }}
                      </div>
                    @endif

                    <div class="form-group row">
                        <input type="text" class="form-control-transparent" id="inputUserName" name="username"
                            placeholder="Tên tài khoản">
                    </div>
                    <div class="form-group row">
                        <input type="password" class="form-control-transparent" id="inputPassword" name="password"
                            placeholder="Mật khẩu" >
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck2">
                                <label class="form-check-label text-white" for="exampleCheck2">Nhớ tài khoản của
                                    tôi</label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer text-center">
                    <button type="submit" class="btn btn-danger w-100">Đăng nhập</button>
                </div>
                <!-- /.card-footer -->
            </form>
        </div>
        <!-- /.card -->
    </div>

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
    <script src="plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE -->
    <script src="dist/js/adminlte.js"></script>

    <!-- OPTIONAL SCRIPTS -->
    <script src="plugins/chart.js/Chart.min.js"></script>
    <script src="dist/js/demo.js"></script>
    <script src="dist/js/pages/dashboard3.js"></script>
</body>

</html>
