var img_tag = document.getElementById("menu_img");

var looper;

var degrees = 10;


img_tag.addEventListener("mouseenter", rotate);
img_tag.addEventListener("mouseleave", stop_rotate);


function rotate()
{

//	if(navigator.userAgent.match("Chrome")){
//		img_tag.style.WebkitTransform = "rotate("+degrees+"deg)";
//	} else if(navigator.userAgent.match("Firefox")){
//		img_tag.style.MozTransform = "rotate("+degrees+"deg)";
//	} else if(navigator.userAgent.match("MSIE")){
//		img_tag.style.msTransform = "rotate("+degrees+"deg)";
//	} else if(navigator.userAgent.match("Opera")){
//		img_tag.style.OTransform = "rotate("+degrees+"deg)";
//	}else if(navigator.userAgent.match("Safari")){
//		img_tag.style.WebkitTransfrom = "rotate("+degrees+"deg)";
//	}
//	else {
//		img_tag.style.transform = "rotate("+degrees+"deg)";
//	}
	img_tag.style.WebkitTransform = "rotate("+degrees+"deg)";

      degrees+= 5;

      if(degrees > 359)
      {
	   degrees = 1;
      }

      looper = setTimeout(rotate, 100);
  
}

function stop_rotate()
{
	clearTimeout(looper);
}