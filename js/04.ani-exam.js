$(".navi-wrap").mouseenter(function(e){
	e.stopPropagation();
	$(this).children(".navi-bg").stop().animate({"width": "90px", "height": "90px"}, 300);
});

$(".navi-wrap").mouseleave(function(e){
	e.stopPropagation();
	$(this).children(".navi-bg").stop().animate({"width": 0, "height": 0}, 300);
});