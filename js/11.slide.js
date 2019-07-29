/*
setInterval(함수, 지연시간)	=> 지연시간마다 함수를 실행한다
var i = 0;
var interval = setInterval(function(){
	console.log(i++);
}, 1000);
clearInterval(interval);	// setInterval 삭제하기
i++	=>후위연산자 => 적용하고 1을 더한다.
++i	=>전위연산자 => 1을 더하고 적용한다.
*/
/* <li class="list-group-item">1</li> */
// 여러 함수에서 같이 쓰이는 변수는 전역변수로 선언한다.
var interval;

$("#btStart").click(function(){
	var i = 1;
	clearInterval(interval);
	interval = setInterval(function(){
		$("#stage").append('<li class="list-group-item">'+(i++)+'</li>');
	}, 1000);
});

$("#btEnd").click(function(){
	clearInterval(interval);
});

$("#btReset").click(function(){
	$("#stage").empty();
});

/*
// 정해진 시간마다 페이지를 refresh
var intervalRefresh = setInterval(function(){
	location.reload();
}, 5000);
*/

/* .banner1 */
var i = 1;
var ban1 = setInterval(function(){
	$(".banner1 > .slides").stop().animate({"left": (-i*100)+"%"}, 500, function(){
		if(i == 4) i = 0;
		else i++;
	});
}, 3000);

/* .banner2 */
var i2 = 1;
var ban2 = setInterval(function(){
	$(".banner2 .slides").stop().animate({"left":-(i2*100)+"%"}, function(){
		if(i2 == 5) {
			$(this).css({"left": 0});
			i2 = 1;
		}
		else i2++;
	});
}, 3000);

/* banner 3 */
var i3 = 1;
var ban3 = setInterval(function(){
	$(".banner3 .slides").stop().animate({"top": -(i3*100)+"%"}, 500, function(){
		if(i3 == 4) i3 = 0;
		else i3++;
	});
}, 3000);

/* banner 4 */
var i4 = 1;
var ban4 = setInterval(function(){
	$(".banner4 .slides").stop().animate({"top": -(i4*100)+"%"}, 500, function(){
		if(i4 == 5) {
			$(this).css({"top": 0});
			i4 = 1;
		}
		else i4++;
	});
}, 3000);

/* banner5 */
var i5 = 0;
var depth = 10;
var ban5 = setInterval(function(){
	$(".banner5 .slide").eq(i5).css({"z-index": depth++, "opacity": 0})
	.stop().animate({"opacity": 1}, 500, function(){
		if(i5 == 4) i5 = 0;
		else i5++;
	});
}, 3000);