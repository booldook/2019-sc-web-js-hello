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
	$("#btInit").removeClass("d-none");
	$("#btStart").addClass("d-none");
	$("#cnt").val('4');
	$(".stage").empty();
	$("#scoreModal .modal-body").empty();
});


$("#btInit").click(function(){
	// 난 안보이고, #btStart 보이고, #cnt갯수만큼 player 생성
	$("#btInit").addClass("d-none");
	$("#btStart").removeClass("d-none");
	cnt = $("#cnt").val();
	for(var i=0; i<cnt; i++) $(".stage").append(playerPrev + (i+1) + playerNext);
});

$("#btStart").click(function(){
	var speed;
	for(var i=0; i<cnt; i++) {
		speed = Math.floor(Math.random() * 500 + 2000);
		$(".player").eq(i).stop().animate({"left":"90%"}, speed, function(){
			var myNumber = $(this).find(".badge").html();
			var $h3 = $('<h3>'+myNumber+'번</h3>').appendTo("#scoreModal .modal-body");
			if($h3.index() == cnt -1) $("#scoreModal").modal();
		});
	}
});