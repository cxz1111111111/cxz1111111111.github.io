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
	var tap1=document.getElementsByClassName("header_bottom_1_1")[0];
	var tap2=document.getElementsByClassName("header_bottom_1_2")[0];
	var tap3=document.getElementsByClassName("header_bottom_1_3")[0];
	var tap4=document.getElementsByClassName("header_bottom_1_4")[0];
	tap1.onclick=function(){
		tap1.style.backgroundColor="#ff5367";
		tap1.style.color="#ffffff";
		tap2.style.backgroundColor="";
		tap2.style.color="";
		tap3.style.backgroundColor="";
		tap3.style.color="";
		tap4.style.backgroundColor="";
		tap4.style.color="";
	}
	tap2.onclick=function(){
		tap2.style.backgroundColor="#ff5367";
		tap2.style.color="#ffffff";
		tap3.style.backgroundColor="";
		tap3.style.color="";
		tap4.style.backgroundColor="";
		tap4.style.color="";
		tap1.style.backgroundColor="";
		tap1.style.color="";
	}
	tap3.onclick=function(){
		tap3.style.backgroundColor="#ff5367";
		tap3.style.color="#ffffff";
		tap1.style.backgroundColor="";
		tap1.style.color=""
		tap2.style.backgroundColor="";
		tap2.style.color=""
		tap4.style.backgroundColor="";
		tap4.style.color=""
	}
	tap4.onclick=function(){
		tap4.style.backgroundColor="#ff5367";
		tap4.style.color="#ffffff";
		tap1.style.backgroundColor="";
		tap1.style.color=""
		tap2.style.backgroundColor="";
		tap2.style.color=""
		tap3.style.backgroundColor="";
		tap3.style.color=""
	}
	
   $("a[name='rose1']").click(function(){
	    // window.localStorage.demo='注册';
		window.localStorage.demo=$(this).text()
		

		window.location.href="log.html";
    })
}