@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Quản Lý sản phẩm</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li class="breadcrumb-item active">Quản lý sản phẩm</li>
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
                            <a class="btn btn-primary" role="button" href={{ url('quan-ly-san-pham/them-san-pham')}}>
                                <i class="fas fa-plus-circle"></i>
                                Thêm mới sản phẩm
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
                                        <th>Tên Sản Phẩm</th>
                                        <th>Cấu hình</th>
                                        <th>Hãng sản xuất</th>
                                        <th>Loại</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Chức năng</th>
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
									$stt=($a-1)*5;
                                   @endphp

                                    @foreach ($listsanpham as $sp )
                                    @php
                                    $cat=$sp->LoaiSanPham;
                                    $category_name=$cat->TenLoai;
                                    $stt++;
                                    @endphp
                                    <tr>
                                        <td>
                                            {{$stt}}
                                        </td>
                                        <td>{{$sp->TenSanPham}}</td>
                                        <td> Cấu hình</td>
                                        <td>{{$sp->HangSanXuat}}</td>
                                        <td>{{$category_name}}</td>
                                        <td>
                                            <img src="/images/{{$sp->AnhDaiDien}}" style="width:70px"/>
                                        </td>
                                        <td>{{$sp->SoLuong}}</td>
                                        <td>
                                            <div class="btn-group">
                                                <a href="/quan-ly-san-pham/update/{{$sp->id}}">
                                                    <button type="submit" class="btn btn-warning" data-toggle="tooltip"
                                                        data-placement="top" title="Chỉnh sửa">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                </a>
                                                <a href="/quan-ly-san-pham/{{$sp->id}}">
                                                    <button type="button" class="btn btn-danger" data-toggle="tooltip" type="submit"
                                                    title="Xóa">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>


                                            </div>
                                        </td>
                                    </tr>
                                    @endforeach

                                </tbody>
                            </table>
                        </div>

                        <!-- /.card-body -->
                    </div>
                    <nav aria-label="Page navigation example">
                        {{-- <ul class="pagination">
                          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul> --}}
                        {{$listsanpham->links()}}
                      </nav>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->

    </section>

@endsection
