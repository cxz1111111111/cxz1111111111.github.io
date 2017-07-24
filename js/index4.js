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
	$("#gg").click(function(){
		$(".middle_1_middle_9 span").eq(0).show()
	})
	
	var middle_middle1=document.getElementsByClassName("middle_middle1")[0];
	var overover=document.getElementsByClassName("overover")[0];
	var priceprev=document.getElementsByName("priceprev")[0];
	var price=document.getElementsByName("price")[0];
	$(".middle_middle1_div4").hover(function(){
		$("li[name='ready']").stop();
		$("li[name='ready']").slideDown();
	},function(){
		$("li[name='ready']").stop();
		$("li[name='ready']").slideUp();
	})
	var arr=[
		
			{img:"img/lig002.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig003.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig004.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig005.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig001.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig002.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig003.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig004.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig005.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig001.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig002.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig003.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig004.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig005.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig001.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig002.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig003.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig004.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig005.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
			{img:"img/lig001.gif",price:"166",star:"300",detail:"2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },


	]

	for(var i=0;i<20;i++){
		$(".middle_bottom1").append($('<div class="middle_bottom_img1"><img src="'+arr[i].img+'"><p><i>¥'+arr[i].price+'</i><i><img src="img/xing.png">'+arr[i].star+'</i></p><p>'+arr[i].detail+'</p></div>'))

	}
	 $("a[name='rose1']").click(function(){
	    // window.localStorage.demo='注册';
		window.localStorage.demo=$(this).text()
		

		window.location.href="log.html";
    })

	
}
