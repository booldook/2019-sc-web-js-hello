/* 
"slow", "fast", 2000(ms)
jQuery animation 3총사
	- hide/show/toggle()
	- fadeIn/fadeOut/fadeToggle()
	- slideIn/slideOut/slideToggle()

jQuery class 다루기 (클래스명에 .은 생략)
	- addClass("클래스명 [클래스명 ...]");
	- removarClass("클래스명 [클래스명 ...]");
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


// 세로형 네비게이션 .vtc-nav
$(".vtc-nav").hover(function(){
	// mouseover
	$(this).addClass("bg-secondary text-light");
	$(this).children("ul").stop().slideDown(300);
}, function(){
	// mouseleave
	$(this).removeClass("bg-secondary text-light");
	$(this).children("ul").stop().slideUp(300);
});


// animate()
/* 
animate({value}, speed, ease, function(){});
- {value}				: https://www.w3schools.com/jquery/eff_animate.asp
									backgroundPositionX, backgroundPositionY
									borderWidth, borderBottomWidth, borderLeftWidth
									borderRightWidth, borderTopWidth, borderSpacing
									margin, marginBottom, marginLeft, marginRight, marginTop
									opacity
									outlineWidth
									padding, paddingBottom, paddingLeft, paddingRight, paddingTop
									height, width, maxHeight, maxWidth, minHeight, minWidth
									fontSize
									bottom, left, right, top
									letterSpacing, wordSpacing, lineHeight, textIndent
- speed					: (ms:밀리초 - 1/1000초) 1000: 1초, 2000: 2초
- ease 					: swing(css: ease-in-out) | linear(css: linear정속) 
- function(){}	: 콜백(선언해 놓으면 애니메이션이 완료된 후 실행된다.)
*/
$("#bt-ani1").click(function(){
	$("#box-ani1").stop().animate({
		"opacity": 0,
		"height": "500px"
	}, 2000, function(){
		$(this).stop().animate({
			"opacity": 1,
			"height": "200px"
		}, 300);
		//alert("Animation이 완료되었습니다.");
	});
});

$("#bt-ani2").click(function(){
	$("#box-ani2").stop().animate({"opacity":0}, 1000, function(){
		$(this).css({"opacity": 1});
		$(this).children("div").stop().animate({"font-size": "2rem", "opacity": 1}, 500, function(){
			$(this).stop().animate({"font-size": "1rem"}, 300);
		});
	});
});