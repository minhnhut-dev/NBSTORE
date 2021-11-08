@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Cập nhật sản phẩm</h2>
            <hr>

            @foreach ($data as $sp)
                <form method="POST" action="/updateproduct/{{ $sp->id }}"
                    class="was-validated d-flex flex-column input-form" id="form-them-phim" enctype="multipart/form-data">
                    @csrf
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#home">Sản Phẩm</a>
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
                                    name="ten_san_pham" value="{{ $sp->TenSanPham }}" required>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2">Hãng sản xuất :</label>
                                <div class="col-sm-12">
                                    <input name="HangSanXuat" class="form-control" id="HangSanXuat"
                                        value="{{ $sp->HangSanXuat }}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2">Giá :</label>
                                <div class="col-sm-12">
                                    <input name="GiaCu" class="form-control" id="GiaCu" value="{{ $sp->GiaCu }}" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2">Giá KM :</label>
                                <div class="col-sm-12">
                                    <input name="GiaKM" class="form-control " id="GiaKM" value="{{ $sp->GiaKM }}" required>
                                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                                    <div class="invalid-feedback ">Không được bỏ trống trường này</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2">Số lượng :</label>
                                <div class="col-sm-12">
                                    <input name="SoLuong" type="number" min="0" class="form-control" id="SoLuong" value="{{ $sp->SoLuong }}">
                                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                                </div>
                            </div>
                            <div class="form-group">
                            <label class="col-sm-2">Ảnh đại diện:</label>
                                    <div class="card-header d-flex">
                                        <img src="/images/{{$sp->AnhDaiDien}}"  style="width:200px" class="card-image img-fluid img-thumbnail" alt="">
                                    </div>

                              
                            </div>
                            <div class="form-group">
                                <label class="col-sm-6">Thay đổi ảnh đại diện:</label>
                                <div class="col-sm-6">
                                    <input name="AnhDaiDien" class="form-control" id="HinhAnh" type="file">
                                </div>
                            </div>
                            <div class="form-group d-flex">
                                <div class="col-4">
                                    <label for="LoaiSanPham">Loại sản phẩm:</label>
                                    <select disabled class="form-control" id="LoaiSanPham" name="LoaiSanPham" style="background-image: none;">
                                        {{!!$htmlOption!!}}
                                    </select>
                                </div>
                            </div>
                            <!-- <div class="form-group">
                                <label class="col-sm-2">Loại sản phẩm :</label>
                                <div class="col-sm-12">
                                    <input name="LoaiSanPham" class="form-control" id="SoLuong"
                                        value="{{ $category->TenLoai }}" disabled >
                                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                                </div>
                            </div> -->
                                <!-- render cấu hình -->
                                <div class="menu1">
                                {!! $html !!}
                                </div>

                            <div class="form-group">
                                <label class="col-sm-2">Mô tả:</label>
                                <div class="col-sm-12">
                                    <textarea name="detail" class="form-control" id="des">{{ $sp->ThongTin }}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                <button type="submit" class="submit-product btn btn-primary btn-submit-input-form btn-them-phim"
                                    data-toggle="modal" data-target="#popup-them-question" style="margin:12px" id="submit-product">
                                    <strong>Cập nhật</strong>
                                </button>
                                </div>
                                <div class="col-md-3">
                                <button type="button" class="btn btn-danger"
                                    data-toggle="modal" data-target="#popup-delete" style="margin:12px" >
                                    <strong>Xoá</strong>
                                </button>
                                </div>
                            </div>
                        </div>
                        <input name="LoaiSanPham" type="hidden" id="LoaiSanPham" value="{{ $sp->loai_san_phams_id }}">

                        <div class="tab-pane container" id="menu2">
                            <div class="card-body table-responsive p-0" style="height: 400px;">
                                <div class="row" id="list-product-images">
                                    @foreach ($imageProduct as $image)
                                        <div class="col-md-2 col-sm-3">
                                            <div class="card item-slide">
                                                <div class="card-header d-flex image-slide-item ">
                                                    <img src="/images/{{ $image->AnhSanPham }}" class="card-image"
                                                        alt="{{ $image->AnhSanPham }}">
                                                </div>
                                                <div class="image-product" style="display:inline-block">
                                                    <a href="#" data-src="" data-id="{{$image->id}}" data-product-id="{{$sp->id}}"
                                                        class="btn btn-outline-danger btn-delete-image-product">Xóa</a>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#popup-add-product-images">Thêm ảnh</button>

                            </div>

                        </div>
 
                    </div>


                </form>

            @endforeach
        <div class="modal fade modal-them-phim-image" id="popup-add-product-images">

                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <!-- Modal body -->
                        <div class="modal-body text-center">
                        <i class="fas fa-cloud-upload-alt" style="color: #dc3545;"></i>
                            Chọn ảnh
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body text-center">
                            <div class="col-md-12 ">
                                <div id="msg"></div>
                                <form method="post" id="product-images-form" enctype="multipart/form-data">
                                    @csrf
                                    <div class="input-group my-3">
                                        <input type="file" class="form-control"  placeholder="Upload File"  accept="image/*"  name="images[]" id="file" multiple>
                                        
                                    </div>
                                    <div class="modal-footer d-flex justify-content-center">
                                        <button type="submit" class="btn btn-warning btn-xac-nhan" data-product-id="{{$sp->id}}" id="btn-insert-product-images">
                                            <strong>Thêm ảnh</strong>
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
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
        <div class="modal fade modal-xoa-question" id="popup-delete">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal body -->
                    <div class="modal-body text-center">
                        <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                        Xác nhận Xoá
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer d-flex justify-content-center">
                    <a href="/quan-ly-san-pham/{{$sp->id}}">
                        <button type="button" class="btn btn-danger">Xoá</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>

    </section>

@endsection
