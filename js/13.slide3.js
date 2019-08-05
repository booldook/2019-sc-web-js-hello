var slides = [
	{src: "../img/prd0.png"},
	{src: "../img/prd1.png"},
	{src: "../img/prd2.png"},
	{src: "../img/prd3.png"},
	{src: "../img/prd4.png"},
	{src: "../img/prd5.png"},
	{src: "../img/prd6.png"},
	{src: "../img/prd7.png"},
	{src: "../img/prd8.png"}
];

var now = 0;	//  맨 처음 .slide의 index
var end = slides.length - 1;	// 마지막 .slide의 index
var dir = "L";	// 움직이는 방향 L / R
var tar; 	// 움직임 목표값 L:-50% / R:0
var speed = 500;
var gap = 3000;
init();
function init() {
	for(var i=0, html=''; i<6; i++) {
		html += '<li class="slide p-2" style="flex: 25% 0 0;">';
		html += '<img src="" class="w-100">';
		html += '</li>';
	}
	$(".slides").html(html);
}

function slideAni() {
	if(dir == "L") tar = "-50%";
	else tar = 0;
	// 맨처음 li
	if(now == 0) $(".slide").eq(0).find("img").attr("src", slides[end].src);
	else $(".slide").eq(0).find("img").attr("src", slides[(now--)].src);
	// 보여지는 4개의 li
	for(var i=0; i<4; i++) {
		if()
	}
	$(".slides").stop().animate({"left": tar}, speed, function(){

	});
}



