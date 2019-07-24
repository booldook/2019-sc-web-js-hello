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

오늘(19.07.24) 배울내용
3. jQuery의 DOM(Document Object Model) 관련 함수(메서드)
	- $(객체).append('태그내용')    => 객체 안에서 맨 뒤에 태그내용을 추가
	- $(객체).prepend('태그내용')   => 객체 안에서 맨 앞에 태그내용을 추가
	- $('태그내용').appendTo(객체)  => 객체 안에서 맨 뒤에 태그내용을 추가
	- $('태그내용').prependTo(객체) => 객체 안에서 맨 앞에 태그내용을 추가
*/