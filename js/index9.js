window.onload=function(){
	$(".wxzf").click(function(){
		$(".wxzfbottom").toggle(1000);
		$(".zfbbottom").hide()
		$(".ylzfbottom").hide()
	})
	$(".zfbzf").click(function(){
		$(".zfbbottom").toggle(1000)
		$(".wxzfbottom").hide()
		$(".ylzfbottom").hide()
	})
	$(".ylzf").click(function(){
		$(".ylzfbottom").toggle(1000)
		$(".wxzfbottom").hide()
		$(".zfbbottom").hide()
	})
	$(".zfbbottom img").click(function(){
		alert("确认支付?")
		window.location.href="paysuccess.html"
	})
	$(".wxzfbottom img").click(function(){
		alert("确认支付?")
		window.location.href="paysuccess.html"
	})
	$(".ylzfbottom img").click(function(){
		alert("确认支付?")
		window.location.href="paysuccess.html"
	})

	function sp(){
		var pass=new Date(2017,10,31,23)-new Date()
		
		var hours=parseInt(pass/1000/60/60%24,10);
		var minutes=parseInt(pass/1000/60%60,10)
		var seconds=parseInt(pass/1000%60,10);
		var da=hours+"时"+minutes+"分"+seconds+"秒"
		
		$("span[name='dat']").html(da)
	} 
	setInterval(sp,1000)
	
}