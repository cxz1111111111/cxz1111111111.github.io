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
	var quanxuan=document.getElementsByClassName("quanxuan")[0];
	var sb=document.getElementsByName("sb");
	
		quanxuan.onclick=function(){
			for(var i=0;i<sb.length;i++){
			sb[i].checked=quanxuan.checked;
		}
		add()
	}
	var quanxuan2=document.getElementsByClassName("underbottom_bottom1_input")[0];
	quanxuan2.onclick=function(){
		for(var i=0;i<sb.length;i++){
			sb[i].checked=quanxuan2.checked;
		}
		add()
	}

	$("button[name='from']").click(function(){
		var sum5=$(this).next().html();
		var sum1=Number(sum5)-1;
		if(sum1<1){
			sum1=1
		}
		$(this).next().html(sum1);
		
		var sum2=$(this).parent().prev().children().next().html();
		var sum3=Number(sum2);
		$(this).parent().next().html(sum3*sum1);
		add()
		

		



	})
	
	$("button[name='plus']").click(function(){
		var sum5=$(this).prev().html();
		var sum1=Number(sum5)+1;
		if(sum1<1){
			sum1=1
		}
		$(this).prev().html(sum1);

		var sum2=$(this).parent().prev().children().next().html();
		var sum3=Number(sum2);
		$(this).parent().next().html(sum3*sum1)
		add() 

	})
	$("span[name='jieshu']").click(function(){
		$(this).parent().remove()
		add()
	})
	$("input[name='sb']").click(function(){
		add()
	})
	$("span[name='shangchu']").click(function(){
		$(this).parent().parent().prev().children().remove()
	})
	function add(){
		if($("input[name='sb']")[0].checked){
			$("span[name='sum2']").html($("span[name='xiaoji']").html())
		}
		else{
			$("span[name='sum2']").html("¥0.00")
		}
	}
	$("input[name='lastbutton']").eq(0).click(function(){
		window.location.href="index6.html"
	})



}