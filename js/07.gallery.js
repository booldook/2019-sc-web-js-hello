// .thumb 안에있는 img를 click하면 this의 src를 .pic안에있는 img의 src로 바꾼다.
// var src = $(객체).attr("src") => 객체의 속성중 src의 값을 가져온다.
// $(객체).attr("src", "새로운값") => 객체의 src 값을 새로운값으로 바꾼다.
// $(객체).trigger("click(이벤트)")	=> 객체에 이벤트를 실행시켜준다.
$(".thumb img").click(function(){
	var src = $(this).attr("src");
	$(".pic img").css("opacity", 0);
	$(".pic img").attr("src", src);
	$(".pic img").stop().animate({"opacity": 1}, 500);
	// $(".pic img").css("opacity", 0).attr("src", src).stop().animate({"opacity": 1}, 500);
});
$(".thumb img").eq(2).trigger("click");