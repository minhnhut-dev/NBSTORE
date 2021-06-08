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
        $('#pwdId, #cPwdId').on('keyup', function () {
            if ($('#pwdId').val() != '' && $('#cPwdId').val() != '' && $('#pwdId').val() == $('#cPwdId').val()) {
            $("#submitBtn").attr("disabled",false);
            $('#cPwdValid').show();
            $('#cPwdInvalid').hide();
            $('#cPwdValid').html('Valid').css('color', 'green');
            $('.pwds').removeClass('is-invalid')
            } else {
            $("#submitBtn").attr("disabled",true);
            $('#cPwdValid').hide();
            $('#cPwdInvalid').show();
            $('#cPwdInvalid').html('Not Matching').css('color', 'red');
            $('.pwds').addClass('is-invalid')
            }
    });
});
