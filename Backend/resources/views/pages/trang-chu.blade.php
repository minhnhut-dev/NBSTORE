@extends('../layouts.master')

@section('content')
    <!-- Content Wrapper. Contains page content -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Trang chủ</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    {{-- <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard v3</li>
                    </ol> --}}
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title">Những sản phẩm bán nhiều nhất</h3>
                                {{-- <a href="javascript:void(1);">View Report</a> --}}
                            </div>
                        </div>
                        {{-- <div class="card-body">
                            <div class="d-flex">
                                <p class="d-flex flex-column">
                                    <span class="text-bold text-lg">820</span>
                                    <span>Visitors Over Time</span>
                                </p>
                                <p class="ml-auto d-flex flex-column text-right">
                                    <span class="text-success">
                                        <i class="fas fa-arrow-up"></i> 12.5%
                                    </span>
                                    <span class="text-muted">Since last week</span>
                                </p>
                            </div>
                            <!-- /.d-flex -->

                            <div class="position-relative mb-4">
                                <canvas id="visitors-chart" height="200"></canvas>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                                <span class="mr-2">
                                    <i class="fas fa-square text-primary"></i> This Week
                                </span>

                                <span>
                                    <i class="fas fa-square text-gray"></i> Last Week
                                </span>
                            </div>
                        </div> --}}
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Đã Bán</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <img src="dist/img/default-150x150.png" alt="Product 1"
                                                class="img-circle img-size-32 mr-2">
                                            i9 9900K
                                            <span class="badge bg-danger">NEW</span>
                                        </td>
                                        <td>12.000.000 VNĐ</td>
                                        <td>
                                            <small class="text-success mr-1">
                                                <i class="fas fa-arrow-down"></i>
                                                10%
                                            </small>
                                            87 Đã bán
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.card -->

                    {{-- <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title">Products</h3>
                            <div class="card-tools">
                                <a href="#" class="btn btn-tool btn-sm">
                                    <i class="fas fa-download"></i>
                                </a>
                                <a href="#" class="btn btn-tool btn-sm">
                                    <i class="fas fa-bars"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Sales</th>
                                        <th>More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="dist/img/default-150x150.png" alt="Product 1"
                                                class="img-circle img-size-32 mr-2">
                                            Some Product
                                        </td>
                                        <td>$13 USD</td>
                                        <td>
                                            <small class="text-success mr-1">
                                                <i class="fas fa-arrow-up"></i>
                                                12%
                                            </small>
                                            12,000 Sold
                                        </td>
                                        <td>
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="dist/img/default-150x150.png" alt="Product 1"
                                                class="img-circle img-size-32 mr-2">
                                            Another Product
                                        </td>
                                        <td>$29 USD</td>
                                        <td>
                                            <small class="text-warning mr-1">
                                                <i class="fas fa-arrow-down"></i>
                                                0.5%
                                            </small>
                                            123,234 Sold
                                        </td>
                                        <td>
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="dist/img/default-150x150.png" alt="Product 1"
                                                class="img-circle img-size-32 mr-2">
                                            Amazing Product
                                        </td>
                                        <td>$1,230 USD</td>
                                        <td>
                                            <small class="text-danger mr-1">
                                                <i class="fas fa-arrow-down"></i>
                                                3%
                                            </small>
                                            198 Sold
                                        </td>
                                        <td>
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="dist/img/default-150x150.png" alt="Product 1"
                                                class="img-circle img-size-32 mr-2">
                                            Perfect Item
                                            <span class="badge bg-danger">NEW</span>
                                        </td>
                                        <td>$199 USD</td>
                                        <td>
                                            <small class="text-success mr-1">
                                                <i class="fas fa-arrow-up"></i>
                                                63%
                                            </small>
                                            87 Sold
                                        </td>
                                        <td>
                                            <a href="#" class="text-muted">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> --}}
                    <!-- /.card -->
                </div>
                <!-- /.col-md-6 -->
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title">Khách hàng mua hàng</h3>
                                {{-- <a href="javascript:void(0);">Xem chi tiết</a> --}}
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>Tên khách hàng</th>
                                        <th>Số điện thoại</th>
                                        <th>Sản phẩm đã mua</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            Minh Nhut
                                            {{-- <span class="badge bg-danger">NEW</span> --}}
                                        </td>
                                        <td>0911079197</td>
                                        <td>
                                            87 Đã mua
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <!-- /.card -->


                </div>
                <!-- /.col-md-6 -->
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title">Hóa đơn xuất</h3>
                                {{-- <a href="javascript:void(0);">Xem chi tiết</a> --}}
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>Số hóa đơn</th></th>
                                        <th>Khách hàng mua</th>
                                        <th>Sản phẩm mua</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            HD1
                                            {{-- <span class="badge bg-danger">NEW</span> --}}
                                        </td>
                                        <td>0911079197</td>
                                        <td>
                                            10
                                        </td>
                                        <td>100.000 VNĐ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <!-- /.card -->


                </div>

                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title">Hóa đơn nhập</h3>
                                {{-- <a href="javascript:void(0);">Xem chi tiết</a> --}}
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>Số hóa đơn</th></th>
                                        <th>Nhà cung cấp</th>
                                        <th>Sản phẩm nhập</th>
                                        <th>Số lượng nhập</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            HD1
                                            {{-- <span class="badge bg-danger">NEW</span> --}}
                                        </td>
                                        <td>Apple</td>
                                        <td>
                                            iPhone 12 ProMax
                                        </td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <!-- /.card -->


                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
@endsection
