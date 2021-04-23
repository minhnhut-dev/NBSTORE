@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Cập nhật loại sản phẩm</h2>
            <hr>
            @foreach ($data as $loai)
            <form method="POST" action= "/update/{{$loai->id}}"
                class="was-validated d-flex flex-column input-form" id="form-cap-nhat-the-loai-phim">
                @csrf
                <div class="form-group col-12">
                    <label for="ten-the-loai-phim">Tên thể loại phim:</label>
                    <input type="text" class="form-control" id="ten-the-loai-phim" placeholder="Nhập tên thể loại phim"
                        name="ten_loai" value = "{{$loai->TenLoai}}" required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>

                <div class="col-3">
                    <label for="nhan">parent_id</label>
                    <select class="form-control" id="nhan" name="parent_id" style="background-image: none;" >
                        <option value="{{$loai->parent_id}}">{{$loai->parent_id}}- {{$loai->TenLoai}}</option>

                    </select>
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
