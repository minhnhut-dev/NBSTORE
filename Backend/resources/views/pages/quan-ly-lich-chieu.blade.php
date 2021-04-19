@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Quản lý lịch chiếu</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li class="breadcrumb-item active">Quản lý lịch chiếu</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- /.row -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <a class="btn btn-primary btn-xep-lich-moi" role="button"
                                href={{ url('quan-ly-lich-chieu/xep-lich') }}>
                                <i class="fas fa-plus-circle"></i>
                                Xếp lịch mới
                            </a>
                            <div class="card-tools">
                                <div class="input-group">
                                    <input id="input-ngay-chieu" type="date" name="table_search"
                                        class="form-control float-right" placeholder="Tìm kiếm">
                                </div>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0" style="height: 400px;">
                            <table id="table-danh-sach-lich-chieu"
                                class="table table-head-fixed table-striped table-lich-chieu">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã lịch chiếu</th>
                                        <th>Tên phim</th>
                                        <th>Tên rạp</th>
                                        <th>Thời Gian chiếu</th>
                                        <th>Ngày chiếu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                    $stt = 0;
                                    @endphp
                                    @foreach ($lichChieus as $lichChieu)
                                        <tr>
                                            <td>{{ ++$stt }}</td>
                                            <td>{{ 'LC' . $lichChieu->MaLichChieu }}</td>
                                            <td>{{ $lichChieu->TenPhim }}</td>
                                            <td>{{ $lichChieu->TenRap }}</td>
                                            <td>{{ $lichChieu->ThoiGianChieu }}</td>
                                            <td>{{ $lichChieu->NgayChieu }}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>

@endsection
