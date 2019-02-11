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

$(window).scroll(function() { 
	dist_body = $(window).scrollTop();
	$(".navbar").css('height', Math.max(60, 70 - dist_body/300 * 10).toString() + 'px');
	$("#navbar-brand").css('font-size', Math.max(1.25, 1.5 - dist_body/300 * 0.25) + 'rem');
	$("#title").css('background-position', '0% ' + Math.min(100, Math.max(0, (250 + dist_body - $("#title").offset().top)/ 2)).toString() + '%');

});
$(".menu-link").click(function(event){
	$('#content').fadeOut();
});