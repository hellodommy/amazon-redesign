$(document).ready(function() {

    $(".tab-option").click(function() {
        $(".tab-option").removeClass("tab-active");
        $(this).addClass("tab-active");
    });

    $('[data-toggle="tooltip"]').tooltip();

    $("#grey-shirt").click(() => {
        $("#current-image").html('<img src="img/products/grey-shirt.png" width="512">');
    });

    $("#yellow-shirt").click(() => {
      $("#current-image").html('<img src="img/products/Yellow-shirt.jpeg" width="512">');
    });

    $("#pink-shirt").click(() => {
        $("#current-image").html('<img src="img/products/Bluepink-shirt.jpg" width="512">');
    });

})
