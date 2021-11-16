@extends('../layouts.master')
@section('content')

<section class="content-header">
    <div class="container">
        <h2>Thông tin người dùng </h2>
        <hr>

        <form method="POST" action="/quan-ly-nguoi-dung/update/{{$user->id}}" class="was-validated d-flex flex-column input-form" id="form-them-the-loai-phim">
            @csrf
            <div class="form-group col-md-6">
                <label for="ten-nguoi-dung">Tên người dùng </label>
                <input type="text" class="form-control" id="name" placeholder="Nhập tên người dùng" name="name" value="{{$user->TenNguoidung}}" required>
                <div class="invalid-feedback">Không được bỏ trống tên người dùng</div>
            </div>
            <div class="form-group col-md-6">
                <label for="ten-nguoi-dung">Số điện thoại </label>
                <input type="text" class="form-control" id="sdt" placeholder="Nhập số điện thoại" name="sdt" value="{{$user->SDT}}" required disabled>
                <div class="invalid-feedback">Không được bỏ trống số điên thoại </div>
                @if($errors->has('sdt'))
                @foreach($errors->get('sdt') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
            </div>

            <div class="form-group col-md-6">
                <label for="ten-nguoi-dung">Địa chỉ</label>
                <textarea type="text" class="form-control" id="dia_chi" placeholder="Nhập địa chỉ" name="dia_chi" value="{{$user->DiaChi}}" required>{{$user->DiaChi}}</textarea>
                <div class="invalid-feedback">Không được bỏ trống địa chỉ</div>

            </div>

            <div class="sex">
                <div class="col-3 select">
                    <label for="nhan">Thời gian tạo:</label>
                </div>
                <div class="col-3">
                <input type="text" class="form-control" id="created_at" name="created_at" value="{{$user->created_at}}"  disabled>

                </div>
            </div>
            <div class="sex">
                <div class="col-3 select">
                    <label for="nhan">Giới tính:</label>
                </div>
                <div class="col-3">
                    <select class="form-control" id="gioi_tinh" name="sex" style="background-image: none;" value="{{$user->GioiTinh}}">
                        @if($user->GioiTinh==1)
                        <option value="1" selected>Nam</option>
                        <option value="2">Nữ</option>
                        @endif
                        @if($user->GioiTinh!=1)
                        <option value="1">Nam</option>
                        <option value="2" selected>Nữ</option>
                        @endif
                    </select>
                </div>
            </div>
            @php
                if($user->TenLoai=='Admin'){
                    if($user->TrangThai==1) {
                        $btn='bg-success';
                        $title='Hoạt động';
                    }
                    else{
                        $btn='bg-dark';
                        $title='Ngừng hoạt động';
                    }
                }else{
                    if($user->TrangThai==0) {
                        $btn='bg-dark';
                        $title='Ngừng hoạt động';
                    }
                    else{
                        if($user->active==1){
                            $btn='bg-success';
                            $title='Hoạt động';
                        }else {
                            $btn='bg-danger';
                            $title='Chưa xác thực mail';
                        }

                    }
                }
            @endphp
            <div class="sex">
                <div class="col-1 select">
                    <label for="nhan">Trạng thái:</label>
                </div>
                <div class="col-2 select">
                <span class="card {{$btn}} status">{{$title}}</span>
                </div>
                <div class="col-3">
                    <select class="form-control" id="trang-thai" name="TrangThai" style="background-image: none;" value="">
                    @if($user->TrangThai==1)
                        <option value="1" selected>Hoạt động</option>
                        <option value="0" >Ngừng hoạt động</option>
                        @endif
                        @if($user->TrangThai!=1)
                        <option value="1">Hoạt động</option>
                        <option value="0" selected>Ngừng hoạt động</option>
                        @endif
                    </select>
                </div>
            </div>
            


            <div class="form-group col-md-6">
                <label for="ten-nguoi-dung">Username </label>
                <input type="text" class="form-control" id="username" placeholder="Nhập username" name="username" value="{{$user->username}}" disabled>

            </div>


            <div class="form-group col-md-6">
                <label for="ten-nguoi-dung">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Nhập email" name="email" value="{{$user->Email}}" required disabled>
                <div class="invalid-feedback">Không được bỏ trống email</div>
                @if($errors->has('email'))
                @foreach($errors->get('email') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
            </div>
            <div class="form-group col-md-6">
                <span class="btn btn-danger">
                    <a id="reset-password">Đặt lại mật khẩu</a>
                </span>


            </div>
            @if($errors->has('password'))
            <div class="form-group col-md-6" style="display: block;" id="repassword">
                <label for="ten-nguoi-dung">Mật khẩu </label>
                <div style="display:flex;">
                <input type="password" class="form-control password col-md-9" id="password" placeholder="Nhập password" name="password" >
                <div class="col-3">
                    <span class="btn btn-dark " id="btn-un-reset-password">
                        <a id="un-reset-password">Huỷ</a>
                    </span>
                </div>
                </div>
                <div class="invalid-feedback">Không được bỏ trống mật khẩu</div>
                @if($errors->has('password'))
                @foreach($errors->get('password') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
                
            </div>
            @endif
            @if(!$errors->has('password'))
            <div class="form-group col-md-6" style="display: none;" id="repassword">
                <label for="ten-nguoi-dung">Mật khẩu </label>
                <div style="display:flex;">
                <input type="password" class="form-control password col-md-9" id="password" placeholder="Nhập password" name="password" >
                <div class="col-3">
                    <span class="btn btn-dark " id="btn-un-reset-password">
                        <a id="un-reset-password">Huỷ</a>
                    </span>
                </div>
                </div>
                <div class="invalid-feedback">Không được bỏ trống mật khẩu</div>
                @if($errors->has('password'))
                @foreach($errors->get('password') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
                
            </div>
            @endif




            <div class="col-3 select">
                <label for="nhan">Thuộc loại:</label>
                <select class="form-control" id="nhan" name="loai_nguoi_dungs_id" style="background-image: none;">
                    <option value="">{{$user->TenLoai}}</option>
                </select>
            </div>
            <div class="col-3 ">
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-nguoi-dung" data-toggle="modal">
                    <strong>Cập nhật</strong>
                </button>
            </div>
            <div class="modal fade modal-them-the-loai-phim-question" id="popup-them-question">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <!-- Modal body -->
                        <div class="modal-body text-center">
                            <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                            Xác nhận cập nhật
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-warning btn-xac-nhan-them-the-loai-phim">
                                <strong>Xác nhận</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    @if($user->TenLoai!='Admin')
    <div class="container">
    <div class="row" id="table-orders">
       
        <div class="col-12">
        <h2>Danh sách order</h2>
            <hr>

            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">

                    <div class="card-tools">
                        <div class="input-group">
                            <!-- <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0" style="height: 400px;">
                    <table class="table table-head-fixed table-striped">
                        <thead>

                            <tr>
                                <th>STT</th>
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
    </div>
    @endif
</section>


@endsection