$(document).ready(function() {

    $(".tab-option").click(function() {
        $(".tab-option").removeClass("tab-active");
        $(this).addClass("tab-active");
    });

    $('[data-toggle="tooltip"]').tooltip();
})