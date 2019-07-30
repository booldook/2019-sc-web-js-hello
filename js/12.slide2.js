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
var gap = 3000;			// 3초에 한번씩 애니메이션 실행
var speed = 500;		// 애니메이션 속도가 0.5s
var now = 1;				// 현재 0번에서 다음 1번으로 이동시키려 함.
// var obj;
var html;

// 초기화
for(var i in slides) {
	html = '<div class="slide"><img src="'+slides[i].src+'" class="w-100"></div>';
	// obj = $(html).appendTo('.slides');
	// obj.css({"left": (i*100)+"%"});
	$('.slides').append(html);
	if(i == 0) $(".pager").append('<li class="cir-sel"></li>');
	else if(i < slides.length-1) $(".pager").append('<li class="cir"></li>');
}
$(".slide").each(function(i){
	$(this).css({"left": (i*100)+"%"});
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
		$(".pager > li").removeClass("cir-sel").addClass("cir");
		if(now == slides.length - 1) {
			$(this).css({"left": 0});
			$(".pager > li").eq(0).removeClass("cir").addClass("cir-sel");
			now = 1;
		}
		else {
			$(".pager > li").eq(now).removeClass("cir").addClass("cir-sel");
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