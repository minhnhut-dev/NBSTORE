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
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#home">Sản Phẩm</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu1">Cấu hình sản phẩm</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu2">Hình ảnh</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active container" id="home">
                    <div class="form-group col-12">
                        <label for="ten-sản-phẩm">Tên sản phẩm :</label>
                        <input type="text" class="form-control" id="ten-phim" placeholder="Nhập tên sản phẩm "
                            name="ten_san_pham"  value ="{{$sp->TenSanPham}}"required>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2">Mô tả:</label>
                        <div class="col-sm-12">
                            <textarea name="detail" class="form-control" id="des" required></textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2">Hãng sản xuất :</label>
                        <div class="col-sm-12">
                            <input name="HangSanXuat" class="form-control" id="HangSanXuat"  value="{{$sp->HangSanXuat}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2">Giá Cũ :</label>
                        <div class="col-sm-12">
                            <input name="GiaCu" class="form-control" id="GiaCu" value="{{$sp->GiaCu}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2">Giá KM :</label>
                        <div class="col-sm-12">
                            <input name="GiaKM" class="form-control" id="GiaKM" value="{{$sp->GiaKM}}">
                            <div class="invalid-feedback">Không được bỏ trống trường này</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2">Số lượng :</label>
                        <div class="col-sm-12">
                            <input name="SoLuong" class="form-control" id="SoLuong" value="{{$sp->SoLuong}}">
                            <div class="invalid-feedback">Không được bỏ trống trường này</div>
                        </div>
                    </div>

                    <div class="col-4">
                        <label for="nhan">Loại sản phẩm:</label>


                        <select class="form-control" id="nhan" name="loai" style="background-image: none;" required>
                            {{!!$htmlOption!!}}

                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-phim" data-toggle="modal" style="margin:12px">
                        <strong>Tiến hành sửa</strong>
                    </button>
                </div>
                @foreach ($data1 as $cauhinh)
                <div class="tab-pane container" id="menu1">
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">CPU:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên CPU "
                            name="CPU" value="{{$cauhinh->CPU}}">
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">RAM:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập bộ nhớ ram "
                            name="RAM" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Ổ cứng:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên ổ cứng "
                            name="Ocung" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Card đồ họa:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên card đồ họa "
                            name="Cardohoa" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Màn hình:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên màn hình "
                            name="Manhinh" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Cổng giao tiếp:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập các cổng giao tiếp "
                            name="Conggiaotiep" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Ổ quang:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Ổ Quang "
                            name="FDD" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Thẻ nhớ:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên thẻ nhớ "
                            name="Thenho" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Audio:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Audio "
                            name="Audio" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">LAN:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên LAN "
                            name="LAN" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">WIFI:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên chuẩn WIFI"
                            name="WIFI" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Bluetooth:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên bluetooth "
                            name="Bluetooth" >
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Webcam:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Webcam "
                            name="Webcam" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Camera:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Camera "
                            name="Camera" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Hệ điều hành:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên hệ điều hành "
                            name="HDH" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">PIN:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên PIN "
                            name="PIN" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Màu sắc:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên màu sắc "
                            name="Mausac" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Trọng lượng:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Trọng lượng "
                            name="Trongluong" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Kích thước:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên kích thước "
                            name="Kichthuoc" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Tốc độ quay:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên tốc độ quay "
                            name="Tocdoquay" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Vật Liệu:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên vật liệu "
                            name="Vatlieu" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Độ ồn:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập độ ồn sản phẩm "
                            name="Doon" >
                    </div>

                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Tản nhiệt:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên tản nhiệt "
                            name="Tannhiet" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Kết nối:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên kết nối "
                            name="Ketnoi" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Tuổi thọ:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tuổi thọ sản phẩm "
                            name="Tuoitho" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Switch:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Switch "
                            name="Switch" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Tốc độ phản hồi:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tốc độ phản hồi "
                            name="Tocdophanhoi" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Thiết kế:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Thiết kế "
                            name="Thietke" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Model:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Model "
                            name="Model" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Hỗ trợ:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập các Hỗ trợ của sản phẩm "
                            name="Hotro" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Phụ kiện:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên các phụ kiện "
                            name="Phukien" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Mainboard:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Mainboard "
                            name="Mainboard" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Nguồn:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Nguồn "
                            name="Nguon" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Case:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Case "
                            name="Case" >
                    </div>
                    <div class="form-group col-12">
                        <label for="ten-sản-CPU">Fan:</label>
                        <input type="text" class="form-control" id="ten-cpu" placeholder="Nhập tên Fan "
                            name="Fan" >
                    </div>
                @endforeach


                </div>
                <div class="tab-pane container" id="menu2">...</div>
            </div>
            </div>


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
