window.onload=function(){
	$(".tap1").eq(0).hover(function(){
		$("li[name='sc']").stop();
		$("li[name='sc']").slideDown();
	},function(){
		$("li[name='sc']").stop();
		$("li[name='sc']").slideUp();
	})
	$(".tap2").eq(0).hover(function(){
		$("li[name='help']").stop();
		$("li[name='help']").slideDown();
	},function(){
		$("li[name='help']").stop();
		$("li[name='help']").slideUp();	
	})
	$("a[name='gwc']").click(function(){
		window.location.href="shoppingcart.html"
	})
	$(".lastbutton").click(function(){
		window.location.href="payoff.html"
	})
	$("a[name='retur']").click(function(){
		window.location.href="shoppingcart.html"
	})
	var bottom_topbody11=document.getElementsByClassName("bottom_topbody11")[0]
	$("#res").click(function(){
		$(".newaddress").toggle(1000)
	})
	$("#ret").click(function(){
		$(".newaddress").hide(1000)
		var div=document.createElement("div");
		div.className="bottom_topbody11";
		
		div.innerHTML=bottom_topbody11.innerHTML

	
		$(".news").append(div)

			})
}