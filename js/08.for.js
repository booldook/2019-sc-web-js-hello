/*
for(초기값; 조건; 증가or감소값) {
	// 실행문 - 조건이 참일동안 계속해서 반복 실행
}
*/
var i = 0;
i = i + 5;
i += 5;

i = i + 1; // i++

var j = 1;
var sum = 0;
sum += 1;		// sum = 1;
sum += 2;		// sum = 3;
sum += 3;		// sum = 6;
sum += 4;		// sum = 10;
sum += 5;		// sum = 15;
sum += 6;		// sum = 21;
sum += 7;		// sum = 28;
sum += 8;		// sum = 36;
sum += 9;		// sum = 45;
sum += 10;	// sum = 55;
//console.log(sum);

for(var i=1, sum=0; i<=10; i++) {
	sum += i;
}
console.log(sum);

// 초기화
$("#btReset").click(function(){
	$(".box-tree").empty();
	$(".boxes").empty();
});

// 트리만들기
$("#btTree").click(function(){
	var asterisk = '';
	
	for(var i=0; i<10; i++) {
		asterisk += '*';
		$(".box-tree").append('<div>'+asterisk+'</div>');
	}
	for(i=0; i<3; i++) {
		$(".box-tree").append('<div>**</div>');
	}
	
	/* for(var i=0; i<13; i++) {
		asterisk += '*';
		if(i > 9) $(".box-tree").append('<div>**</div>');
		else $(".box-tree").append('<div>'+asterisk+'</div>');
	} */
});


// 박스만들기
$("#btBox").click(function(){
	var box = '<div class="box float-left border border-success bg-warning" style="width: 30px; height: 30px;"></div>';
	for(var i=0; i<2000; i++) {
		$(".boxes").append(box);
	}
	$(".box").mouseenter(function(){
		$(this).stop().animate({"opacity":0}, 300, function(){
			$(this).animate({"opacity": 1}, 2000);
		});
	});
});