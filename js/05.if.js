/*
변수타입
primitive type : number | string | boolean | null | undefined
object : array, function, RegExp

연산자
+ , - , * , / , %(mod) => 4%3 : 1, 5%3 : 2, 6%3 : 0
비교연산자 
==, ===, <=, >=, <, > --> true | false

if문 1
if(조건) {
	조건이 참일때만 실행
}

if문 2
if(조건) {
	조건이 참일때 실행
}
else {
	조건이 거짓일때 실행
}

if문 3
if(조건1) {
	조건1이 참이면 실행
}
else if(조건2) {
	조건2가 참이면 실행
}
else if(조건3) {
	조건3이 참이면 실행
}
else {
	그 외의 경우
}

삼항연산자
조건 ? 참일경우 실행문 : 거짓일 경우 실행문
*/

// alert("Hello");
// confirm("선택하세요.");
// var num = prompt("원하는 숫자를 입력해 주세요");

$("#bt1").on("click", function(){
	if(confirm("아래의 글을 삭제하시겠습니까?\n확인을 눌러주세요.")) {
		$(".rev-data").empty();
	}
	else {
		$(".rev-data").append('<div>살려주셔서 감사해요~</div>');
	}
});

$("#bt2").click(function(){
	var str = prompt("원하는 숫자를 입력해 주세요.");
	if(str > 0) {
		$(".rev-data").html("양수를 고르셨네요.");
	}
	else if(str < 0) {
		$(".rev-data").html("음수를 고르셨네요.");
	}
	else if(str == 0) {
		$(".rev-data").html("0을 고르셨네요.");
	}
	else {
		$(".rev-data").html("잘 모르겠어요");
	}
});

$("#bt3").click(function(){
	/*
	$(객체).hasClass("클래스명") 
	=> 객체가 클래스를 가지고 있으면 true
	=> 객체가 클래스를 가지고 있지 않으면 false
	*/
	/*
	if($(".box").hasClass("d-none")) {
		$(".box").removeClass("d-none");
	}
	else {
		$(".box").addClass("d-none");
	}
	// 실행문이 한줄일 경우 {} 생략 가능
	if($(".box").hasClass("d-none")) $(".box").removeClass("d-none");
	else $(".box").addClass("d-none");
	*/
	$(".box").hasClass("d-none") ? $(".box").removeClass("d-none") : $(".box").addClass("d-none");
});