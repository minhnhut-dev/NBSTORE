$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                "content"
            ),
        },
    });
    $(".btn-xac-nhan-them-suat-chieu").click(function (e) {
        e.preventDefault();
        var SuatChieu = $("#suat-chieu").val();
        if(SuatChieu==''){
           
        }else{
            $.ajax({
                url: "/quan-ly-suat-chieu/AddAjax",
                type: "POST",
                datatype: "json",
                data: {
                    _suatChieu: SuatChieu,
                  
                },
                beforeSend: function() {
                    $('#body-list').html('<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">');    
                },
                success: function (response) {
                   var body =  JSON.parse(JSON.stringify(response));
                    if(body.message=='success'){
                        $('#body-list').html(body.html);

                    }

                },
                error: function (data, textStatus, errorThrown) {
                    console.log(data);
                },
            });
            $("#popup-them-question .close").click()
        }
        
    });
    $(document).on('click',".clickable-row",function (e) {
        
      
       var id=$(this).attr('data-href');
        
       
            $.ajax({
                url: "/quan-ly-suat-chieu/edit-suat-chieu-ajax",
                type: "GET",
                datatype: "json",
                data: {
                    _ID: id,
                  
                },
                success: function (response) {
                    var txtt =  JSON.parse(JSON.stringify(response));
                    if(txtt.message=='success'){
                        $('#input-suat-chieu').html(txtt.html);

                    }

                },
                error: function (data, textStatus, errorThrown) {
                    console.log(data);
                    alert("fail!");
                },
            });
        
    });
    $(document).on('click',".btn-cap-nhat-suat-chieu",function (e) {
        e.preventDefault();
        var SuatChieu = $("#suat-chieu").val();
        var ID = $("#id-suat-chieu").val();
        if(SuatChieu==''){
            alert('Ban chua nhap');
        }
            $.ajax({
                url: "/quan-ly-suat-chieu/UpdateAjax",
                type: "POST",
                datatype: "json",
                data: {
                    _SuatChieu: SuatChieu,
                    _ID: ID,
                  
                },
                beforeSend: function() {
                    $('#body-list').html('<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">');    
                },
                success: function (response) {
                   var body =  JSON.parse(JSON.stringify(response));
                    if(body.message=='success'){
                        $('#body-list').html(body.html);

                    }

                },
                error: function (data, textStatus, errorThrown) {
                    console.log(data);
                },
            });
        
    });
    $(document).on('click',".btn-delete",function (e) {
  
        var id=$(this).attr('data-href');
      
      
            $.ajax({
                url: "/quan-ly-suat-chieu/xoa-suat-chieu-ajax",
                type: "GET",
                datatype: "json",
                data: {
                    _ID: id,                 
                },
                beforeSend: function() {
                    $('#body-list').html('<img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">');    
                },
                success: function (response) {
                   var body =  JSON.parse(JSON.stringify(response));
                    if(body.message=='success'){
                        $('#body-list').html(body.html);

                    }

                },
                error: function (data, textStatus, errorThrown) {
                    console.log(data);
                },
            });
        
    });
});
