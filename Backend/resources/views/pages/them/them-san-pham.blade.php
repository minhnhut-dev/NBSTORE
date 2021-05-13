@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Thêm sản phẩm mới</h2>
            <hr>

            {{-- <form method="POST" action="{{ url('/them-san-pham') }}" class="was-validated d-flex flex-column input-form"
                id="form-them-phim" enctype="multipart/form-data">
                @csrf
                <div class="form-group col-12">
                    <label for="ten-sản-phẩm">Tên sản phẩm</label>
                    <input type="text" class="form-control" id="ten-phim" placeholder="Nhập tên sản phẩm  "
                        name="ten_san_pham" required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>
                <div class="form-group d-flex">
                    <div class="col-4">
                        <label for="ngay-dk-chieu">Thông tin</label>

                            <textarea id="w3review" name="w3review" rows="5" cols="40" style="height:37px;border-radius:4px;">
                            </textarea>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>

                    <div class="col-4">
                        <label for="ngay-dk-chieu">Hãng sản xuất</label>
                        <input type="text" class="form-control" id="ngay-dk-chieu" name="xuat_xu"
                            placeholder="Nhập thông tin sản phẩm" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>

                </div>
                <div class="form-group d-flex">
                    <div class="col-4">
                        <label for="nhan">Loại sản phẩm:</label>
                        <select class="form-control" id="nhan" name="loai" style="background-image: none;" >
                                <option value>Không thuộc loại nào</option>
                                {{!!$htmlOption!!}}
                        </select>
                    </div>

        </div> --}}
{{--
        <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-phim" data-toggle="modal"
            style="margin:12px">
            <strong>Tiến hành thêm</strong>
        </button>
        <div class="modal fade modal-them-phim-question" id="popup-them-question">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal body -->
                    <div class="modal-body text-center">
                        <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                        Xác nhận thêm  vào hệ thống
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
        </form> --}}
        <form method="POST" action="{{ url('/them-san-pham') }}" class="was-validated d-flex flex-column input-form"
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

          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active container" id="home">
                <div class="form-group col-12">
                    <label for="ten-sản-phẩm">Tên sản phẩm</label>
                    <input type="text" class="form-control" id="ten-phim" placeholder="Nhập tên sản phẩm  "
                        name="ten_san_pham" required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2">Mô tả:</label>
                    <div class="col-sm-12">
                        <textarea name="detail" class="form-control" id="desc" required></textarea>

                    </div>
                </div>
            </div>
            <div class="tab-pane container" id="menu1">...</div>
            <div class="tab-pane container" id="menu2">...</div>
          </div>

        </form>

<!-- Modal -->
    </section>

@endsection
