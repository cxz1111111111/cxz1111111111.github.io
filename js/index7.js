window.onload=function(){
	$(".selend").eq(0).hover(
		function(){
			$("li[name='li']").stop()
			
			$("li[name='li']").slideDown()
		}
		,function(){
			$("li[name='li']").stop()
			$("li[name='li']").slideUp()
		})
	$(".selend").eq(1).hover(
		function(){
			$("li[name='li1']").stop()
			
			$("li[name='li1']").slideDown()
	},function(){
		$("li[name='li1']").stop()
		$("li[name='li1']").slideUp()
	})
	$("a[name='gwc']").click(function(){
		window.location.href="shoppingcart.html";
	})
	
	
   $("a[name='rose1']").click(function(){
	    // window.localStorage.demo='注册';
		window.localStorage.demo=$(this).text()
		

		window.location.href="log.html";
    })
   var gg=setInterval(move,1000)
   	 var n=0
   function move(){
  
   	n++;
   	if(n<3){
   		
   	var lefts=$(".middle_1topright").width()
   	$(".middle_1toprightimg").animate({left:-lefts*n})
   	}
   	else{
   		
   		$(".middle_1toprightimg").animate({left:0})
   		n=0
   	}
   }
   $(".middle_1toprightimg").mouseover(function(){
   	window.clearInterval(gg);})

   	$(".middle_1toprightimg").mouseout(function(){
    	
    	gg=setInterval(move,1000)
   })
   

   setInterval(da,1000)
   function da(){
   	var pass=new Date(2018,7,14,20,20)-(new Date())

   	var days=parseInt(pass/1000/60/60/24,10);
   	var hours=parseInt(pass/1000/60/60%24,10);
   	var minutes=parseInt(pass/1000/60%60,10);
   	var seconds=parseInt(pass/1000%60,10);
   	$("span[name='day']").html(days)
   	$("span[name='hour']").html(hours)
   	$("span[name='minutes']").html(minutes)
   	$("span[name='second']").html(seconds)

	}
	$(".baobei").click(function(){
		$(this).css("background","#FF5367");
		$(this).css("color","#ffffff");
		$(this).siblings().css("background","#f2f2f2");
		$(this).siblings().css("color","#000000")
	})
	$(".undermiddleimg").mouseover(function(){

		$(this).css("border","1px solid red")
		$(this).css("width","216px")
		$(this).css("height","498px")
		$(this).siblings().css("opacity","0.5")
	})
	$(".undermiddleimg").mouseout(function(){

		$(this).css("border","")
		$(this).css("width","218px")
		$(this).css("height","500px")
		$(this).siblings().css("opacity","1")
	})

	$(".middle_middle img").hover(function(){
		var lefts=parseInt($(this).width());
		var leftss=parseInt(lefts-2)+"px";
	
		$(this).css("border","1px solid red")
		$(this).css("width","leftss")
		$(this).css("height","leftss")
		$(this).siblings().css("opacity","0.5")
	},function(){
		$(this).css("border","")
		$(this).css("width","lefts")
		$(this).css("height","lefts")
		$(this).siblings().css("opacity","1")
	})
	$("img[name='jiao']").click(function(){
		console.log(this)
		if($(this).next().is(':hidden')){
			$("img[name='jiao']").next().hide()
			$(this).next().show()
			
		}
		else{
			$(this).next().hide()
		}
		

		
	})
	$("a[name='dingdang']").click(function(){
			window.location.href="firmorder.html";
		})
	$(".person span").click(function(){
		$(this).parent().css("display","none")
	})
	$("a[name='xianzi']").click(function(){
		window.location.href="xianzi.html"
	})
}