@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Quản lý  loại sản phẩm</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li class="breadcrumb-item active">Quản lý phim</li>
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
                            <a class="btn btn-primary" role="button"
                                href="{{ url('/quan-ly-loai-san-pham/them-loai') }}">
                                <i class="fas fa-plus-circle"></i>
                                Thêm mới
                            </a>
                            <div class="card-tools">
                                <div class="input-group">
                                    <input type="text" name="table_search" class="form-control float-right"
                                        placeholder="Search">

                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0" style="height: 400px;">
                            <table class="table table-head-fixed table-striped">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên loại </th>
                                        <th>parent_id</th>
                                        <th>Tác vụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 @php
                                    $stt=0;
                                    if (isset($_GET['page'])) {
										$a=$_GET['page'];

									}
									else{
										$a=1;
									}
									$stt=($a-1)*10;
                                   @endphp
                                   @foreach ($listloaisanpham as $loai)
                                   @php
                                   @endphp
                                         <tr>
                                        <td>{{++$stt}}</td>
                                        <td>{{$loai->TenLoai}}</td>
                                        <td>
                                            {{$loai->parent_id}}
                                        </td>
                                            <td>
                                                <div class="btn-group">
                                                    <a href="quan-ly-loai-san-pham/update/{{$loai->id}}">
                                                        <button type="button" class="btn btn-warning" data-toggle="tooltip"
                                                            data-placement="top" title="Chỉnh sửa">
                                                            <i class="fas fa-edit"></i>
                                                        </button>
                                                    </a>
                                                    <a href="/quan-ly-loai-san-pham/delete/{{$loai->id}}">
                                                        <button type="button" class="btn btn-danger" data-toggle="tooltip"
                                                            title="Xóa">
                                                            <i class="far fa-trash-alt"></i>
                                                        </button>
                                                    </a>
                                                </div>
                                            </td>
                                         </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        {{$listloaisanpham->links()}}
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>

@endsection
