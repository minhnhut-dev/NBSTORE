@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Cập nhật sản phẩm</h2>
            <hr>
           
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


                  
                    
                </div>
                <input name="LoaiSanPham" type="hidden" id="LoaiSanPham" value="{{$sp->loai_san_phams_id}}">
                <div class="tab-pane container" id="menu1">
                        {!!$html!!}
                <div>
                <div class="tab-pane container" id="menu2">
                
                </div>
            </div>
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
