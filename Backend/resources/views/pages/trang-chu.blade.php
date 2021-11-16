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
            <div class="col-lg-12">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6"> <center>Top sản phẩm bán nhiều nhất</center></div>
                    <div class="col-3"></div>

            </div>
            <div  id="chartdiv"></div>
            </div>
            <div class="col-lg-12">
            <form method="GET" action="/doanh-thu/thang">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                        <div id="title-revenue-month"> 
                                <h3 class="card-title" style="display:flex;">Doanh thu tháng ... năm ... đang tải ...</h3>
                            </div>
                            <div class="col-md-2" style="display: flex;"><p>Tháng  </p>
                                <select class="form-control value-revenue-month" id="month-revenue-month" name="month">
                                    @for($i=1;$i<=12;$i++)
                                        <!-- <option {{@$_GET['month']==$i?'selected':''}} value="{{$i}}">{{$i}}</option> -->
                                        <option {{@$month==$i?'selected':''}} value="{{$i}}">{{$i}}</option>
                                    @endfor
                                </select>
                            </div>
                            <div class="col-md-2" style="display: flex;"><p>Năm  </p>
                            @php
                            $start_year= 2021;
                            $len = (int)date('Y')-$start_year+1;
                            @endphp
                                <select class="form-control value-revenue-month" id="year-revenue-month" name="year_revenue_month">
                                    @for($i=0;$i<$len;$i++)
                                        <!-- <option {{@$_GET['year_revenue_month']==$i+$start_year?'selected':''}}  value="{{$i+$start_year}}">{{$i+$start_year}}</option> -->
                                        <option {{@$year_month==$i+$start_year?'selected':''}}  value="{{$i+$start_year}}">{{$i+$start_year}}</option>
                                    @endfor
                                </select>
                            </div>
                            <div class="col-md-3" style="display: flex;"><p>Trạng thái  </p>
                                <select class="form-control value-revenue-month" id="status-month" name="status_month">
                                <option value="0">Tất cả</option>
                                    @forEach($orders_status as $item)
                                  
                                        <option value="{{$item->id}}">{{$item->TenTrangThai}}</option>
                                    @endforeach
                                </select>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Xuất excel</button>
                        </div>
                    </div>
                    <div class="card-body table-responsive p-0">
                        <div id="chart-revenue"></div>
                    </div>
                </div>
                <!-- /.card -->

            </form>
            </div>
           
            <div class="col-lg-12">
            <form method="GET" action="/doanh-thu/nam">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                            <div id="title-revenue-year"> 
                                <h3 class="card-title" style="display:flex;">Doanh thu năm đang tải ...</h3>
                            </div>
                            
                        <!-- <h3 class="card-title">Doanh thu năm {{ $year_year}}: {{number_format($total_sales_year, 0, '', ',')}} VNĐ</h3> -->
                            <div class="col-md-2" style="display: flex;"><p>Năm  </p>
                            @php
                            $start_year= 2021;
                            $len = (int)date('Y')-$start_year+1;
                            @endphp
                                <select class="form-control value-revenue-year" id="year-revenue-year" name="year_revenue_year">
                                    @for($i=0;$i<$len;$i++)
                                    <option {{@$year_year==$i+$start_year?'selected':''}} value="{{$i+$start_year}}">{{$i+$start_year}}</option>
                                  
                                        <!-- <option {{@$_GET['year_revenue_year']==$i+$start_year?'selected':''}} value="{{$i+$start_year}}">{{$i+$start_year}}</option> -->
                                    @endfor
                                    <option  value="2020">2020</option>
                                    <option  value="2022">2022</option>
                                </select>
                            </div>
                            <div class="col-md-3" style="display: flex;"><p>Trạng thái  </p>
                                <select class="form-control value-revenue-year" id="status-year" name="status_year">
                                <option value="0">Tất cả</option>
                                    @forEach($orders_status as $item)
                                   
                                        <option value="{{$item->id}}">{{$item->TenTrangThai}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Xuất excel</button>
                        </div>
                    </div>
                    <div class="card-body table-responsive p-0">
                        <div id="chart-revenue-year"></div>
                    </div>
                </div>
                <!-- /.card -->

                </form>
            </div>
 
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
                                    <th>Trạng thái</th>
                                    <th>Thời gian đặt hàng</th>
                                    <th>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($orders as $order)
                                @php
                                switch($order->TenTrangThai){
                                        case 'Chưa thanh toán': 
                                            $success = 'bg-warning';
                                            break;
                                        
                                        case 'Đã thanh toán': 
                                            $success = 'bg-primary';
                                            break;
                                        
                                        case 'Đã xác nhận': 
                                            $success = 'bg-info';
                                            break;
                                        
                                        case 'Đã hủy': 
                                            $success = 'bg-dark';
                                            break;
                                        
                                        case 'Đã hoàn thành': 
                                            $success = 'bg-success';
                                            break;
                                        
                                        default:
                                            $success = 'bg-danger';
                                        
                                    }
                                @endphp
                                
                                <tr>
                                    <td>
                                    <a href="/quan-ly-don-hang/{{$order->id}}">{{$order->id}}</a> 
                                    </td>
                                    <td>{{$order->TenNguoidung}} - SĐT: {{$order->SDT}}</td>
                                    <td>
                                        {{$order->SanPhams}}
                                    </td>
                                    <td>
                                    <span class="card {{$success}} status">{{$order->TenTrangThai}}</span>
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
<!-- chart top sản phẩm bán nhiều nhất -->

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
        categoryAxis.renderer.labels.template.rotation = -5;
        // categoryAxis.renderer.grid.template.disabled = true;
        // categoryAxis.renderer.labels.template.disabled = true;

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
 <!-- chart doanh thu tháng -->

<script>
    am4core.ready(function() {
        am4core.useTheme(am4themes_animated);
        var chart3 = am4core.create("chart-revenue", am4charts.XYChart);
        chart3.data =[];
        $.ajax({
                url: "/api/revenue-month?year_revenue_month="+$('#year-revenue-month').val()+'&month='+$("#month-revenue-month").val()+'&status='+$("#status-month").val(),
                type: "get",
                contentType: false,
                cache: false,
                success: function (data) {
                    var body = JSON.parse(JSON.stringify(data));
                        // Add data
                    chart3.data= data.revenue;
                            
                                // Create axes
                    var categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date";
                    categoryAxis.renderer.minGridDistance = 50;
                    categoryAxis.renderer.grid.template.location = 0.5;
                    categoryAxis.startLocation = 0.5;
                    categoryAxis.endLocation = 0.5;

                    // Create value axis
                    var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Create series
                    var series = chart3.series.push(new am4charts.LineSeries());
                    series.dataFields.valueY = "value";
                    series.dataFields.categoryX = "date";
                    series.strokeWidth = 2;
                    series.tensionY = 1;
                    series.tensionX = 1;

                    // bullet is added because we add tooltip to a bullet for it to change color
                    var bullet = series.bullets.push(new am4charts.Bullet());
                    bullet.tooltipText = "{valueY}";

                    bullet.adapter.add("fill", function(fill, target){
                        if(target.dataItem.valueY < 0){
                            return am4core.color("#FF0000");
                        }
                        return fill;
                    })
                    var range = valueAxis.createSeriesRange(series);
                    range.value = 0;
                    range.endValue = -1000;
                    range.contents.stroke = am4core.color("#FF0000");
                    range.contents.fill = range.contents.stroke;

                    // Add scrollbar
                    var scrollbarX = new am4charts.XYChartScrollbar();
                    scrollbarX.series.push(series);
                    chart3.scrollbarX = scrollbarX;

                    chart3.cursor = new am4charts.XYCursor();


                    var html= '<h3 class="card-title">Doanh thu tháng '+data.month+' năm '+data.year+': '+data.total+'</h3>';
                    
                    $("#title-revenue-month").html(html);
                },
                error: function (data) {
                    chart3.data=[];
                }
            });
       
    

        $('.value-revenue-month').change(function(){
                $.ajax({
                url: "/api/revenue-month?year_revenue_month="+$('#year-revenue-month').val()+'&month='+$("#month-revenue-month").val()+'&status='+$("#status-month").val(),
                type: "get",
                contentType: false,
                cache: false,
                success: function (data) {
                    var body = JSON.parse(JSON.stringify(data));
                    chart3.data= data.revenue;
           
                    var html= '<h3 class="card-title">Doanh thu tháng '+data.month+' năm '+data.year+': '+data.total+'</h3>';
                    
                    $("#title-revenue-month").html(html);
                },
                error: function (data) {
                    chart3.data=[];
                }
            });
        });
    }); 
        
</script>
<style>
#chart-revenue {
  width: 100%;
  height: 500px;
}																
</style>
<script>
    am4core.ready(function() {
        // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end
            var chart = am4core.create("chart-revenue-year", am4charts.XYChart);
            // Create chart instance
            chart.data=[];
                    // call api get  revenue
                $.ajax({
                    url: "/api/revenue-year?year_revenue_year="+$('#year-revenue-year').val()+'&status='+$("#status-year").val(),
                    type: "get",
                    contentType: false,
                    cache: false,
                    success: function (data) {
                        var body = JSON.parse(JSON.stringify(data));
                            // Add data
                        chart.data= data.revenue;
                        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                        categoryAxis.dataFields.category = "date";
                        categoryAxis.renderer.grid.template.location = 0;
                        categoryAxis.renderer.minGridDistance = 30;
                        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

                        // Create series
                        var series = chart.series.push(new am4charts.ColumnSeries());
                        series.dataFields.valueY = "value";
                        series.dataFields.categoryX = "date";
                        series.name = "Doanh thu";
                        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
                        series.columns.template.fillOpacity = .8;

                        var columnTemplate = series.columns.template;
                        columnTemplate.strokeWidth = 2;
                        columnTemplate.strokeOpacity = 1;
                        $html= '<h3 class="card-title">Doanh thu năm '+data.year+': '+data.total+'</h3>';
                        
                        $("#title-revenue-year").html($html);
                    },
                    error: function (data) {
                        chart.data=[];
                    }
                });
                // on value change
                $('.value-revenue-year').change(function(){
                    chart.data=[];
                    $.ajax({
                    url: "/api/revenue-year?year_revenue_year="+$('#year-revenue-year').val()+'&status='+$("#status-year").val(),
                    type: "get",
                    contentType: false,
                    cache: false,
                    success: function (data) {
                        var body = JSON.parse(JSON.stringify(data));
                        chart.data= data.revenue;
                        $html= '<h3 class="card-title">Doanh thu năm '+data.year+': '+data.total+'</h3>';
                        
                        $("#title-revenue-year").html($html);
                    },
                    error: function (data) {
                        chart.data=[];
                    }
                });
        });
    }); 
</script>
@endsection
@endsection