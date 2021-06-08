@extends('../layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Quản Lý đơn hàng</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li class="breadcrumb-item active">Quản lý đơn hàng</li>
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

                        <div class="card-tools">
                            <div class="input-group">
                                <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0" style="height: 400px;">
                        <table class="table table-head-fixed table-striped">
                            <thead>

                                <tr>
                                    <th>STT</th>
                                    <th>Tên người dùng</th>
                                    <th>Số điện thoại</th>
                                    <th>Ngày order</th>
                                    <th>Tổng tiền</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                @php
                                $stt=0;
                                if (isset($_GET['page'])) {
                                $a=1;
                                if (is_numeric($_GET['page'])){
                                $a=$_GET['page'];
                                }else
                                $a=1;
                                }
                                else{
                                $a=1;
                                }
                                $stt=($a-1)*10;
                                @endphp

                                @foreach ($orders as $item )
                                @php

                                $stt++;
                                @endphp
                                <tr>
                                    <td>
                                        {{$stt}}
                                    </td>
                                    <td>{{$item->TenNguoidung}}</td>
                                    <td>{{$item->SDT}}</td>
                                    <td>{{$item->ThoiGianMua}}</td>
                                    <td>{{number_format($item->Tongtien, 0, '', ',')}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="/quan-ly-don-hang/{{$item->id}}">
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
                               {!!$html!!}
                </nav>
                <!-- /.card -->
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->

</section>

@endsection