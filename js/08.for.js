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