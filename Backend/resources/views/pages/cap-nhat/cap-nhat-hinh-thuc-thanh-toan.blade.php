@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Cập nhật hình thức thanh toán</h2>
            <hr>
            @foreach ($data as $ht)

            <form method="POST" action="/updatepayment/{{$ht->id}}" class="was-validated d-flex flex-column input-form"
                id="form-cap-nhat-rap">
                @csrf
                <div class="form-group d-flex">
                    <div class="col-6">
                        <label for="ten-rap">Tên hình thức thanh toán:</label>
                        <input type="text" class="form-control" id="ten-rap" placeholder="Nhập tên hình thức thanh toán" name="ten_hinh_thuc"
                             value="{{$ht->TenHinhThuc}}" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-cap-nhat-rap" data-toggle="modal">
                    <strong>Cập nhật</strong>
                </button>
                <div class="modal fade modal-them-rap-question" id="popup-them-question">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <!-- Modal body -->
                            <div class="modal-body text-center">
                                <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                                Xác nhận cập nhật vào hệ thống
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="submit" class="btn btn-warning btn-xac-nhan-cap-nhat-rap">
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
