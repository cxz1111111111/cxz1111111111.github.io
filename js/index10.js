window.onload=function(){
	// var arr=[
	// 	{src:"img/paidcloth3.png"},
	// 	{src:"img/paidcloth1.png"},
	// 	{src:"img/paidcloth2.png"},
	// 	{src:"img/paidcloth3.png"},
	// 	{src:"img/paidcloth1.png"},
	// 	{src:"img/paidcloth2.png"},
	// 	{src:"img/paidcloth1.png"},
	// 	{src:"img/paidcloth1.png"},
	// 	{src:"img/paidcloth1.png"},

	// ]

	$("span[name='over']").click(function(){
		$(".overimg").attr("src","img/paidcloth3.png")
		$(".overimg3").attr("src","img/paidcloth2.png")
		$(".overimg2").attr("src","img/paidcloth1.png")
	})
}