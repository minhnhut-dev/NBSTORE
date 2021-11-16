$(document).ready(function () {
    //TÌM KIẾM VÉ
    $("input[name='tim-kiem-ve']").change(function () {
        var val = $(this).val();

        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });
        $.ajax({
            url: "quan-ly-ve/tim-kiem-ve",
            type: "GET",
            datatype: "json",
            data: {
                value: val,
            },
            success: function (response) {
                $(".table-tim-kiem-ve tbody").remove();
                var setDataInHTML = "<tbody>";
                if (response != null) {
                    var dataVe = response.dsVe;
                    console.log(dataVe);
                    console.log(dataVe);
                    var stt = 0;
                    dataVe.forEach((ve) => {
                        stt++;
                        setDataInHTML += `<tr>
                                                <td>${stt}</td>
                                                <td>${ve.TenVe}</td>
                                                <td>${ve.HoTenTV}</td>
                                                <td>DSV${ve.MaDsVe}</td>
                                                <td>${ve.TenPhim}</td>
                                                <td>${ve.ThanhTien}</td>
                                                <td>${ve.ThoiGianMua}</td>
                                                <td>LC${ve.MaLichChieu}</td>
                                                <td>${ve.MaGhe}</td>
                                            </tr>`;
                    });
                    setDataInHTML += "</tbody>";
                    $(".table-tim-kiem-ve").append(setDataInHTML);
                }
            },
            error: function (data, textStatus, errorThrown) {
                console.log(data);
            },
        });
    });
});
