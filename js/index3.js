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
		if($("input[name='sb']").is(":checked")){
			$("input[name='lastbutton']").attr("disabled",false);
			$("input[name='lastbutton']").css("background","red");
	}
		else{
			$("input[name='lastbutton']").attr("disabled",true);
			$("input[name='lastbutton']").css("background","#D8D8D8");
		}
		add()
	}
	var quanxuan2=document.getElementsByClassName("underbottom_bottom1_input")[0];
	quanxuan2.onclick=function(){
		for(var i=0;i<sb.length;i++){
			sb[i].checked=quanxuan2.checked;
		}
		if($("input[name='sb']").is(":checked")){
			$("input[name='lastbutton']").attr("disabled",false);
			$("input[name='lastbutton']").css("background","red");
	}
		else{
			$("input[name='lastbutton']").attr("disabled",true);
			$("input[name='lastbutton']").css("background","#D8D8D8");
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
		if($("input[name='sb']").is(":checked")){
			$("input[name='lastbutton']").attr("disabled",false);
			$("input[name='lastbutton']").css("background","red");
	}
		else{
			$("input[name='lastbutton']").attr("disabled",true);
			$("input[name='lastbutton']").css("background","#D8D8D8");
		}

		



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
		if($("input[name='sb']").is(":checked")){
			$("input[name='lastbutton']").attr("disabled",false);
			$("input[name='lastbutton']").css("background","red");
	}
		else{
			$("input[name='lastbutton']").attr("disabled",true);
			$("input[name='lastbutton']").css("background","#D8D8D8");
		}
		add() 

	})
	$("span[name='jieshu']").click(function(){
		$("input[name='lastbutton']").attr("disabled",true);
			$("input[name='lastbutton']").css("background","#D8D8D8");
		$(this).parent().remove()
		add()
	})
	$("input[name='sb']").click(function(){

		add()
		if($("input[name='sb']").is(":checked")){
			$("input[name='lastbutton']").attr("disabled",false);
			$("input[name='lastbutton']").css("background","red");
	}
		else{
			$("input[name='lastbutton']").attr("disabled",true);
			$("input[name='lastbutton']").css("background","#D8D8D8");
		}
	
	})
	$("span[name='shangchu']").click(function(){
		$(this).parent().parent().prev().children().remove();
		$("input[name='lastbutton']").attr("disabled",true);
			$("input[name='lastbutton']").css("background","#D8D8D8");
		add()
	})
	function add(){
		for(var i=0,sum=0;i<$("input[name='sb']").length;i++){
			if($("input[name='sb']")[i].checked){
				sum+=Number($("span[name='xiaoji']").html());
			}
		}
		$("span[name='sum2']").html(sum)
		
		
	}
	$("input[name='lastbutton']").eq(0).click(function(){
		window.location.href="firmorder.html"
	})
	$("a[name='shouye']").click(function(){
		window.location.href="index.html"
	})
	$("a[name='lie']").click(function(){
		window.location.href="list.html"
	})

}