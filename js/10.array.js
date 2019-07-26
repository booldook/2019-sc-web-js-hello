/*
var n = $(".box").index();	//리턴값이 정수 
var obj = $(".box").eq(3);	//리턴값이 jQ객체

// Getter | Setter
var src = $(대상).attr("src");	// Getter
$(대상).attr("src", "../img/p1.jpg")	//Setter
var val = $("input[name='username']").val(); //Getter
var obj = $("inpur[name='username']").val("Hello");	//Setter
var html = $(".desc").html();	//Getter
$(".desc").html("<span>변경된 내용입니다.</span>");	//Setter
console.log(html);

var txt = $(".desc").text();	//Getter
$(".desc").text("<span>변경된 내용입니다.</span>");	//Setter
console.log(txt);

instance
clone
*/


var stds = ["홍길동", "홍길만", "홍길순"];
console.log(stds);
console.log(stds.length);

var stds2 = [];
/*
stds2[0] = "홍길동";
stds2[1] = "홍길만";
stds2[2] = "홍길순";
stds2[5] = "홍길영";
*/
stds2.push("홍길동");
stds2.push("홍길만");
stds2.push("홍길영");
stds2.push("홍길순");
console.log(stds2);
console.log(stds2.length);

var stds3 = new Array();

var std = [
	"홍길동",
	"홍길만",
	"홍길순"
];
console.log(std[1]);

var scores = [];
scores[0] = [];
scores[0][0] = "홍길동";
scores[0][1] = 90;
scores[0][2] = 80;
scores[0][3] = 70;
scores[0][4] = "활발하고...";
scores[1] = [];
scores[1][0] = "홍길만";
scores[1][1] = 95;
scores[1][2] = 85;
scores[1][3] = 79;
scores[1][4] = "공부잘하고...";
scores[2] = [];
scores[2][0] = "허생";
scores[2][1] = 95;
scores[2][2] = 85;
scores[2][3] = 79;
scores[2][4] = "공부잘하고...";
console.log(scores);

var html = '';
for(var i=0; i<scores.length; i++) {
	html 	= '<tr>';
	html += '<td>'+scores[i][0]+'</td>';
	html += '<td>'+scores[i][2]+'</td>';
	html += '<td>'+scores[i][1]+'</td>';
	html += '<td>'+scores[i][3]+'</td>';
	html += '<td>'+scores[i][4]+'</td>';
	html += '</tr>';
	$(".table").find("tbody").append(html);
}


var man = {
	name: "홍길동",
	kor: 90,
	eng: 80,
	math: 75,
	desc: "활발하고..."
};

var scr = [];
scr[0] = {name: "홍길동", kor: 90, eng: 95, math: 85, desc: "활발해요..."};
scr[1] = {name: "홍길만", kor: 70, eng: 92, math: 75, desc: "잘 뛰어요..."};
scr[2] = {name: "홍길순", kor: 80, eng: 87, math: 93, desc: "잘 자요..."};
console.log(scr);
for(var i=0; i<scr.length; i++) {
	html  = '<tr>';
	html += '<td>'+scr[i].name+'</td>';
	html += '<td>'+scr[i].eng+'</td>';
	html += '<td>'+scr[i].kor+'</td>';
	html += '<td>'+scr[i].math+'</td>';
	html += '<td>'+scr[i].desc+'</td>';
	html += '</tr>';
	$(".table").append(html);
}


