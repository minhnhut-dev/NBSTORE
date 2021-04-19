@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Thêm thể loại phim mới</h2>
            <hr>
            <form method="POST" action="{{ url('quan-ly-the-loai-phim/formAdd') }}"
                class="was-validated d-flex flex-column input-form" id="form-them-the-loai-phim">
                @csrf
                <div class="form-group col-12">
                    <label for="ten-the-loai-phim">Tên thể loại phim:</label>
                    <input type="text" class="form-control" id="ten-the-loai-phim" placeholder="Nhập tên thể loại phim"
                        name="ten-loai-phim" required>
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
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-phim" data-toggle="modal">
                    <strong>Tiến hành thêm</strong>
                </button>

                <div class="modal fade modal-them-the-loai-phim-question" id="popup-them-question">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <!-- Modal body -->
                            <div class="modal-body text-center">
                                <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                                Xác nhận thêm thể loại phim vào hệ thống
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
