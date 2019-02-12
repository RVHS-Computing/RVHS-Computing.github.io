var dist_body = 0;

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

$(".menu-link").click(function(event){
	$('#content').fadeOut();
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
	$("#navbar-brand").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('border-color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$(".menu-link").css('color', "rgb(" + Math.max(80, 215 - dist_body/300 * 135).toString() + "," + Math.max(80, 215 - dist_body/300 * 135).toString() + "," + Math.max(80, 215 - dist_body/300 * 135).toString() + ")");
	$(".navbar").css('height', Math.max(60, 70 - dist_body/300 * 10).toString() + 'px');
	$("#navbar-brand").css('font-size', Math.max(1.25, 1.5 - dist_body/300 * 0.25) + 'rem');
});

$(".navbar-brand").hover(function(){
	$(this).css('color', "rgb(" + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + ")");
});

$(".menu-link").hover(function(){
	$(this).css('color', "rgb(" + Math.max(40, 175 - dist_body/300 * 135).toString() + "," + Math.max(40, 175 - dist_body/300 * 135).toString() + "," + Math.max(40, 175 - dist_body/300 * 135).toString() + ")");
});

$("#navbar-toggler").hover(function(){
	$("#navbar-toggler").css('color', "rgb(" + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('border-color', "rgb(" + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + "," + Math.max(40, 215 - dist_body/300 * 175).toString() + ")");
});

$(".navbar-brand").mouseleave(function(){
	$(this).css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
});

$(".menu-link").mouseleave(function(){
	$(this).css('color', "rgb(" + Math.max(80, 215 - dist_body/300 * 135).toString() + "," + Math.max(80, 215 - dist_body/300 * 135).toString() + "," + Math.max(80, 215 - dist_body/300 * 135).toString() + ")");
});

$("#navbar-toggler").mouseleave(function(){
	$("#navbar-toggler").css('color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
	$("#navbar-toggler").css('border-color', "rgb(" + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + "," + Math.max(80, 255 - dist_body/300 * 175).toString() + ")");
});

window.odometerOptions = {
	selector: '.countdown-value',
	duration: 800
};

var countDownDate = new Date("Feb 18, 2019 00:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	$("#countdown_days").html(days);
	$("#countdown_hours").html(hours);
	$("#countdown_minutes").html(minutes);
	$("#countdown_seconds").html(seconds);
	var percen_day = (distance % (1000 * 60 * 60 * 24 * 30))/(1000 * 60 * 60 * 24 * 30 / 98);
	$("#countdown_cell_day").stop().animate({'background-position-y': percen_day.toString() + '%'}, 16000, 'linear');
	var percen_hour = (distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60 * 24/ 98);
	$("#countdown_cell_hour").stop().animate({'background-position-y': percen_hour.toString() + '%'}, 8000, 'linear');
	var percen_min = (distance % (1000 * 60 * 60))/(1000 * 60 * 60 / 98);
	$("#countdown_cell_min").stop().animate({'background-position-y': percen_min.toString() + '%'}, 4000, 'linear');
	var percen_sec = (distance % (1000 * 60))/(1000 * 60 / 98);
	$("#countdown_cell_sec").stop().animate({'background-position-y': percen_sec.toString() + '%'}, 2000, 'linear');
}, 2000);

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
