@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Cập nhật thể loại phim</h2>
            <hr>
            @foreach($loaiphim as $l)
            <form method="POST" action= "/quan-ly-the-loai-phim/formSua/{{$l->MaLoaiPhim}} "
                class="was-validated d-flex flex-column input-form" id="form-cap-nhat-the-loai-phim">
                @csrf
                <div class="form-group col-12">
                    <label for="ten-the-loai-phim">Tên thể loại phim:</label>
                    <input type="text" class="form-control" id="ten-the-loai-phim" placeholder="Nhập tên thể loại phim"
                        name="ten-loai-phim" value = "{{$l->TenLoaiPhim}}" required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>

                <div class="check-group col-12">
                    <label for="check">Trạng thái:</label>
                    <div class="d-flex" id="check">
                    <div class="form-check">
                            <label class="form-check-label" for="radio-sap-chieu">
                                <input type="radio" class="form-check-input" id="radio-sap-chieu" name="optradio" value="1"
                                    checked>Đang hoạt động
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label" for="radio-dang-chieu">
                                <input type="radio" class="form-check-input" id="radio-dang-chieu" name="optradio"
                                    value="0">Ngưng hoạt động
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-cap-nhat-the-loai-phim"
                    data-toggle="modal">
                    <strong>Cập nhật</strong>
                </button>

                <div class="modal fade modal-cap-nhat-the-loai-phim-question" id="popup-them-question">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <!-- Modal body -->
                            <div class="modal-body text-center">
                                <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                                Xác nhận cập nhật thể loại phim
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="btn btn-warning btn-xac-nhan-cap-nhat-the-loai-phim">
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
