var dist_body = 0;
var dist_motto1 = 0;

window.onload = function(e){ 
	if ($(window).width() < 500){
		$("#running-code").attr("height","150");
	}

};

$("#enter").click(function(event) {
	$("#running-code").css('display', 'none');
	$("#frame").css('padding-left', '0');
	$("#successful").css('display', 'block');
	$("#fadein").fadeOut(2000);
});

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
	}
});

$("#navbar-brand").click(function() {
	location.reload();
});

var movingIn1 = false;
var movingOut1 = false;
var movingIn2 = false;
var movingOut2 = false;

$(window).scroll(function() { 
	dist_body = $(window).scrollTop();
	$("#menu").css('background-color', 'rgba(240, 240, 240,'+ Math.min(0.9, dist_body/300).toString() + ')');
	$(".navbar-brand").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('border-color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$(".menu-link").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$(".navbar").css('height', Math.max(60, 70 - dist_body/300 * 10).toString() + 'px');
	$("#navbar-brand").css('font-size', Math.max(1, 1.5 - dist_body/300 * 0.5) + 'rem');


	if ($("#motto1").offset().top - $(window).scrollTop() < 400  && movingIn1 == false){
		movingOut1 = false;
		$("#motto1").stop().animate({'margin-left': '0rem'});
		movingIn1 = true;
	} else if ($("#motto1").offset().top - $(window).scrollTop() >= 400 && movingOut1 == false) {
		movingIn1 = false;
		$("#motto1").stop().animate({'margin-left': '60rem'});
		movingOut1 = true;
	}
	if ($("#motto2").offset().top - $(window).scrollTop() < 400 && movingIn2 == false){
		movingOut2 = false;
		$("#motto2").stop().animate({'margin-right': '0rem'});
		movingIn2 = true;
	} else if ($("#motto1").offset().top - $(window).scrollTop() >= 400 && movingOut2 == false) {
		movingIn2 = false;
		$("#motto2").stop().animate({'margin-right': '60rem'});
		movingOut2 = true;
	}
});

$(".menu-link").hover(function(){
	$(this).css('color', "rgb(" + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + ")");
});

$("#navbar-toggler").hover(function(){
	$("#navbar-toggler").css('color', "rgb(" + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('border-color', "rgb(" + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + ")");
});

$(".menu-link").mouseleave(function(){
	$(this).css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
});

$("#navbar-toggler").mouseleave(function(){
	$("#navbar-toggler").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('border-color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
});

/*
function boxRollovers() {
	$selector = $("");
	XAngle = 0;
	YAngle = 0;
	Z = 50;
	$selector.on("mousemove",function(e){
		var $this = $(this);
		var XRel = e.pageX - $this.offset().left;
		var YRel = e.pageY - $this.offset().top;
		var width = $this.width();

		YAngle = -(0.5 - (XRel / width)) * 30; 
		XAngle = (0.5 - (YRel / width)) * 30 - 12;
		updateView($(""));
	});
}

function updateView(oLayer) {
	oLayer.css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
	oLayer.find("strong").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle) + "deg) rotateY(" + (YAngle) + "deg)","transition":"none","-webkit-transition":"none"});
}
*/
