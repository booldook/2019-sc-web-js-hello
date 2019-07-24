/*
지금까지 배운 jquery 정리
1. Event Handler
	- click, mouseover(모바일을 위해 mouseenter를 권장), mouseleave, hover
	- $(객체).이벤트명(function(){

		});
	- $(객체).on("이벤트명", function(){

		});
	- $(객체).off("이벤트명") => 객체에 주어진 이벤트 삭제

2. jQuery의 애니메이션
	- $(객체).hide() | $(객체).show() | $(객체).toggle() ...
	- $(객체).stop().animate({css값}, [속도], [ease], [function(){}])

3. jQuery의 css 다루기
	- $(객체).css({"css속성":"값", "css속성":"값"});
	- $(객체).css("css속성", "값");
	- $(객체).addClass("클래스명")		=> 객체에 클래스를 더한다.
	- $(객체).removeClass("클래스명") => 객체에 클래스를 삭제한다.
	- $(객체).toggleClass("클래스명") => 객체에 클래스를 토글한다.
	- $(객체).hasClass("클래스명")    => 객체가 클래스를 가지고 있으면 true, 아니면 false를 리턴한다.

오늘(19.07.24) 배울내용
4. jQuery의 DOM(Document Object Model) 관련 함수(메서드)
	- $(객체).append('태그내용')    => 객체 안에서 맨 뒤에 태그내용을 추가
	- $(객체).prepend('태그내용')   => 객체 안에서 맨 앞에 태그내용을 추가
	- $('태그내용').appendTo(객체)  => 객체 안에서 맨 뒤에 태그내용을 추가
	- $('태그내용').prependTo(객체) => 객체 안에서 맨 앞에 태그내용을 추가
	- $(객체).empty()   => 객체 안의 모든 내용을 지운다.
	- $(객체).remove()  => 객체를 지운다.

5. 선택자
	- $(객체).parent()						=> 객체의 부모를 리턴한다.
	- $(객체).chidren("선택자")		=> 객체의 자식중 선택자를 선택한다.
	- $(객체).find("선택자")			=> 객체의 자손중 선택자를 선택한다.
	- $(객체).next()							=> 객체의 다음 형제를 선택한다.
	- $(객체).prev()							=> 객체의 이전 형제를 선택한다.
	- $(객체).eq(3)								=> 객체들 중 번호번째(번호는 0부터 시작) 객체를 선택한다.
*/

$("#btAppend").click(function(){
	$(".stage").append('<div class="box-new p-3 bg-danger" style="opacity: 0;">append();</div>');
	$(".stage > :last-child").stop().animate({"opacity": 1}, 1000);
});

$("#btAppendTo").click(function(){
	var $div = $('<div class="box-new p-3 bg-danger" style="opacity: 0;">appendTo();</div>').appendTo(".stage");
	$div.stop().animate({"opacity": 1}, 1000);
});

$("#btPrepend").click(function(){
	var r = $(".stage").prepend('<div class="box-new p-3 bg-success">prepend();</div>');
	console.log(r);
});

$("#btPrependTo").click(function(){
	var r = $('<div class="box-new p-3 bg-success">prependTo();</div>').prependTo(".stage");
	console.log(r);
});

$("#btEmpty").click(function(){
	$(".stage").empty();
});

$("#btRemove").click(function(){
	$(".box-new").remove();
});

$("#btEq").click(function(){
	$(".box-new").eq(0).append('<span class="ml-3">eq(0)</span>');
	$(".box-new").eq(1).append('<span class="ml-3">eq(1)</span>');
	$(".box-new").eq(2).append('<span class="ml-3">eq(2)</span>');
	$(".box-new").eq(3).append('<span class="ml-3">eq(3)</span>');
});
