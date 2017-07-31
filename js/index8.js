window.onload=function(){
	$("a[name='gotoin']").click(function(){
		window.location.href="index.html"
	})
	 $("a[name='rose']").click(function(){
	   
		window.localStorage.demo=$(this).text()
		

		window.location.href="log.html";
    })
	 $("a[name='dingdang']").click(function(){
	 	window.location.href="firmorder.html"
	 })
	 $("a[name='gwc']").click(function(){
	 	window.location.href="shoppingcart.html"
	 })
	 $("img[name='help']").click(function(){
	 	$("li[name='help']").slideToggle()
	 })
	 $("#sea").click(function(){
	 	$(this).css("background-color","#ef2f23");
	 	$(this).css("color","#ffffff");
	 	$("#sea1").css("background-color","#ffffff");
	 	$("#sea1").css("color","#ef2f23");
	 	 $("#sea1").css("border","1px solid #ef2f23");
	 })
	  $("#sea1").click(function(){
	 	$(this).css("background-color","#ef2f23");
	 	$(this).css("color","#ffffff");
	 	$("#sea").css("background-color","#ffffff");
	 	$("#sea").css("color","#ef2f23");
	 	 $("#sea").css("border","1px solid #ef2f23");
	 })
	  $("#middlephoto1").click(function(){
	  	$("#middlephotoall").attr("src","img/de_show_four.png")
	  })
	   $("#middlephoto2").click(function(){
	  	$("#middlephotoall").attr("src","img/de_show_one.png")
	  })
	    $("#middlephoto3").click(function(){
	  	$("#middlephotoall").attr("src","img/de_show_seven.png")
	  	})
	  	 $("#middlephoto4").click(function(){
	  	$("#middlephotoall").attr("src","img/de_show_six.png")
	  
	  })
	  	  $("#middlephoto5").click(function(){
	  	$("#middlephotoall").attr("src","img/de_show_three.png")
	  })
	  	$(".middle_middle_middle_ul li").click(function(){
	  		$(this).css("border","1px solid red")
	  		$(this).siblings().css("border","1px solid #e5e5e5")
	  	})
	  	$(".add button").click(function(){
	  		
	  		if($(this).html()=="-"){
	  			var sum5=$(this).next().html();
			var sum1=Number(sum5)-1;
			if(sum1<1){
			sum1=1
			}
			$(this).next().html(sum1);
	  		}
	  		else{
	  			var sum5=$(this).prev().html();
				var sum1=Number(sum5)+1;
				if(sum1<1){
				sum1=1
					}
			$(this).prev().html(sum1);	
	  		}
	  	})
	  	$(".middle_middle_middle_ofdiv2 button").click(function(){
	  		if($(this).html()=="立即购买"){
	  			alert("确认立即购买?")
	  			$(this).css("background-color","#ef2f23");
	  			$(this).css("color","#ffffff");
	  			$(this).css("border","1px solid #e5e5e5");
	  			$(this).siblings().css("background-color","#ffffff");
	  			$(this).siblings().css("color","#000000");
	  		}
	  		else{
	  			alert("确认加入购物车?")
	  			$(this).css("background-color","#ef2f23");
	  			$(this).css("color","#ffffff");
	  			$(this).siblings().css("background-color","#ffffff");
	  			$(this).siblings().css("color","#000000");
	  			$(this).siblings().css("border","1px solid #e5e5e5");
	  		}

	  	})
	  	$(".middle_bottom1_middle_top ul li").click(function(){
	  		$(this).css("border-top","2px solid #ef2f23")
	  		$(this).css("background-color","#ffffff")
	  		$(this).siblings().css("border","1px solid #ececec")
	  		$(this).siblings().css("background-color","#f6f6f6")
	  	}) 
}