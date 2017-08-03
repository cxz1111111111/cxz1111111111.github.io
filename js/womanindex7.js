window.onload=function(){
$(".person span").click(function(){
		$(this).parent().css("display","none")
	})
	$("a[name='xianzi']").click(function(){
		window.location.href="xianzi.html"
	})
}