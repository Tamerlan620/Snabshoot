


var a = 1;
function Tunar(){
		zero.innerHTML=a;
	a++;
	if(a==121){
	clearInterval(b)
	}
	}
var b =setInterval(Tunar,40)
















// section5 start

  // let d = 0

// $(".noqte:nth-child(1)").click(function(){
//    c=-370;
//   let pos = $(".altsekil").position();
//   alert(pos.left) 
//   if (pos.left=== 0) {

//   $(".altsekil").animate({'left':"-370px"})
//   }

//   alt_sekil.setAttribute("style","transition:.7s")


// })

// $(".noqte:nth-child(2)").click(function(){
//   let pos = $(".altsekil").position();
//   alert(pos.left)

//   if (pos.left=== -370) {
//   c=-370*2;

//   $(".altsekil").animate({'left':c+"px"})
//   }


//   if (pos.left=== -15) {

//   $(".altsekil").animate({'left':"-755px"})
//   }
//   else(
//     $(".altsekil").animate({'left':"0px"})
//     )

//   alt_sekil.setAttribute("style","transition:.7s")


// });

//   let pos = $(".altsekil").position();
// $(".noqte:nth-child(3)").click(function(){
//   // alert(pos.left)
//   if (pos.left=== -755) {

//   $(".altsekil").animate({'left':c+"px"})
//   }

//   alt_sekil.setAttribute("style","transition:.7s")


// })





// daire slider

$(".daire").click(function(){
	$(".bigbig").fadeIn()
	$(".mainimage").animate({"left":"38%"});
	// var aaa = $(this.parentElement).css("background-image",)
	var bbb =$(this).parent(".galery").attr("style");
	console.log(bbb)
	$(".mainimage").attr("style",bbb);
	n=$('.daire').index(this) 
  
  });



  $(".exit").click(function(){
	$(".bigbig").fadeOut()
	$(".mainimage").animate({"left":"-350px"});  
	
  });
  
  let arr = ["model-1.jpg","model-2.jpg","model-3.jpg","model-4.jpg","model-5.jpg","model-6.jpg","model-7.jpg","model-8.jpg","model-9.jpg","model-10.jpg","model-11.jpg","model-12.jpg",];
  let galery = document.getElementsByClassName('galery')
 
	i=0
  
  
  $(".saga").click(function(){
	  i=n
	  n++
	  if(n>arr.length-1){
		  n=0
	  }
	  $(".mainimage").css("background-image", "url(" + arr[n] + ")")
  })

  $(".sola").click(function(){
	i=n
  	n--
	if(n<0){
		n=arr.length-1
	}
	$(".mainimage").css("background-image", "url(" + arr[n] + ")")
})

// document.onkeydown = function(n) {
//      switch (e.keyCode) {
//          case 37:
//             //left
//             slideIndex--;
//             break;
//          case 39:
//             //right
//             slideIndex++;
//             break;          
//     }}



window.addEventListener("keydown",function checkKeyRight(key){
	function Sola(){
		i=n
  	n--
	if(n<0){
		n=arr.length-1
	}
	$(".mainimage").css("background-image", "url(" + arr[n] + ")")
	}
	if(key.keyCode=="37"){
		
		Sola();
}

})

window.addEventListener("keydown",function checkKeyleft(key){
	function Saga(){
		i=n
	  n++
		if(n>arr.length-1){
			n=0
		}
		$(".mainimage").css("background-image", "url(" + arr[n] + ")")
	}
	if(key.keyCode=="39"){
		
		Saga();
}

})

window.addEventListener("keydown",function checkKeyexit(key){
	function Exit(){
		$(".bigbig").fadeOut()
		$(".mainimage").animate({"left":"-350px"});  
		
	  }
	if(key.keyCode=="27"){
		
		Exit();
}

})
	



// daire slider end













  let workers = document.getElementsByClassName("workers");
  let workersWidth = $(".workers").width()+50;
  
  $(".noqte").click(function(){
	// alert($(".noqte").index(this))
	let l = $(".noqte").index(this)*workersWidth*(-1);
	$(".altsekil").animate({"left":l+"px"});
  });
  
  
  
  let hometop = $('header').offset().top
  let abouttop = $('.section2').offset().top
  let servicestop = $('.section3').offset().top
  let gallerytop = $('.section5').offset().top
  let testimonytop = $('.section6').offset().top
  let contacttop = $('.section7').offset().top
  
  $(".home3").click(function(){
	 $("html").animate({'scrollTop':hometop},500)
 }) 


 $(".about3").click(function(){
	 $("html").animate({'scrollTop':abouttop},500)
 }) 


 $(".services3").click(function(){
	$("html").animate({'scrollTop':servicestop},500)
})


 $(".gallery3").click(function(){
	$("html").animate({'scrollTop':gallerytop},500)
})


 $(".testimony3").click(function(){
	$("html").animate({'scrollTop':testimonytop},500)
})


 $(".contact3").click(function(){
	$("html").animate({'scrollTop':contacttop},500)
})
  
// let hometop = $('header').offset().top
// let abouttop = $('.section2').offset().top
// let servicestop = $('.section3').offset().top
// let gallerytop = $('.section5').offset().top
// let testimonytop = $('.section6').offset().top
// let contacttop = $('.section7').offset().top


  function Active(){
	// console.log(contacttop)
	// console.log($('html').scrollTop())

	if($('html').scrollTop()>=0){
		$(".home4").css("opacity","1")  
		$(".noqte1:after").css("opacity","3") 
		
	}
			if( $('html').scrollTop()>abouttop){
				$(".home4").css("opacity","0")  
		}

	  if($('html').scrollTop()>abouttop){
		$(".about4").css("opacity","1")  
		$(".noqte1:after").css("opacity","3")
		
	}
			if($('html').scrollTop()>servicestop ||$('html').scrollTop()<abouttop){
				$(".about4").css("opacity","0")
			}
	  
	  if($('html').scrollTop()>servicestop){
		$(".services4").css("opacity","1")  
		$(".noqte1:after").css("opacity","3")  

	}
			if($('html').scrollTop()>gallerytop || $('html').scrollTop()<servicestop){
				$(".services4").css("opacity","0")  
			}
	  
	  if($('html').scrollTop()>gallerytop){
		$(".galery4").css("opacity","1")  
		$(".noqte1:after").css("opacity","3")  

	}
			if($('html').scrollTop()>testimonytop  ||  $('html').scrollTop()<gallerytop){
				$(".galery4").css("opacity","0")  
			}
	  
	  if($('html').scrollTop()>testimonytop){
		$(".testymony4").css("opacity","1")  
		$(".noqte1:after").css("opacity","3")
		
	}
			if($('html').scrollTop()>contacttop ||$('html').scrollTop()<testimonytop){
				console.log(true)
				$(".testymony4").css("opacity","0")
			}

	  if($('html').scrollTop()>contacttop){
		$(".contact4").css("opacity","1")  
		$(".noqte1:after").css("opacity","3")


	}
			if(($('html').scrollTop()<contacttop)){
				$(".contact4").css("opacity","0")
	
			}  




	  

	 
	  
	//   else{
	// 	$(".headers").css("opacity","0") 
	//   }
  } 

  
  
  $(window).scroll(function(){
	Active();
})
  
  
  
  
  
  
  
