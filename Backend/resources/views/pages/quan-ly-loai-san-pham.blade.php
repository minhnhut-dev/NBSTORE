@extends('../layouts.master')

@section('content')

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Quản lý loại sản phẩm</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li class="breadcrumb-item active">Quản lý loaị sản phẩm</li>
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
                        <a class="btn btn-primary" role="button" href="{{ url('/quan-ly-loai-san-pham/them-loai') }}">
                            <i class="fas fa-plus-circle"></i>
                            Thêm mới
                        </a>
                        <div class="card-tools">
                        <form method="GET" action="">
                            <div class="input-group">
                                <input type="text" name="search" value="{{!empty($_GET['search'])?$_GET['search']:''}}" class="form-control float-right" placeholder="Search">

                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0" >
                        <table class="table table-head-fixed table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên loại </th>
                                    <th>Thuộc loại</th>
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
                                $stt=($a-1)*5;
                                @endphp
                                @foreach ($data as $loai)
                                @php
                                @endphp
                                <tr>
                                    <td>{{++$stt}}</td>
                                    <td>{{$loai->TenLoai}}</td>

                                    <td>
                                        @if ( $loai->parent_id =="")
                                        Không thuộc loại nào
                                        @else
                                        {{-- {{$loai->Name_Parent_id->TenLoai}} --}}
                                        {{$loai->Name_Parent_id->TenLoai}}
                                        @endif
                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="quan-ly-loai-san-pham/update/{{$loai->id}}">
                                                <button type="button" class="btn btn-warning" data-toggle="tooltip"
                                                    data-placement="top" title="Chỉnh sửa">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                            </a>
                                            <!-- <a href="/quan-ly-loai-san-pham/delete/{{$loai->id}}">
                                                <button type="button" class="btn btn-danger" data-toggle="tooltip"
                                                    title="Xóa">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </a> -->
                                            <a >
                                                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalDelete{{$loai->id}}"
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
                    {{$data->links()}}
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
    @foreach ($checkDel as $sp )

        <div class="modal fade" id="modalDelete{{$sp['id']}}" tabindex="-1" aria-labelledby="modalDeleteLabel{{$sp['id']}}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalDeleteLabel{{$sp['id']}}">Xoá</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   Xác nhận xoá  loại sản phẩm {{$sp['name']}}
                </div>
                @if($sp['delete'])
                <center class="error ">
                   Loại sản phẩm {{$sp['name']}} không thể xoá !
                </center>
                @endif
                @php
             
                if(!empty($_GET['page'])){
                    $page='page='.$_GET['page'];
                } else $page='';
                @endphp
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
                     <a href="/quan-ly-loai-san-pham/delete/{{$sp['id']}}?{{$page}}">
                        <button type="button" {{$sp['delete']?'disabled':''}} class="btn btn-danger">Xoá</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
        @endforeach
</section>

@endsection