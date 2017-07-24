window.onload=function(){
	var put1=document.getElementById("put1");
	var put2=document.getElementById("put2");
	var rightover1=document.getElementsByClassName("rightover1")[0];
	var rightover2=document.getElementsByClassName("rightover2")[0];
	put1.onclick=function(){
		if(put1.value.length<6){
		rightover1.style.display="inline-block"
			
		}
		else{
			rightover1.style.display="none"
		}
	}
	put2.onclick=function(){
		if(put2.value.length<6){
		rightover2.style.display="inline-block"
			
		}
		else{
			rightover2.style.display="none"
		}
	}
	var onover=document.getElementsByClassName("onover")[0];
	var put3=document.getElementById("put3");
	put3.onclick=function(){
		window.location.href="personal.html"
	}
	var zhuce=document.getElementById("zhuce");
	var header_right1=document.getElementsByClassName("header_right1")[0];
	var tap=document.getElementsByClassName("tap")[0];
	zhuce.onclick=function(){
		header_right1.style.display="none";
		tap.style.display="block"
	}
	var tapspan=document.getElementById("tapspan");
	tapspan.onclick=function(){
		tap.style.display="none";
		header_right1.style.display="block"

	}
	var tap3=document.getElementById("tap3");
	var n=60;
	tap3.onclick=function(){
		console.log(n)
		if(n==60||n<=0){
			n=60;
			function move(){
				n--
				if(n>=0){
					tap3.value=n
				}else{
					clearInterval(sb)
					tap3.value="可以重新发送验证码"
				}
			}
			var sb=setInterval(move,1000);
		}	
	}
	
	if(window.localStorage.demo=='注册'){
    	$(".header_right1").hide();
    	$(".tap").show()
    }
    else{
    	
    	$(".header_right1").show();
    	$(".tap").hide()
    }
    $("#put3").click(function(){
    	window.localStorage.gg=$("#put3").val();
    	window.localStorage.sb=$("#put1").val();
    	window.localStorage.sb1=$("#put2").val();


    })
		
}