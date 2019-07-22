$("#btMake").click(function (){
	var userName = $("#userName").val();
	var listItem = '<li class="list-group-item">' + userName + '</li>';
	$(".list-group").append(listItem);
});

$("#btReset").click(function (){
	$(".list-group").empty();
});
