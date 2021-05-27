$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    // thêm sản phẩm
    $("#LoaiSanPham").change(function () {
        var id = $(this).val();

        $.ajax({
            url: "/api/config-by-category/" + id,
            type: "GET",
            datatype: "json",
            beforeSend: function () {
                $("#menu1").html(
                    '<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">'
                );
            },
            success: function (response) {
                var body = JSON.parse(JSON.stringify(response));
                if (body.message == "success") {
                    $("#menu1").html(body.html);
                } else {
                    $("#menu1").html(
                        '<div class="card-header"><label>Loại sản phẩm này chưa có cấu hình vui lòng thêm cấu hình<label></div>'
                    );
                }
            },
            error: function (data, textStatus, errorThrown) {
                console.log(data);
            },
        });
    });
    // xoá cấu hình khỏi loại
    $(document).on("click", "#submit_subtract", function (e) {
        var configIds = $("#configs-added").val();
        var cateogryId = $("#LoaiSanPham").val();

        if (configIds.length > 0)
            $.ajax({
                url: "/api/delete-configs-from-category/" + cateogryId,
                type: "POST",
                datatype: "json",
                data: {
                    configIds: configIds,
                },
                beforeSend: function () {
                    $("#added").html(
                        '<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">'
                    );
                    $("#not-added").html(
                        '<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">'
                    );
                },
                success: function (response) {
                    var body = JSON.parse(JSON.stringify(response));

                    $("#not-added").html(body.html_configs_not_added);

                    $("#added").html(body.html_configs_added);
                },
                error: function (data, textStatus, errorThrown) {
                    console.log(data);
                    alert("Error");
                },
            });
        else alert("Vui lòng chọn Cấu hình !");
    });
    // thêm cấu hình vào loại
    $(document).on("click", "#submit_add", function (e) {
        var configIds = $("#configs-not-added").val();
        var cateogryId = $("#LoaiSanPham").val();

        if (configIds.length > 0)
            $.ajax({
                url: "/api/add-configs-to-category/" + cateogryId,
                type: "POST",
                datatype: "json",
                data: {
                    configIds: configIds,
                },
                beforeSend: function () {
                    $("#added").html(
                        '<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">'
                    );
                    $("#not-added").html(
                        '<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">'
                    );
                    
                },
                success: function (response) {
                    var body = JSON.parse(JSON.stringify(response));

                    $("#not-added").html(body.html_configs_not_added);

                    $("#added").html(body.html_configs_added);
                },
                error: function (data, textStatus, errorThrown) {
                    console.log(data);
                    alert("Error");
                },
            });
        else alert("Vui lòng chọn Cấu hình !");
    });
    // thêm cấu hình vào danh sách tổng
    $(document).on("click", "#btn_add_config", function (e) {
       
        var config = $("#config").val();
        var cateogryId = $("#LoaiSanPham").val();
     

        if (config.length > 0)
            $.ajax({
                url: "/api/add-config/" + cateogryId,
                type: "POST",
                datatype: "json",
                data: {
                    config: config,
                },
                beforeSend: function () {
                    $("#not-added").html(
                        '<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">'
                    );
                },
                success: function (response) {
                    var body = JSON.parse(JSON.stringify(response));

                    $("#not-added").html(body.html_configs_not_added);
                    $("#config").val('');
                },
                error: function (data, textStatus, errorThrown) {
                    console.log(data);
                    alert("Error");
                },
            });
        else alert("Vui lòng nhập Cấu hình !");
    });
    // $(".btn-xac-nhan-them-suat-chieu").click(function (e) {
    //     e.preventDefault();
    //     var SuatChieu = $("#suat-chieu").val();
    //     if(SuatChieu==''){

    //     }else{
    //         $.ajax({
    //             url: "/quan-ly-suat-chieu/AddAjax",
    //             type: "POST",
    //             datatype: "json",
    //             data: {
    //                 _suatChieu: SuatChieu,

    //             },
    //             beforeSend: function() {
    //                 $('#body-list').html('<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">');
    //             },
    //             success: function (response) {
    //                var body =  JSON.parse(JSON.stringify(response));
    //                 if(body.message=='success'){
    //                     $('#body-list').html(body.html);

    //                 }

    //             },
    //             error: function (data, textStatus, errorThrown) {
    //                 console.log(data);
    //             },
    //         });
    //         $("#popup-them-question .close").click()
    //     }

    // });

    // $(document).on('click',".btn-cap-nhat-suat-chieu",function (e) {
    //     e.preventDefault();
    //     var SuatChieu = $("#suat-chieu").val();
    //     var ID = $("#id-suat-chieu").val();
    //     if(SuatChieu==''){
    //         alert('Ban chua nhap');
    //     }
    //         $.ajax({
    //             url: "/quan-ly-suat-chieu/UpdateAjax",
    //             type: "POST",
    //             datatype: "json",
    //             data: {
    //                 _SuatChieu: SuatChieu,
    //                 _ID: ID,

    //             },
    //             beforeSend: function() {
    //                 $('#body-list').html('<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">');
    //             },
    //             success: function (response) {
    //                var body =  JSON.parse(JSON.stringify(response));
    //                 if(body.message=='success'){
    //                     $('#body-list').html(body.html);

    //                 }

    //             },
    //             error: function (data, textStatus, errorThrown) {
    //                 console.log(data);
    //             },
    //         });

    // });
    // $(document).on('click',".btn-delete",function (e) {

    //     var id=$(this).attr('data-href');

    //         $.ajax({
    //             url: "/quan-ly-suat-chieu/xoa-suat-chieu-ajax",
    //             type: "GET",
    //             datatype: "json",
    //             data: {
    //                 _ID: id,
    //             },
    //             beforeSend: function() {
    //                 $('#body-list').html('<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">');
    //             },
    //             success: function (response) {
    //                var body =  JSON.parse(JSON.stringify(response));
    //                 if(body.message=='success'){
    //                     $('#body-list').html(body.html);

    //                 }

    //             },
    //             error: function (data, textStatus, errorThrown) {
    //                 console.log(data);
    //             },
    //         });

    // });
});
