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
                            <form method="GET" >
                            <div class="row advance d-flex card-tools">
                                    Loại sản phẩm
                                    <div class="col-item">
                                        <select class="form-control select-status" id="category" name="category">
                                            <option value="0">Tất cả</option>
                                            @foreach ($categories as $item)
                                            <option {{@$_GET['category']==$item->id?'selected':''}}
                                                value="{{$item->id}}">{{$item->TenLoai}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    Số lượng
                                    <div class="col-item">
                                        <select class="form-control select-status" id="amount" name="amount">
                                            <option value="0">Tất cả</option>
                                            <option {{@$_GET['amount']==1?'selected':''}} value="1">0 5</option>
                                            <option {{@$_GET['amount']==2?'selected':''}} value="2">5 - 10</option>
                                            <option {{@$_GET['amount']==3?'selected':''}} value="3">10 - 50</option>
                                            <option {{@$_GET['amount']==4?'selected':''}} value="4">50 - 100</option>
                                            <option {{@$_GET['amount']==5?'selected':''}} value="5">100 - 250</option>
                                            <option {{@$_GET['amount']==6?'selected':''}} value="6">250 - 500</option>
                                            <option {{@$_GET['amount']==7?'selected':''}} value="7">Lớn hơn 500</option>
                                        </select>
                                    </div>
                                    <div class="col-item">
                                        <input type="text" name="search"  value="{{!empty($_GET['search'])?$_GET['search']:''}}" class="form-control float-right"
                                            placeholder="Search">

                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                            </div>
                            </form>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0" >
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
                                                <!-- <a href="/quan-ly-san-pham/{{$sp->id}}"> -->
                                                <a >
                                                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalDelete{{$sp->id}}"
                                                    title="Xóa">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                                </a>
                                                <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalDelete{{$sp->id}}">
                                                Launch demo modal
                                                </button> -->


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

                        {{$listsanpham->links()}}
                      </nav>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
        @foreach ($listsanpham as $sp )
        <div class="modal fade" id="modalDelete{{$sp->id}}" tabindex="-1" aria-labelledby="modalDeleteLabel{{$sp->id}}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalDeleteLabel{{$sp->id}}">Xoá</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   Xác nhận xoá sản phẩm {{$sp->TenSanPham}}
                </div>
                @php
                
                if(!empty($_GET['page'])){
                    $page='page='.$_GET['page'];
                } else $page='';
                @endphp
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
                     <a href="/quan-ly-san-pham/{{$sp->id}}?{{$page}}">
                        <button type="button" class="btn btn-danger">Xoá</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
        @endforeach
    </section>

@endsection
