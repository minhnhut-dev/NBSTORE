<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin</title>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href={{ asset('plugins/fontawesome-free/css/all.css') }}>
    <!-- IonIcons -->
    <link rel="stylesheet" href="{{asset('./favicon.ico')}}">
    <!-- Theme style -->
    <link rel="stylesheet" href={{ asset('dist/css/adminlte.css') }}>
    <link rel="stylesheet" href={{ asset('css/style.css') }}>
    <link rel="stylesheet" href={{ asset('css/bootstrap-duallistbox.css') }}>
    <link rel="stylesheet" href={{ asset('plugins/bootstrap-tagsinput-latest/src/bootstrap-tagsinput.css') }}>
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

    <!--Dropzone-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
     <!-- tiny editor -->
     <script src="https://cdn.ckeditor.com/ckeditor5/29.0.0/classic/ckeditor.js"></script>
     <!-- dropzone-->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.js" integrity="sha512-VQQXLthlZQO00P+uEu4mJ4G4OAgqTtKG1hri56kQY1DtdLeIqhKUp9W/lllDDu3uN3SnUNawpW7lBda8+dSi7w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.css" integrity="sha512-WvVX1YO12zmsvTpUQV8s7ZU98DnkaAokcciMZJfnNWyNzm7//QRV61t4aEr0WdIa4pe854QHLTV302vH92FSMw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
    <div class="header-title text-center bg-dark text-white" style="font-family: Consolas;">
        Trang quản lý NBSTORE
    </div>
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-dark navbar-danger">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" class="nav-link">Trang chủ</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" class="nav-link">Liên hệ</a>
                </li>
            </ul>

            <!-- Right navbar links -->
            {{-- <ul class="navbar-nav ml-auto">
                <!-- Messages Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-comments"></i>
                        <span class="badge badge-danger navbar-badge bg-warning">3</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <div class="media">
                                <img src={{ asset('dist/img/user1-128x128.jpg') }} alt="User Avatar"
                                    class="img-size-50 mr-3 img-circle">
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        Brad Diesel
                                        <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">Call me whenever you can...</p>
                                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                            </div>
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <div class="media">
                                <img src={{ asset('dist/img/user8-128x128.jpg') }} alt="User Avatar"
                                    class="img-size-50 img-circle mr-3">
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        John Pierce
                                        <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">I got your message bro</p>
                                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                            </div>
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <div class="media">
                                <img src={{ asset('dist/img/user3-128x128.jpg') }} alt="User Avatar"
                                    class="img-size-50 img-circle mr-3">
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        Nora Silvester
                                        <span class="float-right text-sm text-warning"><i
                                                class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">The subject goes here</p>
                                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                            </div>
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>
                <!-- Notifications Dropdown Menu -->
                {{-- <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-bell"></i>
                        <span class="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span class="dropdown-item dropdown-header">15 Notifications</span>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-envelope mr-2"></i> 4 new messages
                            <span class="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-users mr-2"></i> 8 friend requests
                            <span class="float-right text-muted text-sm">12 hours</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="fas fa-file mr-2"></i> 3 new reports
                            <span class="float-right text-muted text-sm">2 days</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li> --}}
                {{-- <li class="nav-item">
                    <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
                            class="fas fa-th-large"></i></a>
                </li> --}}
            {{-- </ul>  --}}
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="/" class="brand-link text-center navbar-dark"
                style="height: 80px; display:flex; justify-content: center; align-items: center;">
                <img src={{ asset('dist/img/your-logo.png') }} alt="AdminLTE Logo" class="brand-image elevation-3">
            </a>
                @php
                $url = URL::current();


                @endphp
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    @if (Session::has('user'))
                        @if (Session::get('user')->Anh)
                        <div class="image">

                            <img src="{{Session::get('user')->Anh }}" class="img-circle elevation-2"
                                alt="User Image">
                        </div>
                        @else
                        <div class="image">

                            <img src="/images/iconUser.png" class="img-circle elevation-2"
                                alt="User Image">
                        </div>
                        @endif


                    @endif

                    <div class="info">
                        <a href="{{route('my-profile')}}" class="d-block">
                            @if (Session::has('user'))
                                {{ Session::get('user')->TenNguoidung}}
                            @endif
                        </a>
                    </div>
                </div>

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li class="nav-item has-treeview ">
                            <a href="/" class="nav-link {{$url==route('home')? 'btn-danger' : ''}}">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Bảng điều khiển
                                </p>
                            </a>
                        </li>
                        <li class="nav-item menu-item has-treeview">
                            <a href="{{ url('quan-ly-san-pham') }}" class="nav-link {{str_contains($url,route('admin-products'))? 'btn-danger' : ''}}">
                                <i class="fab fa-product-hunt"></i>                                <p>
                                    Sản Phẩm
                                </p>
                            </a>
                        </li>
                        <li class="nav-item menu-item has-treeview">
                            <a href="{{ url('quan-ly-loai-san-pham') }}" class="nav-link {{str_contains($url,route('admin-categories'))? 'btn-danger' : ''}}">
                                <i class="nav-icon fas fa-tags"></i>
                                <p>
                                    Loại sản phẩm
                                </p>
                            </a>
                        </li>
                        <li class="nav-item menu-item has-treeview">
                            <a href="{{url('/quan-ly-don-hang')}}" class="nav-link {{str_contains($url,route('admin-orders'))? 'btn-danger' : ''}}">
                                <i class="fas fa-money-bill"></i>
                                <p>
                                    Đơn hàng
                                </p>
                            </a>
                        </li>

                        <li class="nav-item menu-item has-treeview">
                            <a href="{{url('/quan-ly-nguoi-dung')}}" class="nav-link {{str_contains($url,route('admin-customers'))? 'btn-danger' : ''}}">
                                <i class="fas fa-users"></i>
                                <p>
                                    User
                                </p>
                            </a>
                        </li>
                        <li class="nav-item menu-item has-treeview">
                            <a href="{{route('quan-ly-slide')}}" class="nav-link {{str_contains($url,route('quan-ly-slide'))? 'btn-danger' : ''}}">
                                <i class="fas fa-images"></i>
                                <p>
                                    Images slide
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href="/logout">
                    <button type="button" class="btn btn-dang-xuat btn-warning w-100"><strong>Đăng
                            xuất</strong></button>
                </a>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            @yield('content')
        </div>

        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <strong>NBSTORE<a href="https://www.facebook.com/groups/327066398507712">NBSTORE
                    </a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 1.0
            </div>
        </footer>
    </div>

    <!-- ./wrapper -->
    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
    <script src={{ asset('plugins/jquery/jquery.min.js') }}></script>

    <!-- Bootstrap -->
    <script src={{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}></script>
    <script src={{ asset('plugins/bootstrap-tagsinput-latest/src/bootstrap-tagsinput.js') }}></script>
    <!-- AdminLTE -->
    <script src={{ asset('dist/js/adminlte.js') }}></script>

    <!-- OPTIONAL SCRIPTS -->
    <script src={{ asset('plugins/chart.js/Chart.min.js') }}></script>
    <script src={{ asset('dist/js/demo.js') }}></script>
    <script src={{ asset('dist/js/pages/dashboard3.js') }}></script>
    <script src={{ asset('js/handler-submit-them.js') }}></script>
    <script src={{ asset('ajax/xep-lich-ajax.js') }}></script>
    <script src={{ asset('ajax/suat-chieu-ajax.js') }}></script>
    <script src={{ asset('ajax/ve-ajax.js') }}></script>
    <script src={{ asset('js/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.js') }}></script>
    @yield('script')

    <script>
        $(function() {
            //Bootstrap Duallistbox
            $('.duallistbox').bootstrapDualListbox()
        })

    </script>
    <script src={{ asset('ajax/ajax.js') }}></script>

</body>

</html>
