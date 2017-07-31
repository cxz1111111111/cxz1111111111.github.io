window.onload=function(){
	var lefts=$(".over").width();	
	var n=0	
	$("span[name='over']").click(function(){
	if(n<2){
		n++
		
	
		$(".mum").animate(

			{left:-lefts*n}
		
		)}
	else{
			$(".mum").animate({left:0})
			n=0
		
		}
		
	})
}