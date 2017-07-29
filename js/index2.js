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
	var sheng=document.getElementsByName("sheng")[0];
	var shi=document.getElementsByName("shi")[0];
	var qu=document.getElementsByName("qu")[0];
	
	sheng.onfocus=function(){
		sheng.innerHTML="<option value='请选择省份'>请选择省份</option>";
	for(var i=0;i<provinceList.length;i++){	
		var option=document.createElement("option");
		
			option.text=provinceList[i].name;
			this.appendChild(option)
	}
		

	}
	var num
	sheng.onchange=function(){
		shi.innerHTML="<option value='请选择市'>请选择市</option>";
		num=this.selectedIndex-1;
		var arr=provinceList[num].cityList;
		 for(var i=0;i<arr.length;i++){
          var option=document.createElement("option");
          option.text=arr[i].name;
          shi.appendChild(option);
        }


	}
	var num1
	shi.onchange=function(){
		qu.style.display="inline-block";
		qu.innerHTML="<option value='请选择区'>请选择区</option>";
		num1=this.selectedIndex-1;
		var arr1=provinceList[num].cityList[num1].areaList;
		for(var i=0;i<arr1.length;i++){
          var option=document.createElement("option");
          option.text=arr1[i];
          qu.appendChild(option);
        }

	}
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
	 $(function(){
        upload("cert1","thumb1");//上传证书1
    });

    function upload(id,thumb){
        //上传证书
        var u = new UploadPic();
        u.init({
            input: document.getElementById(id),
            callback: function (base64,fileType) {
                $("#"+thumb).attr("src",base64);
                $("#"+thumb).attr("filetype",fileType);
            },
            loading: function () {
                //say_error("等待上传...");
            }
        });
    }

   $("a[name='rose1']").click(function(){
	    // window.localStorage.demo='注册';
		window.localStorage.demo=$(this).text()
		

		window.location.href="log.html";
    })
    
   if(window.localStorage.gg=='立即登录'){
   	$("#input1").val()=window.localStorage.sb
   }
   $("a[name='gwc']").click(function(){
   	window.location.href="shoppingcart.html"
   })
   $("a[name='gotoin']").click(function(){
   	window.location.href="list.html"
   })
}