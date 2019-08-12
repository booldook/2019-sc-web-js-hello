$("#btList").click(function(){
	$.ajax({
		url: "https://webmir.co.kr/score/score_li.php",
		type: "get",
		dataType: "json",
		success: function(res){
			console.log(res);
		}
	});
});

// json - 데이터를 전송하기 위한 변수의 집합
var json = {
	"left": "100px",
	"top": "20px",
}
console.log(json.left);

// javascript Object - 변수와 함수의 집합
var jso = {
	url: "https://webmir.co.kr/score/score_li.php",
	type: "get",
	log: function(){
		console.log(this.url);
	}
}
console.log(jso.url);
jso.log();

