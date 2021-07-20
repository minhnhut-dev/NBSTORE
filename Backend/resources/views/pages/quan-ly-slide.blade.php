@extends('../layouts.master')

@section('content')

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Quản Lý slide</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li class="breadcrumb-item active">Quản lý slide</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <button type="submit" class="btn btn-primary btn-submit-input-form btn-them-phim"
                            data-toggle="modal" style="margin:12px" data-target="#popup-them-image">
                            <strong>Thêm</strong>
                        </button>
                        <div class="card-tools">
                            <div class="input-group">

                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0" style="height: 400px;">
                        <div class="row" id="list-images">
                            @foreach ($images as $image)
                            <div class="col-md-2 col-sm-3">
                                <div class="card item-slide">
                                    <div class="card-header d-flex image-slide-item ">
                                        <img src="/slides/{{$image->image_name}}" class="card-image" alt="">
                                    </div>
                                    <a href="#" data-src="/slides/{{$image->image_name}}" data-id="{{$image->id}}"
                                        class="btn btn-outline-info btn-view-image">Xem</a>

                                </div>
                            </div>
                            @endforeach
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>

</section>
<div class="modal fade modal-them-phim-question" id="popup-them-image">

    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal body -->
            <div class="modal-body text-center">
            <i class="fas fa-cloud-upload-alt" style="color: #dc3545;"></i>
                Chọn ảnh
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body text-center">
                <div class="col-md-12 ">
                    <div id="msg"></div>
                    <form method="post" id="image-form" enctype="multipart/form-data">
                        @csrf 
                        <input type="file" name="img[]" class="file" accept="image/*" required>
                        <div class="feedback"   style="color:red; display:none;">Vui lòng chọn hình ảnh</div>
                        <div class="input-group my-3">
                            <input type="text" class="form-control" disabled placeholder="Upload File" id="file">
                            <div class="input-group-append">
                                <button type="button" class="browse btn btn-primary">Browse...</button>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <img src="http://aquaphor.vn/wp-content/uploads/2016/06/default-placeholder.png"
                                id="preview" class="img-thumbnail">
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="submit" class="btn btn-warning btn-xac-nhan-them-phim" id="btn-insert-image">
                                <strong>Thêm ảnh</strong>
                            </button>
                        </div>
                     
                    </form>
                </div>
 
            </div>
        </div>
    </div>
</div>
<div class="modal fade modal-them-phim-question" id="popup-show-image">

    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">


            <div class="modal-body text-center">
                <div class="col-md-12 ">

                    <div class="col-md-12">
                        <img src="https://placehold.it/80x80" id="image-preview" class="card-image img-thumbnail">
                    </div>
                    <div class="modal-footer d-flex justify-content-center" id="box-delete-image" >
                        <button type="button" class="btn btn-danger" id="btn-delete-image">
                            <strong>Xoá ảnh</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection