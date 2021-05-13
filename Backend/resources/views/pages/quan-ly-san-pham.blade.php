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
                                        <th>Thông tin</th>
                                        <th>Hãng sản xuất</th>
                                        {{-- <th>Hình ảnh</th> --}}
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
                                    $stt++;
                                    @endphp
                                    <tr>
                                        <td>
                                            {{$stt}}
                                        </td>
                                        <td>{{$sp->TenSanPham}}</td>
                                        <td>
                                            <button type="button" class="btn btn-primary" data-target="#exampleModal{{$sp->id}}" title="Xem cấu hình" data-toggle="modal">Xem cấu hình
                                            </button>
                                            <div class="modal fade" id="exampleModal{{$sp->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                  <div class="modal-content">
                                                    <div class="modal-header">
                                                      <h5 class="modal-title" id="exampleModalLabel">Thông tin cấu hình sản phẩm {{$sp->TenSanPham}}</h5>
                                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                      </button>
                                                    </div>
                                                    <div class="modal-body">
                                                       <div class="col-12">
                                                        <table class="table">
                                                            <thead>
                                                              {{-- <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">First</th>
                                                              </tr> --}}
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">ID</th>
                                                                    <td>{{$sp->id}}</td>
                                                                  </tr>

                                                            </tbody>
                                                          </table>
                                                       </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                        </td>
                                        <td>{{$sp->ThongTin}}</td>
                                        <td>{{$sp->HangSanXuat}}</td>
                                        {{-- <td>{{$sp->LoaiSanPham->TenLoai}}</td> --}}
                                        <td>{{$sp->LoaiSanPham->TenLoai}}</td>
                                        <td></td>
                                        <td>10</td>
                                        {{-- <td>{{$stt}}</td>
                                        <td>{{$p->TenPhim}}</td>
                                        <td>{{$p->NgayDKChieu}}</td>
                                        <td>{{$p->NgayKetThuc}}</td>
                                        <td>{{$p->ThoiLuong}}</td>
                                        <td>{{$p->DaoDien}}</td>
                                        <td>{{$p->DienVien}}</td>
                                        <td>
                                            <img src="/image/phim/{{$p->HinhAnh}}" width="75px" height="100px">
                                        </td>
                                        <td>{{$p->LinkPhim}}</td>
                                        <td>{{$p->TenLoaiPhim}}</td>
                                        <td>{{$p->TenGioiHan}}</td>
                                        <td>@if($p->TrangThai=='1')
                                            Đang chiếu
                                            @else
                                            Sắp Chiếu

                                        </td> --}}
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
                                                </a>
                                                    {{-- <button type="button" class="btn btn-danger" data-toggle="tooltip" type="submit"
                                                    title="Xóa">
                                                    <i class="fas fa-plus-circle"></i>
                                                    </button> --}}

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
