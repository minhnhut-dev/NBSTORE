@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container">
            <h2>Xếp lịch</h2>
            <hr>
            <form method="POST" action="{{ url('quan-ly-lich-chieu/them-lich') }}"
                class="was-validated d-flex flex-column input-form" id="form-xep-lich">
                @csrf
                <div class="card card-default">
                    <!-- /.card-header -->
                    <div class="card-body form-select">
                        <div class="row row-select">
                            <div class="col-12">
                                <label for="ngay-xep-lich">Chọn ngày xếp lịch:</label>
                                <input type="date" class="form-control" id="ngay-xep-lich" name="ngay-xep-lich" required>
                                <div class="invalid-feedback">Không được bỏ trống trường này</div>
                            </div>

                            <div class="col-12">
                                <div class="form-group">
                                    <select class="duallistbox" multiple="multiple" name="danh-sach-phim">
                                        @foreach ($argsGetPhim as $phim)
                                            <option value={{ $phim->MaPhim }}>{{ $phim->TenPhim }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <!-- /.form-group -->
                            </div>
                            <button class="btn btn-primary btn-submit-input-form btn-xep-lich" data-toggle="modal">
                                <strong>Xếp lịch</strong>
                            </button>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-body table-responsive" style="height: 400px;">
                        <label>Danh sách lịch phim sau khi xếp</label>
                        <table class="table table-head-fixed table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên phim</th>
                                    <th>Tên rạp</th>
                                    <th>Suất chiếu</th>
                                    <th>Ngày chiếu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- show dữ liệu -->
                            </tbody>
                        </table>
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit-input-form mb-3 btn-them-lich-chieu">
                        <strong>Thêm lịch chiếu</strong>
                    </button>
                </div>
            </form>
        </div>
    </section>

@endsection
