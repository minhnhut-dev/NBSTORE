@extends('../layouts.master')

@section('content')

    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Quản lý suất chiếu</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li class="breadcrumb-item active">Quản lý suất chiếu</li>
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
                            <div class="row">
                                <form method="POST" action="#" class=" was-validated d-flex flex-column input-form"id="form-cap-nhat-suat-chieu">
                                                @csrf
                                    <div  id="input-suat-chieu"class="form-group col-12">
                                        <input type="hidden" class="form-control" id="id-suat-chieu" name="id-suat-chieu" required value="">
                                        <label for="suat-chieu">Suất chiếu</label>
                                            
                                        <input type="time" class="form-control" id="suat-chieu" name="suat-chieu" required value="">
                                        

                                        <div class="invalid-feedback">Không được bỏ trống trường này</div>
                                    </div>  
                            

                                    <div class="card-body">
                                        <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-suat-chieu"
                                            data-toggle="modal" data-target="#popup-them-question">
                                            <strong>Thêm mới</strong>
                                        </button>
                                        <button type="submit" class="btn btn-success btn-submit-input-form btn-cap-nhat-suat-chieu"
                                            data-toggle="modal" data-target="#popup-cap-nhat">
                                            <strong>Cập nhật</strong>
                                        </button>
                                    
                                     
                                        
                                
                                    </div>
                                    
                                    
                    
                    
                    
                                </form>


                            
                                
                                
                            </div>
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
                        <div class="card-body table-responsive table-hover p-0" style="height: 400px;">
                            <table id="List" class="table table-head-fixed table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Suất chiếu</th>
                                        <th>Trạng thái</th>
                                        <th>Tác vụ</th>
                                    </tr>
                                </thead>
                                <tbody id="body-list">
                                    @foreach ($phim as $p)
                               
                                        <tr class="clickable-row" data-href="{{$p->MaThoiGianChieu}}">
                                        
                                            <td>{{ $p->MaThoiGianChieu }}</td>
                                            <td>{{ $p->ThoiGianChieu }}</td>
                                            <td>
                                                @if ($p->TrangThai == '1')
                                                    Tồn Tại
                                                @else
                                                    Tạm Ngưng
                                                @endif
                                            </td>
                                            <td>
                                                <div class="btn-group">
                                                

                                                    <a class="btn-delete" data-href="{{ $p->MaThoiGianChieu }}">
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
                            <div class="modal fade modal-them-suat-chieu-question" id="popup-them-question">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <!-- Modal body -->
                                        <div class="modal-body text-center">
                                            <i class="fas fa-info-circle" style="color: #dc3545;"></i>
                                            Xác nhận thêm suất chiếu vào hệ thống
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <!-- Modal footer -->
                                        <div class="modal-footer d-flex justify-content-center">
                                            <button type="button" class="btn btn-warning btn-xac-nhan-them-suat-chieu">
                                                <strong>Xác nhận</strong>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
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
