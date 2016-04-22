$(document).ready(function(){

    $("button.navbar-toggler").click(function(){
        collapseAll();
    });

$('a.navbar-toggler').on('click', function(event) {
        $(this).parent().siblings().removeClass('open').find("ul").collapse('hide');
    });
});


function collapseAll(){
    $('a.navbar-toggler').parent().find('ul').removeClass("in");
}