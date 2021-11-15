@extends('../layouts.master')

@section('content')

<section class="content-header">
    <div class="container">
        <div class="row">

            <div class="col-4">
                <h2>Cập nhật loại sản phẩm</h2>
            </div>
            <div class="col-4"></div>
            <div class="col-4">
                <div class="float-right">
                    <button type="submit" class="btn btn-success btn-submit-input-form btn-them-suat-chieu"
                        data-toggle="modal" data-target="#popup-them-question">
                        <strong>Thêm cấu hình mới</strong>
                    </button>
                    <div class="modal fade modal-them-suat-chieu-question" id="popup-them-question">
                        <div class="modal-dialog  modal-sm">
                            <div class="modal-content">
                                <!-- Modal body -->
                                <div class="modal-body text-center">
                                    <i class="fas fa-plus" style="color: #dc3545;"></i>
                                    Thêm cấu hình mới
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>



                                <div class="card-header  justify-content-between align-items-center">

                                    <input type="text" name="config" id="config" class="form-control"
                                        placeholder="Nhập tên cấu hình">
                                        <div class="error  align-items-center" style="display: none;" id="error-dup-config">
                                            <p> Cấu hình không được trùng</p>
                                        </div>
                                        <div class="error  align-items-center" style="display: none;" id="error-null-config">
                                            <p> Vui lòng nhập cấu hình</p>
                                        </div>
                                </div>

                              
                                <div class="modal-footer d-flex justify-content-center">
                                    <button type="button" class="btn btn-success btn-xac-nhan-them-suat-chieu" id="btn_add_config">
                                        <strong>Thêm</strong>
                                    </button>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>



        <hr>

        @foreach ($data as $loai)
        <form method="POST" action="/update/{{$loai->id}}" class="was-validated d-flex flex-column input-form"
            id="form-cap-nhat-the-loai-phim">
            @csrf
            <div>
                <div class="form-group col-6">
                    <label for="ten-the-loai-phim">Tên thể loại sản phẩm:</label>
                    <input type="text" class="form-control" id="ten-the-loai-phim" placeholder="Nhập tên thể loại phim"
                        name="ten_loai" value="{{$loai->TenLoai}}" required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>

                <div class="form-group col-6">
                    {{-- @php
                    $str=$loai['icon'];
                    // $replace_class=str_replace('className','class',$str);
                    $replace_class=str_replace('className','class',$str);
                    echo $str;
                  @endphp --}}
                    <label for="ten-the-loai-phim">Icon của danh mục: (Ấn vào <a href="https://fontawesome.com/" target="_blank">đây</a> để tải icon)</label>
                    <input type="text" class="form-control" id="ten-the-loai-phim"
                        name="icon" value="{{$loai->icon}}" required>
                    <div class="invalid-feedback">Không được bỏ trống trường này</div>
                </div>


            </div>

            <div class="col-3">
                <label for="nhan">Thuộc loại</label>

                <select class="form-control" id="nhan" name="parent_id" style="background-image: none;">
                    <option value>Không thuộc loại nào</option>
                    {{!!$htmlOption!!}}

                </select>
            </div>
            <!-- input ẩn truyền loại sản phẩm id lên ajax -->
            <input name="LoaiSanPham" type="hidden" id="LoaiSanPham" value="{{$loai->id}}">

            <div class="col-4">
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
                                Xác nhận cập nhật loại sản phẩm
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

<section class="content-header">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="col-md-12 " id="added">
                    <select id="configs-added" class="form-control" size="10" style="height: 100%;" multiple="multiple"
                        name="configs-added[]">
                        {{!!$html_configs_added!!}}
                    </select>
                </div>
                <div class="row" style="margin-top:10px;">
                                <div class="col-md-4">  </div>
                    <div class="col-md-4">
                        <button class="btn btn-danger " id="submit_subtract">Loại bỏ</button>
                    </div>
                </div>
                

              
            </div>
            <div class="col-md-6">
                <div class="col-md-12" id="not-added">
                    <select id="configs-not-added" class="form-control" size="10" style="height: 100%;"
                        multiple="multiple" name="configs-not-added[]">
                        {{!!$html_configs_not_added!!}}
                    </select>
                </div>
                <div class="row" style="margin-top:10px;">
                                <div class="col-md-4">  </div>
                <div class="col-md-4 center " style="float: left">
                    <button class="btn btn-success " id="submit_add">Thêm vào</button>
                </div>
                </div>

            </div>
        </div>
</section>


@endsection
