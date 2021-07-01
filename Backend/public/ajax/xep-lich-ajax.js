$(document).ready(function () {
    $(document).on("click", ".browse", function () {
        var file = $(this).parents().find(".file");
        file.trigger("click");
    });
    $('input[type="file"]').change(function (e) {
        var fileName = e.target.files[0].name;
        $("#file").val(fileName);

        var reader = new FileReader();
        reader.onload = function (e) {
            // get loaded data and render thumbnail.
            document.getElementById("preview").src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    });
    $(document).on("submit", "#image-form", function (e) {
        e.preventDefault();
        $.ajax({
            url: "/api/insert-image-slides",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                $(".fade").hide();
                var body = JSON.parse(JSON.stringify(data));
                var html = "";
                data.images.forEach(function (element) {
                    html += '<div class="col-md-2 col-sm-3">';
                    html += '<div class="card item-slide">';
                    html +=
                        '<div class="card-header d-flex image-slide-item ">';
                    html +=
                        '<img src="/slides/' +
                        element.image_name +
                        '"  class="card-image" alt="">';
                    html +=
                        '</div><a href="#" data-src="/slides/' +
                        element.image_name +
                        '" data-id="' +
                        element.id +
                        '" class="btn btn-outline-info btn-view-image">Xem</a> </div> </div>';
                });
                $("#list-images").html(html);
            },
            error: function (data) {
                var body = JSON.parse(JSON.stringify(data));
                $("#popup-them-image").hide();
            },
        });
    });
    $(document).on("click", ".btn-view-image", function (e) {
        var src = $(this).attr("data-src");
        var button =
            '<button data-id="' +
            $(this).attr("data-id") +
            '" type="button" class="btn btn-danger" id="btn-delete-image"><strong>Xoá ảnh</strong></button>';
        $("#image-preview").attr("src", src);
        $("#box-delete-image").html(button);
        $("#popup-show-image").modal("show");
    });
    $(document).on("click", "#btn-delete-image", function (e) {
        var id = $(this).attr("data-id");
        $.ajax({
          url: "/api/delete-image-slides?id="+id,
          type: "GET",
          contentType: false,
          cache: false,
          processData: false,
          success: function (data) {
            $("#popup-show-image").modal("hide");
              var body = JSON.parse(JSON.stringify(data));
              var html = "";
              data.images.forEach(function (element) {
                  html += '<div class="col-md-2 col-sm-3">';
                  html += '<div class="card item-slide">';
                  html +=
                      '<div class="card-header d-flex image-slide-item ">';
                  html +=
                      '<img src="/slides/' +
                      element.image_name +
                      '"  class="card-image" alt="">';
                  html +=
                      '</div><a href="#" data-src="/slides/' +
                      element.image_name +
                      '" data-id="' +
                      element.id +
                      '" class="btn btn-outline-info btn-view-image">Xem</a> </div> </div>';
              });
              $("#list-images").html(html);
          },
          error: function (data) {
            $("#popup-show-image").modal("hide");
              var body = JSON.parse(JSON.stringify(data));
          },
      });
    });

});
