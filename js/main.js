$(document).ready(function(){

    $("button.navbar-toggler").click(function(){
        collapseAll();
    });

$('a.navbar-toggler').on('click', function(event) {
        $(this).parent().siblings().removeClass('open').find("ul").collapse('hide');
    });


	$('body').on('click', '.btn-show-searchbox', function(e) {
		var $parent = $(this).closest('.input-group');
		$parent.addClass('is-focused');
		$parent.find('.form-control').trigger('focus');
	}).on('blur', '.search-add-on .form-control', function(e) {
		var $parent = $(this).closest('.input-group');

		if(window.hideSearchTimer != undefined) {
			clearTimeout(window.hideSearchTimer);
		}

		window.hideSearchTimer = setTimeout(function() {
			$parent.removeClass('is-focused');
		}, 1000);
	}).on('focus', '.search-add-on .form-control', function(e) {
		if(window.hideSearchTimer != undefined) {
			clearTimeout(window.hideSearchTimer);
		}
	});

});


function collapseAll(){
    $('a.navbar-toggler').parent().find('ul').removeClass("in");
}