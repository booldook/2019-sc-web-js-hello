$("#btMake").click(function (){
	//alert("Hello World");
	var userName = $("#userName").val();
	$(".list-group").append('<li class="list-group-item">' + userName + '</li>');
});

$("#btReset").click(function() {
	$(".list-group").empty();
});