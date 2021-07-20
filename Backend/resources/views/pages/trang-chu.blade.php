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

            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">

   

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
            <div class="row">
        <div class="col-3"></div>
        <div class="col-6"> <center>Top 5 sản phẩm bán nhiều nhất</center></div>
            <div class="col-3"></div>

    </div>
            <div id="chartdiv"></div>
                <!-- <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                            <h3 class="card-title">Những sản phẩm bán nhiều nhất</h3>
                            <a href="javascript:void(1);">View Report</a>
                        </div>
                    </div>
            
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
                                @foreach($prods as $product)
                                <tr>
                                    <td>
                                        <img src="/images/{{$product->AnhDaiDien}}" alt="Product 1" class="img-circle img-size-32 mr-2">
                                        {{$product->TenSanPham}}
                                    </td>
                                    <td>{{number_format($product->GiaCu, 0, '', ',')}} VNĐ</td>
                                    <td>
                                        {{$product->SoLuong}} Đã bán
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div> -->
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                            <h3 class="card-title">Khách hàng mua hàng</h3>
                            <a href="{{ route('admin-customers') }}">Xem chi tiết</a>
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
                                @foreach ($users as $user)
                                <tr>
                                    <td>
                                        {{$user->TenNguoidung}}

                                    </td>
                                    <td>{{$user->SDT}}</td>
                                    <td>
                                        {{$user->SanPhams}}
                                    </td>
                                </tr>
                                @endforeach
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
                            <h3 class="card-title">Đơn Hàng mới nhất</h3>
                            <a href="{{ route('admin-orders') }}">Xem chi tiết</a>
                        </div>
                    </div>
                    <div class="card-body table-responsive p-0">
                        <table class="table table-striped table-valign-middle">
                            <thead>
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    </th>
                                    <th>Khách hàng mua</th>
                                    <th>Sản phẩm mua</th>
                                    <th>Thời gian đặt hàng</th>
                                    <th>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($orders as $order)
                                <tr>
                                    <td>
                                        {{$order->id}}
                                    </td>
                                    <td>{{$order->TenNguoidung}} - SĐT: {{$order->SDT}}</td>
                                    <td>
                                        {{$order->SanPhams}}
                                    </td>
                                    <td>
                                        {{date_format(date_create($order->created_at),'d-m-Y')}}

                                    </td>
                                    <td> {{number_format($order->Tongtien, 0, '', ',')}} VNĐ</td>
                                </tr>
                                @endforeach
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

@section('script')
<style>
    #chartdiv {
        width: 100%;
        height: 350px;
    }
</style>

<!-- Resources -->
<script src="https://cdn.amcharts.com/lib/4/core.js"></script>
<script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
<script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
<script>
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        /**
         * Chart design taken from Samsung health app
         */

        var chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.paddingBottom = 30;

        chart.data = {!!json_encode($chart_product)!!};

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.minGridDistance = 10;
        categoryAxis.renderer.labels.template.dy = 35;
        categoryAxis.renderer.tooltip.dy = 35;
        categoryAxis.renderer.labels.template.rotation = -10;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.fillOpacity = 0.3;
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;
        valueAxis.renderer.baseGrid.strokeOpacity = 0;

        var series = chart.series.push(new am4charts.ColumnSeries);
        series.dataFields.valueY = "steps";
        series.dataFields.categoryX = "name";
        series.tooltipText = "{valueY.value}";
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.dy = -6;
        series.columnsContainer.zIndex = 100;

        var columnTemplate = series.columns.template;
        columnTemplate.width = am4core.percent(50);
        columnTemplate.maxWidth = 66;
        columnTemplate.column.cornerRadius(60, 60, 10, 10);
        columnTemplate.strokeOpacity = 0;

        series.heatRules.push({
            target: columnTemplate,
            property: "fill",
            dataField: "valueY",
            min: am4core.color("#e5dc36"),
            max: am4core.color("#5faa46")
        });
        series.mainContainer.mask = undefined;

        var cursor = new am4charts.XYCursor();
        chart.cursor = cursor;
        cursor.lineX.disabled = true;
        cursor.lineY.disabled = true;
        cursor.behavior = "none";

        var bullet = columnTemplate.createChild(am4charts.CircleBullet);
        bullet.circle.radius = 30;
        bullet.valign = "bottom";
        bullet.align = "center";
        bullet.isMeasured = true;
        bullet.mouseEnabled = false;
        bullet.verticalCenter = "bottom";
        bullet.interactionsEnabled = false;

        var hoverState = bullet.states.create("hover");
        var outlineCircle = bullet.createChild(am4core.Circle);
        outlineCircle.adapter.add("radius", function(radius, target) {
            var circleBullet = target.parent;
            return circleBullet.circle.pixelRadius + 10;
        })

        var image = bullet.createChild(am4core.Image);
        image.width = 60;
        image.height = 60;
        image.horizontalCenter = "middle";
        image.verticalCenter = "middle";
        image.propertyFields.href = "href";

        image.adapter.add("mask", function(mask, target) {
            var circleBullet = target.parent;
            return circleBullet.circle;
        })

        var previousBullet;
        chart.cursor.events.on("cursorpositionchanged", function(event) {
            var dataItem = series.tooltipDataItem;

            if (dataItem.column) {
                var bullet = dataItem.column.children.getIndex(1);

                if (previousBullet && previousBullet != bullet) {
                    previousBullet.isHover = false;
                }

                if (previousBullet != bullet) {

                    var hs = bullet.states.getKey("hover");
                    hs.properties.dy = -bullet.parent.pixelHeight + 30;
                    bullet.isHover = true;

                    previousBullet = bullet;
                }
            }
        })

    }); // end am4core.ready()
</script>
@endsection
@endsection