window.onload = function(e){
	$("#content").fadeIn();
};

$('#to_top').click(function(event) {
	var target = $("#top");
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 2000, function() {
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

$('#to_projects').click(function(event) {
	var target = $("#title-projects");
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 2000, function() {
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

$('#to_python').click(function(event) {
	var target = $("#title-python");
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 2000, function() {
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

$('#to_web').click(function(event) {
	var target = $("#title-web");
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 2000, function() {
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

$('#to_drone').click(function(event) {
	var target = $("#title-drone");
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000, function() {
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

$('#to_ai').click(function(event) {
	var target = $("#title-ai");
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 2000, function() {
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

$(window).scroll(function() { 
	dist_body = $(window).scrollTop();
	$(".navbar").css('height', Math.max(60, 70 - dist_body/300 * 10).toString() + 'px');
	$("#navbar-brand").css('font-size', Math.max(1.25, 1.5 - dist_body/300 * 0.25) + 'rem');
	$("#menu").css('background-color', 'rgba(240, 240, 240,'+ Math.min(0.9, dist_body/300).toString() + ')');
	$("#title-python").css('background-position', '0% ' + Math.min(100, Math.max(0, (250 + dist_body - $("#title-python").offset().top)/ 3)).toString() + '%');
	$("#title-web").css('background-position', '0% ' + Math.min(100, Math.max(0, (250 + dist_body - $("#title-web").offset().top)/ 3)).toString() + '%');
	$("#title-drone").css('background-position', '0% ' + Math.min(100, Math.max(0, (250 + dist_body - $("#title-drone").offset().top)/ 3)).toString() + '%');
	$("#title-ai").css('background-position', '0% ' + Math.min(100, Math.max(0, (250 + dist_body - $("#title-ai").offset().top)/ 3)).toString() + '%');
	
	if ($("#title-projects").offset().top - $(window).scrollTop() < 10 && $("#title-python").offset().top - $(window).scrollTop() > 10){
		$("#to_projects").addClass('active');
		$("#to_python").removeClass('active');
		$("#to_web").removeClass('active');
		$("#to_drone").removeClass('active');
		$("#to_ai").removeClass('active');
	} else if ($("#title-python").offset().top - $(window).scrollTop() < 10 && $("#title-web").offset().top - $(window).scrollTop() > 10){
		$("#to_projects").removeClass('active');
		$("#to_python").addClass('active');
		$("#to_web").removeClass('active');
		$("#to_drone").removeClass('active');
		$("#to_ai").removeClass('active');
	} else if ($("#title-web").offset().top - $(window).scrollTop() < 10 && $("#title-drone").offset().top - $(window).scrollTop() > 10){
		$("#to_projects").removeClass('active');
		$("#to_python").removeClass('active');
		$("#to_web").addClass('active');
		$("#to_drone").removeClass('active');
		$("#to_ai").removeClass('active');
	} else if ($("#title-drone").offset().top - $(window).scrollTop() < 10 && $("#title-ai").offset().top - $(window).scrollTop() > 10){
		$("#to_projects").removeClass('active');
		$("#to_python").removeClass('active');
		$("#to_web").removeClass('active');
		$("#to_drone").addClass('active');
		$("#to_ai").removeClass('active');
	} else if ($("#title-ai").offset().top - $(window).scrollTop() < 10 && $("footer").offset().top - $(window).scrollTop() > 10){
		$("#to_projects").removeClass('active');
		$("#to_python").removeClass('active');
		$("#to_web").removeClass('active');
		$("#to_drone").removeClass('active');
		$("#to_ai").addClass('active');
	}


});

$(".menu-link").click(function(event){
	$('#content').fadeOut();
});