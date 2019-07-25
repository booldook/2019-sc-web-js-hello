// $("#scoreModal").modal();
var playerPrev = '<div class="player position-relative" style="width: 90px;"><img src="../img/char.png" class="char w-100"><div class="badge badge-primary rounded px-2 position-absolute" style="top:0; right:0;">';
var playerNext = '</div></div>';

$("#btInit").click(function(){
	// 난 안보이고, #btStart 보이고, #cnt갯수만큼 player 생성
	$("#btInit").addClass("d-none");
	$("#btStart").removeClass("d-none");
	var cnt = $("#cnt").val();
	for(var i=0; i<cnt; i++) $(".stage").append(playerPrev + (i+1) + playerNext);
});