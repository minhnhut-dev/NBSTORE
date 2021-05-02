@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Thêm hình thức thanh toán mới</h2>
            <hr>
            <form method="POST" action="{{url('/them-hinh-thuc-thanh-toan')}}" class="was-validated d-flex flex-column input-form"
                id="form-them-rap">
                @csrf
                <div class="form-group d-flex">
                    <div class="col-6">
                        <label for="ten-rap">Tên hình thức thanh toán:</label>
                        <input type="text" class="form-control" id="ten-rap" placeholder="Nhập tên hình thức thanh toán" name="ten_hinh_thuc" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
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
                                Xác nhận thêm vào hệ thống
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
