$(document).ready(function() {

    $(".header_burger").click(function() {
        $(".header_burger, .nav-menu__burger").toggleClass("active");
        $("body").toggleClass("lock");
    });
    $(".nav-menu__burger").click(function() {
        $(".header_burger, .nav-menu__burger").toggleClass("active");
        $("body").toggleClass("lock");
    });
});