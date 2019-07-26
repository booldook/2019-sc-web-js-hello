/* 
수학함수
var floor = Math.floor(4.9);	=> 4 //무조건 버림
var ceil = Math.ceil(4.1);		=> 5 //무조건 올림
var round = Math.round(4.4);	=> 4 //반올림
*/

// $("#scoreModal").modal();

// 전역변수 선언
var playerPrev = '<div class="player position-relative" style="width: 90px;"><img src="../img/char.png" class="char w-100"><div class="badge badge-primary rounded px-2 position-absolute" style="top:0; right:0;">';
var playerNext = '</div></div>';
var cnt;

//초기화
$("#btReset").click(function(){
	// #btStart 안보이고, #btInit 보이고, #cnt value='4'로 만들고, .stage의 .player를 지우고, #scoreModal .modal-body안을 지운다.
	$("#btInit").removeClass("d-none");
	$("#btStart").addClass("d-none");
	$("#cnt").removeClass("d-none");
	$("#cnt").val('4');
	$(".stage").empty();
	$("#scoreModal .modal-body").empty();
});

// 준비
$("#btInit").click(function(){
	// #btInit 안보이고, #btStart 보이고, #cnt갯수만큼 .player 생성
	$("#btInit").addClass("d-none");
	$("#btStart").removeClass("d-none");
	cnt = $("#cnt").val();	// input의 value값을 전역변수 cnt에 저장한다.
	$("#cnt").addClass("d-none");
	for(var i=0; i<cnt; i++) $(".stage").append(playerPrev + (i+1) + playerNext);
});

// 시작
// #cnt의 갯수만큼 생성된 .player가 동시에 animate()된다. 단 속도는 2초부터 2.5초 사이에 움직인다.
//마지막 .player의 animate() 종료 시점에서 #scoreModal을 modal()한다. 단 각각의 .player가 animate()가 종료될때 마다 .player의 .badge 안의 숫자를 .modal-body에 h3태그로 등록한다.

$("#btStart").click(function(){
	$("#btStart").addClass("d-none");
	$("#btReset").addClass("d-none");
	var speed;
	for(var i=0; i<cnt; i++) {
		speed = Math.floor(Math.random() * 500 + 2000);
		$(".player").eq(i).stop().animate({"left":"90%"}, speed, function(){
			var myNumber = $(this).find(".badge").html();
			var $h3 = $('<h3>'+myNumber+'번</h3>').appendTo("#scoreModal .modal-body");
			if($h3.index() == cnt -1) {
				$("#scoreModal").modal();
				$("#btReset").removeClass("d-none");
			}
		});
	}
});

