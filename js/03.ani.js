/* 
"slow", "fast", 2000(ms)
jQuery animation 3총사
 - hide/show/toggle()
 - fadeIn/fadeOut/fadeToggle()
 - slideIn/slideOut/slideToggle()
*/

$("#btShow").click(function(){
	$("#box1").stop().show("slow");
	$("#box2").stop().show("slow");
	$("#box3").stop().show("slow");
});

$("#btHide").click(function(){
	$("#box1").stop().hide(2000);
	$("#box2").stop().hide(2000);
	$("#box3").stop().hide(2000);
});

$("#btToggle").click(function(){
	$("#box1").stop().toggle(2000);
	$("#box2").stop().toggle(2000);
	$("#box3").stop().toggle(2000);	
});

$("#btFadeIn").click(function(){
	$("#box1").stop().fadeIn("slow");
	$("#box2").stop().fadeIn("slow");
	$("#box3").stop().fadeIn("slow");
});

$("#btFadeOut").click(function(){
	$("#box1").stop().fadeOut(2000);
	$("#box2").stop().fadeOut(2000);
	$("#box3").stop().fadeOut(2000);
});

$("#btFadeToggle").click(function(){
	$("#box1").stop().fadeToggle(2000);
	$("#box2").stop().fadeToggle(2000);
	$("#box3").stop().fadeToggle(2000);	
});

$("#btSlideUp").click(function(){
	$("#box1").stop().slideUp("slow");
	$("#box2").stop().slideUp("slow");
	$("#box3").stop().slideUp("slow");
});

$("#btSlideDown").click(function(){
	$("#box1").stop().slideDown(2000);
	$("#box2").stop().slideDown(2000);
	$("#box3").stop().slideDown(2000);
});

$("#btSlideToggle").click(function(){
	$("#box1").stop().slideToggle(500);
	$("#box2").stop().slideToggle(500);
	$("#box3").stop().slideToggle(500);	
});


// 네비게이션
$(".navi").mouseover(function(){
	$(this).children("ul").stop().slideDown(500);
});

$(".navi").mouseleave(function(){
	$(this).children("ul").stop().slideUp(500);
});