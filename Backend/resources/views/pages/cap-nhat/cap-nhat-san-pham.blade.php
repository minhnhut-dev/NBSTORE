@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Cập nhật sản phẩm</h2>
            <hr>
            {{-- <form method="POST" action="" class="was-validated d-flex flex-column input-form"
                id="form-cap-nhat-phim" enctype="multipart/form-data">
                @csrf
                <div class="form-group col-12">
                    <label for="ten-phim">Tên Sản Phẩm:</label>
                    <input type="text" class="form-control" id="ten-phim" placeholder="Nhập tên phim" name="ten_phim" value="{{$p->TenPhim}}"
                        required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>

                <div class="form-group d-flex">
                    <div class="col-4">
                        <label for="ngay-dk-chieu">Ngày đăng ký chiếu:</label>
                        <input type="date" class="form-control" id="ngay-dk-chieu" name="ngay_dk_chieu" required value="{{$p->NgayDKChieu}}">
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>

                    <div class="col-4">
                        <label for="ngay-ket-thuc">Ngày kết thúc:</label>
                        <input type="date" class="form-control" id="ngay-ket-thuc" name="ngay_ket_thuc" required value="{{$p->NgayKetThuc}}">
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>

                    <div class="col-4">
                        <label for="thoi-luong-chieu">Thời lượng chiếu:</label>
                        <input type="number" class="form-control" id="thoi-luong-chieu" name="thoi_luong_chieu" value="{{$p->ThoiLuong}}"
                            placeholder="Phút" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>
                </div>

                <div class="form-group d-flex">
                    <div class="col-6">
                        <label for="dao-dien">Đạo diễn:</label>
                        <input type="text" class="form-control" id="dao-dien" data-role="tagsinput" name="dao_dien" value="{{$p->DaoDien}}"
                            placeholder="Tên đạo diễn" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>

                    <div class="col-6">
                        <label for="dien-vien">Diễn viên:</label>
                        <input type="text" class="form-control" id="dien-vien" data-role="tagsinput" name="dien_vien" value="{{$p->DienVien}}"
                            placeholder="Tên các diễn viên" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>
                </div>

                <div class="form-group d-flex">
                    <div class="col-6">
                        <label for="ngay-dk-chieu">Hình ảnh (Có thể bỏ qua trường này):</label>
                        <input type="file" class="form-control-file input-border" value="{{$p->HinhAnh}}" id="hinh-anh" name="hinh_anh" >
                    </div>

                    <div class="col-6">
                        <label for="link-trailer">Link trailer (Có thể bỏ qua trường này):</label>
                        <input type="text" class="form-control" id="link-trailer" name="link_trailer" value="{{$p->LinkPhim}}"
                            placeholder="Nhập link trailer phim" style="background-image: none;">
                    </div>
                </div>

                <div class="form-group d-flex">
                    <div class="col-4">
                        <label for="loai-phim">Loại phim:</label>
                        <select class="form-control" id="loai-phim" name="loai_phim" style="background-image: none; "
                            required>
                            @foreach ($loaiphim as $l)
                            <option value="{{$l->MaLoaiPhim}}">{{$l->TenLoaiPhim}}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-4">
                        <label for="nhan">Nhân Viên:</label>
                        <select class="form-control" id="nhan" name="MaNV" style="background-image: none;" required>
                            <option value="{{$p->MaNV}}" >
                            {{$p->name}}
                            </option>
                        </select>
                    </div>

                    <div class="col-4">
                        <label for="nhan">Nhãn:</label>
                        <select class="form-control" id="nhan" name="nhan" style="background-image: none;" required>
                            @foreach ($nhan as $n)
                            <option value="{{$n->MaGioiHan}}">{{$n->TenGioiHan}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="check-group col-12">
                    <label for="check">Trạng thái:</label>
                    <div class="d-flex" id="check">
                        <div class="form-check">
                            <label class="form-check-label" for="radio-sap-chieu">
                                <input type="radio" class="form-check-input" id="radio-sap-chieu" name="optradio" value="0"
                                    checked>Sắp chiếu
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label" for="radio-dang-chieu">
                                <input type="radio" class="form-check-input" id="radio-dang-chieu" name="optradio"
                                    value="1">Đang chiếu
                            </label>
                        </div>
                         <div class="form-check">
                            <label class="form-check-label" for="radio-xoa">
                                <input type="radio" class="form-check-input" id="radio-xoa" name="optradio" value="-1">Đã
                                xóa
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-cap-nhat" data-toggle="modal">
                    <strong>Cập nhật</strong>
                </button>
                <div class="modal fade modal-cap-nhat-phim-question" id="popup-cap-nhat-question">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <!-- Modal body -->
                            <div class="modal-body text-center">
                                <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                                Xác nhận cập nhật thông tin phim
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="btn btn-warning btn-xac-nhan-cap-nhat-phim">
                                    <strong>Xác nhận</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form> --}}
            @foreach ($data as $sp)
            <form method="POST" action="/updateproduct/{{$sp->id}}" class="was-validated d-flex flex-column input-form"
            id="form-them-phim" enctype="multipart/form-data">
            @csrf
            <div class="form-group col-12">
                <label for="ten-sản-phẩm">Tên sản phẩm</label>
                <input type="text" class="form-control" id="ten-phim" placeholder="Nhập tên sản phẩm  " name="ten_san_pham" value="{{$sp->TenSanPham}}"
                    required>
                <div class="invalid-feedback">Không được bỏ trống trường này</div>
            </div>
            <div class="form-group d-flex">
                <div class="col-4">
                    <label for="ngay-dk-chieu">Cấu hình:</label>
                    <input type="text" class="form-control" id="ngay-dk-chieu" name="cau_hinh" required value="{{$sp->CauHinh}}">
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>


                <div class="col-4">
                    <label for="ngay-dk-chieu">Thông tin</label>
                    <input type="text" class="form-control" id="ngay-dk-chieu" name="thong_tin" placeholder="Nhập thông tin sản phẩm" required value="{{$sp->ThongTin}}">
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>

                <div class="col-4">
                    <label for="ngay-dk-chieu">Xuất xứ</label>
                    <input type="text" class="form-control" id="ngay-dk-chieu" name="xuat_xu" placeholder="Nhập thông tin sản phẩm" required value="{{$sp->XuatXu}}">
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>
                {{-- <div class="col-4">
                    <label for="thoi-luong-chieu">Loại:</label>
                    <input type="number" class="form-control" id="thoi-luong-chieu" name="Loai"
                        placeholder="Loại sản phẩm" required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div> --}}

            </div>
            <div class="col-4">
                <label for="nhan">Loại sản phẩm:</label>


                <select class="form-control" id="nhan" name="loai" style="background-image: none;" required>
                    @foreach ($loaisanpham as $loai )
                    <option value="{{$loai->id}}">{{$loai->TenLoai}}</option>
                    @endforeach

                </select>
            </div>

            {{-- Hình ảnh}}
            {{-- <div class="form-group d-flex">
                <div class="col-4">
                    <label for="ngay-dk-chieu">Hình ảnh (Có thể bỏ qua trường này):</label>
                    <input type="file" class="form-control-file input-border" id="hinh-anh" name="hinh_anh" >
                </div>
            </div> --}}

            </div>

            <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-phim" data-toggle="modal" style="margin:12px">
                <strong>Tiến hành sửa</strong>
            </button>
            <div class="modal fade modal-them-phim-question" id="popup-them-question">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <!-- Modal body -->
                        <div class="modal-body text-center">
                            <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                            Xác nhận Sửa
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-warning btn-xac-nhan-them-phim">
                                <strong>Xác nhận</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        @endforeach
        </div>
    </section>

@endsection
