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
	
	
	
   $("a[name='rose1']").click(function(){
	    // window.localStorage.demo='注册';
		window.localStorage.demo=$(this).text()
		

		window.location.href="log.html";
    })
   setInterval(move,1000)
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
   setInterval(da,1000)
   function da(){
   	var pass=new Date(2018,7,14,20,20)-(new Date())

   	var days=parseInt(pass/1000/60/60/24);
   	var hours=parseInt(pass/1000/60/60%24);
   	var minutes=parseInt(pass/1000/60%60);
   	var seconds=parseInt(pass/1000%60);
   	$("span[name='day']").html(days)
   	$("span[name='hour']").html(hours)
   	$("span[name='minutes']").html(minutes)
   	$("span[name='second']").html(seconds)

	}
}