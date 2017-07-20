;(function($){	
//轮播
			var banner = $("#banner"),
			pics = $("#pics"),
			len = pics.children().size(),
			liwidth = $("#pics>li").width(),
			left = $("#sp1"),
			right = $("#sp2"),
			index = 0;  
			
			//左右按钮切换
			left.click(function(){
				 goto()
			})
			right.click(function(){
				 go()
			})
			
			function go(){ //0 1 2 0 1 2
				index++;
				if(index > len-1){
					index = 0;
				}
				console.log(index)
				set(index); 
			}
			
			function goto(){ //2 1 0 2 1 0
				index--;
				if(index < 0){
					index = len-1;
				}
				set(index); 
			}
			
			var ins = setInterval(go,2000)
			
			function set(index){
				var s = "-"+index*liwidth+"px";
				
				pics.css({
					"-webkit-transform":"translateX("+s+")", 
					"-webkit-transition":"all 1s", 
				});
				$("#bar>span").eq(index).addClass("on").siblings().removeClass("on");
				
			}
})(Zepto);
