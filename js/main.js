$(document).ready(function(){
    $(".Jnav_btn").click(function(){
        Jnav();
    });
});

$(window).resize(function(){
    var mediaquery = window.matchMedia("(min-width: 990px)");
        if (mediaquery.matches) {
            $(".Jnav").show().removeClass("active");
            $("#main-nav").removeClass("active").show();
            $(".btns").show();
        }else{
            $.SmartMenus.hideAll();
            $("#main-nav").removeClass("active").slideUp(300);
            $(".btns").slideUp(300);
        }
});
function Jnav(){
    if($("#main-nav").hasClass("active")){
        $("#main-nav").removeClass("active").slideUp(300);
        $(".btns").slideUp(300);
        $.SmartMenus.hideAll();
    }else{
       $("#main-nav").addClass("active").slideDown(300);
       $(".btns").slideDown(300)
    }
}


