$(document).ready(function() {

    $(".tab-option").click(function() {
        $(".tab-option").removeClass("active");
        $(this).addClass("active");
    });

})

/*
    $(function() {                       //run when the DOM is ready
        $(".clickable").click(function() {  //use a class, since your ID gets mangled
            $(this).addClass("active");      //add the class to the clicked element
    });

        $(".tab-option a").on("click", function (e) {
      $(e.currentTarget).addClass("active");
    });

*/