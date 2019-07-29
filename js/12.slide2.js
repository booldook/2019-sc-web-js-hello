// 데이터
var slides = [
	{"src": "../img/p1.png", "link":"#"},
	{"src": "../img/p2.png", "link":"#"},
	{"src": "../img/p3.png", "link":"#"},
	{"src": "../img/p4.png", "link":"#"},
	{"src": "../img/p5.png", "link":"#"},
	{"src": "../img/p1.png", "link":"#"}
];

// 전역변수
var interval;
var gap = 3000;
var speed = 500;
var now = 1;
var $slide = [];

// 초기화
for(var i in slides) {
	$slide[i] = $('<div class="slide"><img src="'+slides[i].src+'" class="w-100"></div>').appendTo('.slides');
	$slide[i].css({"left": (i*100)+"%"});
	if(i == 0) $(".pager").append('<li class="cir-sel"></li>');
	else if(i < slides.length-1) $(".pager").append('<li class="cir"></li>');
}


// 반복, 움직임
interval = setInterval(function(){
	$(".slides").stop().animate({"left": -(now*100)+"%"}, speed, function(){
		$(".pager > li").removeClass("cir-sel").addClass("cir");
		if(now == $slide.length - 1) {
			$(this).css({"left": 0});
			$(".pager > li").eq(0).removeClass("cir").addClass("cir-sel");
			now = 1;
		}
		else {
			$(".pager > li").eq(now).removeClass("cir").addClass("cir-sel");
			now++;
		}
	});
}, gap);
