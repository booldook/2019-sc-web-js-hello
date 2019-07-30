// IIFE (즉시실행함수)
(function () {
	console.log("함수실행");
}());

// 데이터
var slides = [
	{"src": "../img/p1.png", "link":"#"},
	{"src": "../img/p2.png", "link":"#"},
	{"src": "../img/p3.png", "link":"#"},
	{"src": "../img/p4.png", "link":"#"},
	{"src": "../img/p5.png", "link":"#"}
];

// 가로슬라이드
(function () {
	// 전역변수
	var interval;
	var gap = 3000;			// 3초에 한번씩 애니메이션 실행
	var speed = 500;		// 애니메이션 속도가 0.5s
	var now = 1;				// 현재 0번에서 다음 1번으로 이동시키려 함.
	// var obj;
	var html;

	// 초기화
	// obj = $(html).appendTo('.slides');
	// obj.css({"left": (i*100)+"%"});
	for(var i in slides) {
		html = '<div class="slide"><img src="'+slides[i].src+'" class="w-100"></div>';
		$('.slides').append(html);
	}
	$('.slides').append($(".slides > .slide").eq(0).clone());
	$(".slides > .slide").each(function(i){
		$(this).css({"left": (i*100)+"%"});
		if(i == 0) $(".pager1").append('<li class="cir-sel"></li>');
		else if(i < slides.length) $(".pager1").append('<li class="cir"></li>');
	});
	/*
	반복문 - Javascript
	for(var i=0; i<10; i++) {

	}
	for(var i in Array) {

	}
	반복문 - jQuery
	$(객체-여러개).each(function(index){

	});
	*/

	// 반복, 움직임
	function slideShow(){
		$(".slides").stop().animate({"left": -(now*100)+"%"}, speed, function(){
			$(".pager1 > li").removeClass("cir-sel").addClass("cir");
			if(now == slides.length) {
				$(this).css({"left": 0});
				$(".pager1 > li").eq(0).removeClass("cir").addClass("cir-sel");
				now = 1;
			}
			else {
				$(".pager1 > li").eq(now).removeClass("cir").addClass("cir-sel");
				now++;
			}
		});
	}
	interval = setInterval(slideShow, gap);

	// Event - 마우스를 배너에 올리면 배너의 setInterval이 멈춘다. 마우스를 내리면 다시 setInterval이 작동한다.
	$(".slides").mouseenter(function(){
		clearInterval(interval);
	});
	$(".slides").mouseleave(function(){
		interval = setInterval(slideShow, gap);
	}); 

	// Event - pager > li를 클릭하면 원하는 페이지로 이동한다.
	$(".pager1 > li").click(function(){
		now = $(this).index();
		slideShow();
	});
}());

// 페이드 슬라이드
(function(){
	// 전역변수 선언
	var interval;
	var speed = 500;
	var gap = 3000;
	var depth = 10;
	var now = 1;
	var html;
	var $slide;

	// 초기화
	init();
	function init() {
		for(var i in slides) {
			html = '<li class="slide"><img src="'+slides[i].src+'" class="w-100"></li>';
			$(".slides2").append(html);
		}
		$(".slides2 > .slide").each(function(i){
			if(i == 0) {
				$(this).css({"z-index": depth++});
				$(".pager2").append('<li class="cir-sel"></li>');
			}
			else $(".pager2").append('<li class="cir"></li>');
		});
		$slide = $(".slides2 > .slide");
	}
	
	// 반복 동작 함수
	function slideShow() {
		$slide.eq(now).css({"z-index":depth++, "opacity": 0});
		$slide.eq(now).stop().animate({"opacity": 1}, speed, function(){
			$(".pager2 > li").removeClass("cir-sel").addClass("cir");
			$(".pager2 > li").eq(now).removeClass("cir").addClass("cir-sel");
			if(now == slides.length - 1) now = 0;
			else now++;
		});
	}
	interval = setInterval(slideShow, gap);

	// Event
	$(".slides2").mouseenter(function(){
		clearInterval(interval);
	});

	$(".slides2").mouseleave(function(){
		interval = setInterval(slideShow, gap);
	});

	$(".pager2 > li").click(function(){
		now = $(this).index();
		slideShow();
	});
}());

// 세로 슬라이드
(function(){
	var interval;
	var now = 1;
	var speed = 500;
	var gap = 3000;
	init();
	function init() {
		for(var i in slides) {
			$(".slides3").append('<li class="slide"><img src="'+slides[i].src+'" class="w-100"></li>');
		}
		$(".slides3 > .slide").each(function(i){
			if(i == 0) {
				$(".pager3").append('<li class="cir-sel"></li>');
				$(this).parent().append($(this).clone());
			}
			else $(".pager3").append('<li class="cir"></li>');
		});
	}
	function slideShow() {
		$(".slides3").stop().animate({"top": -(now*100)+"%"}, speed, function(){
			$(".pager3 > li").removeClass("cir-sel").addClass("cir");
			if(now == slides.length) {
				$(this).css({"top": 0});
				$(".pager3 > li").eq(0).removeClass("cir").addClass("cir-sel");
				now = 1;
			}
			else {
				$(".pager3 > li").eq(now).removeClass("cir").addClass("cir-sel");
				now++;
			}
		});
	}
	interval = setInterval(slideShow, gap);

	$(".slides3").mouseenter(function(){
		clearInterval(interval);
	});
	
	$(".slides3").mouseleave(function(){
		interval = setInterval(slideShow, gap);
	});
	
	$(".pager3 > li").click(function(){
		now = $(this).index();
		slideShow();
	});
}());
