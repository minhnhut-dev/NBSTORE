@extends('../layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Quản Lý người dùng</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li class="breadcrumb-item active">Quản lý người dùng</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <!-- /.row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <a class="btn btn-primary" role="button" href={{ url('quan-ly-nguoi-dung/them-nguoi-dung')}}>
                                <i class="fas fa-plus-circle"></i>
                                Thêm mới tài khoản
                            </a>
                        <div class="card-tools">
                            <form method="GET" action="">
                            <div class="input-group">
                                <input type="text" name="search" value="{{!empty($_GET['search'])?$_GET['search']:''}}" class="form-control float-right" placeholder="Search">

                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-head-fixed table-striped">
                            <thead>

                                <tr>
                                    <th>STT</th>
                                    <th>Tên người dùng</th>
                                    <th>Số điện thoại</th>
                                    <th>Username</th>
                                    <th>Mail</th>
                                    <th>Địa chỉ</th>
                                    <th>Loại người dùng</th>
                                    <th>Thời gian tạo</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if(!sizeof($listUser))
                                    <tr>
                                        <div style="padding: 10px;" class="error"> Không có dữ liệu</div>
                                    </tr>
                                @endif
                                @php
                                $stt=0;
                                if (isset($_GET['page'])) {
                                $a=$_GET['page'];
                                }
                                else{
                                $a=1;
                                }
                                $stt=($a-1)*5;
                                @endphp

                                @foreach ($listUser as $item )
                                @php
                            
                                    $stt++;
                                    @endphp
                                <tr>
                                    <td>
                                        {{$stt}}
                                    </td>
                                    <td>{{$item->TenNguoidung}}</td>
                                    <td>{{$item->SDT}}</td>
                                    <td>{{$item->username}}</td>
                                    <td>{{$item->Email}}</td>
                                    <td>{{$item->DiaChi}}</td>
                                    <td>{{$item->TenLoai}}</td>
                                    <td>{{$item->created_at}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="/quan-ly-nguoi-dung/show/{{$item->id}}">
                                                <button type="submit" class="btn btn-warning" data-toggle="tooltip" data-placement="top" title="Xem">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach

                            </tbody>
                        </table>
                    </div>

                    <!-- /.card-body -->
                </div>
                <nav aria-label="Page navigation example">
                    {{$listUser->links()}}
                </nav>
                <!-- /.card -->
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->

</section>

@endsection