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
                        <div class="advance-tools">
                            <form method="GET" action="">
                                <div class="row advance">
                                    Lọc ngày <div class="col-item"><input {{@($_GET['all-date']==1)?'checked':''}}
                                            id="all-date" type="checkbox" value="1" name="all-date"></div>
                                    Từ <div class="col-item"><input value="{{!empty($_GET['begin'])?$_GET['begin']:''}}"
                                            id="begin" type="date" name="begin" required></div>
                                    Đến <div class="col-item"><input value="{{!empty($_GET['end'])?$_GET['end']:''}}"
                                            id="end" type="date" name="end" required></div>

                                    Trạng thái
                                    <div class="col-item">
                                        <select class="form-control select-status" id="status" name="status">
                                            <option value="0">Tất cả</option>
                                            @foreach ($status as $item)
                                            <option {{@$_GET['status']==$item->id?'selected':''}}
                                                value="{{$item->id}}">{{$item->TenTrangThai}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    Tổng tiền
                                    <div class="col-item">
                                        <select class="form-control select-status" id="total" name="total">
                                            <option value="0">Tất cả</option>
                                            <option {{@$_GET['total']==1?'selected':''}} value="1">0 - 500 ngàn</option>
                                            <option {{@$_GET['total']==2?'selected':''}} value="2">500 ngàn - 1 triệu</option>
                                            <option {{@$_GET['total']==3?'selected':''}} value="3">1 triệu - 5 triệu</option>
                                            <option {{@$_GET['total']==4?'selected':''}} value="4">5 triệu - 10 triệu</option>
                                            <option {{@$_GET['total']==5?'selected':''}} value="5">10 triệu - 25 triệu</option>
                                            <option {{@$_GET['total']==6?'selected':''}} value="6">25 triệu - 50 triệu</option>
                                            <option {{@$_GET['total']==7?'selected':''}} value="7">Lớn hơn 50 triệu</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <div class="col-md-1"></div><button type="submit" class="btn btn-info"><i
                                                class="fas fa-filter"></i></button>
                                    </div>

                                </div>

                            </form>
                        </div>
                        <div class="card-tools">
                            <form method="GET" action="">
                                <div class="input-group">
                                    <input type="text" name="search"
                                        value="{{!empty($_GET['search'])?$_GET['search']:''}}"
                                        class="form-control float-right" placeholder="Search">

                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-default"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0" >
                        <table class="table table-head-fixed table-striped">
                            <thead>

                                <tr>
                                    <th>Mã Đơn</th>
                                    <th>Tên người dùng</th>
                                    <th>Số điện thoại</th>
                                    <th>Ngày order</th>
                                    <th>Tổng tiền</th>
                                    <th>Trạng thái</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if(!sizeof($orders))
                                <tr>
                                    <div style="padding: 10px;" class="error"> Không có dữ liệu</div>
                                </tr>
                                @endif
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
                                if($item->trang_thai_don_hangs_id==3)
                                $success='bg-success';
                                else $success='bg-danger';
                                @endphp
                                <tr>
                                    <!-- <td>
                                        {{$stt}}
                                    </td> -->
                                    <td>{{$item->id}}</td>
                                    <td>{{$item->TenNguoidung}}</td>
                                    <td>{{$item->SDT}}</td>
                                    <td>{{date_format(date_create($item->created_at),'d-m-Y')}}</td>
                                    <td>{{number_format($item->Tongtien, 0, '', ',')}}</td>
                                    <td> <span class="card {{$success}} status">{{$item->TenTrangThai}}</span></td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="/quan-ly-don-hang/{{$item->id}}">
                                                <button type="submit" class="btn btn-warning" data-toggle="tooltip"
                                                    data-placement="top" title="Xem">
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