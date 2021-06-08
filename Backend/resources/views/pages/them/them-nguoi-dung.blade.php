@extends('../layouts.master')
@section('content')

<section class="content-header">
    <div class="container">
        <h2>Thêm User mới</h2>
        <hr>

        <form method="POST" action="{{url('/quan-ly-nguoi-dung/them-nguoi-dung')}}" class="was-validated d-flex flex-column input-form" id="form-them-the-loai-phim">
            @csrf
            <div class="form-group col-12">
                <label for="ten-nguoi-dung">Tên người dùng </label>
                <input type="text" class="form-control" id="name" placeholder="Nhập tên người dùng" name="name" required>
                <div class="invalid-feedback">Không được bỏ trống tên người dùng</div>
            </div>
            <div class="form-group col-12">
                <label for="ten-nguoi-dung">Số điện thoại </label>
                <input type="text" class="form-control" id="sdt" placeholder="Nhập số điện thoại" name="sdt" required>
                <div class="invalid-feedback">Không được bỏ trống số điên thoại </div>
                @if($errors->has('sdt'))
                @foreach($errors->get('sdt') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
            </div>

            <div class="form-group col-12">
                <label for="ten-nguoi-dung">Địa chỉ</label>
                <textarea type="text" class="form-control" id="dia_chi" placeholder="Nhập địa chỉ" name="dia_chi" required></textarea>
                <div class="invalid-feedback">Không được bỏ trống địa chỉ</div>

            </div>
            <div class="sex">
                <div class="col-3 select">
                    <label for="nhan">Giới tính:</label>
                </div>
                <div class="col-3">
                    <select class="form-control" id="gioi_tinh" name="sex" style="background-image: none;">
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                    </select>
                </div>
            </div>


            <div class="form-group col-12">
                <label for="ten-nguoi-dung">Username </label>
                <input type="text" class="form-control" id="username" placeholder="Nhập username" name="username" required>
                <div class="invalid-feedback">Không được bỏ trống username</div>
                @if($errors->has('username'))
                @foreach($errors->get('username') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
            </div>


            <div class="form-group col-12">
                <label for="ten-nguoi-dung">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Nhập email" name="email" required>
                <div class="invalid-feedback">Không được bỏ trống email</div>
                @if($errors->has('email'))
                @foreach($errors->get('email') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
            </div>


            <div class="form-group col-12">
                <label for="ten-nguoi-dung">Mật khẩu </label>
                <input type="password" class="form-control password" id="password" placeholder="Nhập password" name="password" required>
                <div class="invalid-feedback">Không được bỏ trống mật khẩu</div>
                @if($errors->has('password'))
                @foreach($errors->get('password') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
            </div>
            <div class="form-group col-12">
                <label for="ten-nguoi-dung">Xác nhận mật khẩu </label>
                <input type="password" class="form-control password" id="password_verified" placeholder="Nhập lại password" name="password_verified" required>
                <div class="invalid-feedback">Không được bỏ trống mật khẩu xác nhận</div>
                @if($errors->has('password_verified'))
                @foreach($errors->get('password_verified') as $item)
                <div class="error">{{$item}}</div>
                @endforeach
                @endif
            </div>


            <div class="col-3 select">
                <label for="nhan">Thuộc loại:</label>
                <select class="form-control" id="nhan" name="loai_nguoi_dungs_id" style="background-image: none;">
                    @foreach($typeUser as $item)
                    <option value="{{$item->id}}">{{$item->TenLoai}}</option>
                    @endforeach
                </select>

            </div>
            <div class="col-3">
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-nguoi-dung" data-toggle="modal">
                    <strong>Tiến hành thêm</strong>
                </button>
            </div>

            <div class="modal fade modal-them-the-loai-phim-question" id="popup-them-question">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <!-- Modal body -->
                        <div class="modal-body text-center">
                            <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                            Xác nhận thêm người dùng
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
</section>


@endsection