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
    $(".wb").eq(0).click(function(){
    	window.location.href="https://api.weibo.com/oauth2/authorize?scope=all&display=default&redirect_uri=http%3A%2F%2Fwww.meilishuo.com%2Fuser%2Fthirdtransfer%3Fthird%3Dsina%26platform%3Dpc%26operScene%3Dlogin&state=TASuyi29p4rkye3&client_id=463778370&ptp=1.aen5Pb.0.0.PoOZe"
    })
     $(".qq").eq(0).click(function(){
    	window.location.href="https://graph.qq.com/oauth/show?which=Login&display=pc&scope=all&display=pc&response_type=code&redirect_uri=http%3A%2F%2Fwww.meilishuo.com%2Fuser%2Fthirdtransfer%3Fthird%3Dqq%26platform%3Dpc%26operScene%3Dlogin&state=TASz4f0iqvcz7da&client_id=210915&ptp=1.aen5Pb.0.0.1O8li"
    })
	$(".wx").eq(0).click(function(){
    	window.location.href="https://open.weixin.qq.com/connect/qrconnect?appid=wx28b165b5a629bb11&redirect_uri=http%3A%2F%2Fm.meilishuo.com%2Fuser%2Fthirdtransfer%3Fthird%3Dweixin%26platform%3Dpc%26operScene%3Dlogin&response_type=code&scope=snsapi_login&state=TASmirojsmni0m7&ptp=1.aen5Pb.0.0.Hlab0"
    })
    $("#jizhu").click(function(){
    	if(this.checked==true){
    	$("#put3").eq(0).attr("disabled",false);
    	$("#put3").eq(0).css("background","#FF5367");
    	$("#put3").eq(0).css("color","#FFFFFF");
    	}
    	else{
    		$("#put3").eq(0).attr("disabled",true);
    		$("#put3").eq(0).css("background","#EBEBE4");
    		$("#put3").eq(0).css("color","#000000");
    	}
    })	
}