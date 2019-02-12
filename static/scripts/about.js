window.onload = function(e){
	$("#content").fadeIn();
};

$('#to_top').click(function(event) {
	var target = $("top");
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 4000, function() {
			var $target = $(target);
			$target.focus();
			if ($target.is(":focus")) {
				return false;
			} else {
				$target.attr('tabindex','-1');
				$target.focus();
			};
		});
	};
});

var dist_body = 0;
var movingIn1 = false;
var movingOut1 = false;
var movingIn2 = false;
var movingOut2 = false;


$(window).scroll(function() { 
	dist_body = $(window).scrollTop();
	$(".navbar").css('height', Math.max(60, 70 - dist_body/300 * 10).toString() + 'px');
	$("#navbar-brand").css('font-size', Math.max(1.25, 1.5 - dist_body/300 * 0.25) + 'rem');
	$("#menu").css('background-color', 'rgba(240, 240, 240,'+ Math.min(0.9, dist_body/300).toString() + ')');


	if ($("#motto1").offset().top - $(window).scrollTop() < 500 && movingIn1 == false){
		movingOut1 = false;
		$("#motto1").stop().animate({'margin-left': '0rem'});
		movingIn1 = true;
	} else if ($("#motto1").offset().top - $(window).scrollTop() >= 500 && movingOut1 == false) {
		movingIn1 = false;
		$("#motto1").stop().animate({'margin-left': '60rem'});
		movingOut1 = true;
	}
	if ($("#motto2").offset().top - $(window).scrollTop() < 500 && movingIn2 == false){
		movingOut2 = false;
		$("#motto2").stop().animate({'margin-right': '0rem'});
		movingIn2 = true;
	} else if ($("#motto2").offset().top - $(window).scrollTop() >= 500 && movingOut2 == false) {
		movingIn2 = false;
		$("#motto2").stop().animate({'margin-right': '60rem'});
		movingOut2 = true;
	}
});

$(".menu-link").click(function(event){
	$('#content').fadeOut();
});