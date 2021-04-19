$(document).ready(function(){
    /**
     * THÊM
     */
    //Xử lý cho trang Thêm phim
    $('#form-them-phim').submit(function(e){
        e.preventDefault();
        $('.modal-them-phim-question').addClass('show').css({
            "display": "block",
            "padding": "17px",
            "background": "#00000055",
        });
        $('body').css("overflow", "hidden");
    });

    //Xử lý cho trang Thêm thể loại phim
    $('#form-them-the-loai-phim').submit(function(e){
        e.preventDefault();
        $('.modal-them-the-loai-phim-question').addClass('show').css({
            "display": "block",
            "padding": "17px",
            "background": "#00000055",
        });

        $('body').css("overflow", "hidden");
    });

    //Xử lý cho trang Thêm rạp
    $('#form-them-rap').submit(function(e){
        e.preventDefault();
        $('.modal-them-rap-question').addClass('show').css({
            "display": "block",
            "padding": "17px",
            "background": "#00000055",
        });

        $('body').css("overflow", "hidden");
    });

    //Xử lý cho trang Thêm suất chiếu
    $('#form-them-suat-chieu').submit(function(e){
        e.preventDefault();
        $('.modal-them-suat-chieu-question').addClass('show').css({
            "display": "block",
            "padding": "17px",
            "background": "#00000055",
        });

        $('body').css("overflow", "hidden");
    });


    /**
     * CẬP NHẬT
     */
    //Xử lý cho trang Cập nhật rạp
    $('#form-cap-nhat-rap').submit(function(e){
        e.preventDefault();
        $('.modal-them-rap-question').addClass('show').css({
            "display": "block",
            "padding": "17px",
            "background": "#00000055",
        });

        $('body').css("overflow", "hidden");
    });

    //Xử lý cho trang Cập nhật phim
    $('#form-cap-nhat-phim').submit(function(e){
        e.preventDefault();
        $('.modal-cap-nhat-phim-question').addClass('show').css({
            "display": "block",
            "padding": "17px",
            "background": "#00000055",
        });
        $('body').css("overflow", "hidden");
    });

    //Xử lý cho trang Cập nhật thể loại phim
    $('#form-cap-nhat-the-loai-phim').submit(function(e){
       e.preventDefault();
       $('.modal-cap-nhat-the-loai-phim-question').addClass('show').css({
           "display": "block",
           "padding": "17px",
           "background": "#00000055",
       });
       $('body').css("overflow", "hidden");
    });

    //Xử lý cho trang Cập nhật suất chiếu
    $('#form-cap-nhat-suat-chieu').submit(function(e){
        e.preventDefault();
        $('.modal-cap-nhat-suat-chieu-question').addClass('show').css({
            "display": "block",
            "padding": "17px",
            "background": "#00000055",
        });
        $('body').css("overflow", "hidden");
     });
    /**
     * SET SUBMIT EVENT
     */
    //PHIM
    $('.btn-xac-nhan-them-phim').on('click', function(){
        $('#form-them-phim').unbind('submit');
        $('#form-them-phim').trigger('submit');
    })

    $('.btn-xac-nhan-cap-nhat-phim').on('click', function(){
        $('#form-cap-nhat-phim').unbind('submit');
        $('#form-cap-nhat-phim').trigger('submit');
    });
    //THỂ LOẠI PHIM
    $('.btn-xac-nhan-them-the-loai-phim').on('click', function(){
        $('#form-them-the-loai-phim').unbind('submit');
        $('#form-them-the-loai-phim').trigger('submit');
    });

    $('.btn-xac-nhan-cap-nhat-the-loai-phim').on('click', function(){
        $('#form-cap-nhat-the-loai-phim').unbind('submit');
        $('#form-cap-nhat-the-loai-phim').trigger('submit');
    });
    //RẠP
    $('.btn-xac-nhan-them-rap').on('click', function(){
        $('#form-them-rap').unbind('submit');
        $('#form-them-rap').trigger('submit');
    });

    $('.btn-xac-nhan-cap-nhat-rap').on('click', function(){
        $('#form-cap-nhat-rap').unbind('submit');
        $('#form-cap-nhat-rap').trigger('submit');
    });
    //SUẤT CHIẾU
    $('.btn-xac-nhan-them-suat-chieu').on('click', function(){
        $('#form-them-suat-chieu').unbind('submit');
        $('#form-them-suat-chieu').trigger('submit');
    });
    $('.btn-xac-nhan-cap-nhat-suat-chieu').on('click', function(){
        $('#form-cap-nhat-suat-chieu').unbind('submit');
        $('#form-cap-nhat-suat-chieu').trigger('submit');
    });

    /**
     * CLOSE BUTTON
     */
    $('.close').on('click', function(){
        $('.modal-them-phim-question').hide();
        $('.modal-them-the-loai-phim-question').hide();
        $('.modal-cap-nhat-phim-question').hide();
        $('.modal-cap-nhat-the-loai-phim-question').hide();
        $('.modal-them-rap-question').hide();
        $('.modal-cap-nhat-rap-question').hide();
        $('.modal-them-suat-chieu-question').hide();
        $('.modal-cap-nhat-suat-chieu-question').hide();

        $('body').css("overflow", "auto");
    });
});
