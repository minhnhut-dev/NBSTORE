@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Thêm rạp mới</h2>
            <hr>
            <form method="POST" action="" class="was-validated d-flex flex-column input-form"
                id="form-them-rap">
                @csrf
                <div class="form-group d-flex">
                    <div class="col-6">
                        <label for="ten-rap">Tên rạp:</label>
                        <input type="text" class="form-control" id="ten-rap" placeholder="Nhập tên rạp" name="ten-rap" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>

                    <div class="col-6">
                        <label for="so-luong-ghe">Số lượng ghế:</label>
                        <input type="number" class="form-control" id="so-luong-ghe" name="so-luong-ghe"
                            placeholder="Nhập số lượng ghế" value="50" disabled required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>
                </div>

                <div class="check-group col-12">
                    <label for="check">Trạng thái:</label>
                    <div class="d-flex" id="check">
                        <div class="form-check">
                            <label class="form-check-label" for="radio-dang-hoat-dong">
                                <input type="radio" class="form-check-input" id="radio-dang-hoat-dong" name="optradio"
                                    value="0" checked>Đang hoạt động
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label" for="dang-bao-tri">
                                <input type="radio" class="form-check-input" id="dang-bao-tri" name="optradio"
                                    value="1">Đang bảo trì
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
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-rap" data-toggle="modal">
                    <strong>Tiến hành thêm</strong>
                </button>
                <div class="modal fade modal-them-rap-question" id="popup-them-question">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <!-- Modal body -->
                            <div class="modal-body text-center">
                                <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                                Xác nhận thêm rạp vào hệ thống
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="btn btn-warning btn-xac-nhan-them-rap">
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
