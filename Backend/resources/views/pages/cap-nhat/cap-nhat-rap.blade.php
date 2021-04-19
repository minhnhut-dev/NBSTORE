@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Cập nhật rạp</h2>
            <hr>
            @foreach($raps as $r)
            <form method="POST" action="{{route('updateRap', $r->MaRap)}}" class="was-validated d-flex flex-column input-form"
                id="form-cap-nhat-rap">
                @csrf
                <div class="form-group d-flex">
                    <div class="col-6">
                        <label for="ten-rap">Tên rạp:</label>
                        <input type="text" class="form-control" id="ten-rap" placeholder="Nhập tên rạp" name="ten-rap"
                             value="{{$r->TenRap}}" required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>

                    <div class="col-6">
                        <label for="so-luong-ghe">Số lượng ghế:</label>
                        <input type="number" class="form-control" id="so-luong-ghe" name="so-luong-ghe"
                            placeholder="Nhập số lượng ghế" value="{{$r->SoLuongGhe}}" disabled required>
                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group d-flex">
                        <div class="col-6">
                                <label for="chi-nhanh">Chi nhánh:</label>
                                <input type="text" class="form-control" id="chi-nhanh" name="chi-nhanh" value="{{$r->TenChiNhanh}}" disabled required>
                                <div class="invalid-feedback">Không được bỏ trống trường này</div>
                        </div>
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
                <button type="submit" class="btn btn-primary btn-submit-input-form btn-cap-nhat-rap" data-toggle="modal">
                    <strong>Cập nhật</strong>
                </button>
                <div class="modal fade modal-them-rap-question" id="popup-them-question">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <!-- Modal body -->
                            <div class="modal-body text-center">
                                <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                                Xác nhận cập nhật rạp vào hệ thống
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
