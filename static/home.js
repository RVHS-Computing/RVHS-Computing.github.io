var dist_body = 0;
var dist_motto1 = 0;

window.onload = function(e){ 
	if ($(window).width() < 500){
		$("#running-code").attr("height","150");
	}

};

$("#enter").click(function(event) {
	$("#fadein").fadeOut();
	$("#content").fadeIn();
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

$("body").scroll(function() { 
	dist_body = $("body").scrollTop();
	$("#menu").css('background-color', 'rgba(240, 240, 240,'+ Math.min(0.9, dist_body/300).toString() + ')');
	$(".navbar-brand").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('border-color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$(".menu-link").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$(".navbar").css('height', Math.max(60, 70 - dist_body/300 * 10).toString() + 'px');
	$("#navbar-brand").css('font-size', Math.max(1, 1.5 - dist_body/300 * 0.5) + 'rem');

	if ($("#motto1").offset().top < 450){
		$("#motto1").stop().animate({'margin-left': '0rem'});
	} else {
		$("#motto1").stop().animate({'margin-left': '50rem'});
	}
	if ($("#motto2").offset().top < 450){
		$("#motto2").stop().animate({'margin-right': '0rem'});
	} else {
		$("#motto2").stop().animate({'margin-right': '50rem'});
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
