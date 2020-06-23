let hamburger=document.getElementById('hamburger');
let navbarmbid=document.getElementById('nav-bar-mb-id');
let navbarmb_div=document.querySelector('.nav-bar-mb');
let a_nav_bar=document.querySelectorAll('.a_nav_bar');
let arrow_down=document.querySelectorAll('.icofont-simple-down');
let div_overfooter=document.querySelectorAll('.div');

let currently=false;
arrow_down[0].addEventListener('click',()=>{
  const tl=new TimelineMax();
    if(div_overfooter[0].classList.contains("active")){
      tl.to(div_overfooter[0],0.5,{height:"24px"});
      tl.to(arrow_down[0],0.5,{rotate:360},"-=0.5");
      div_overfooter[0].classList.remove("active");
    }
    else{
      div_overfooter[0].classList.add("active");
      tl.to(div_overfooter[0],0.5,{height:"auto"});
      tl.to(arrow_down[0],0.5,{rotate:180},"-=0.5");
    }
});

arrow_down[1].addEventListener('click',()=>{
  const tl=new TimelineMax();
    if(div_overfooter[1].classList.contains("active")){
      tl.to(div_overfooter[1],0.5,{height:"24px"});
      tl.to(arrow_down[1],0.5,{rotate:360},"-=0.5");
      div_overfooter[1].classList.remove("active");
    }
    else{
      div_overfooter[1].classList.add("active");
      tl.to(div_overfooter[1],0.5,{height:"auto"});
      tl.to(arrow_down[1],0.5,{rotate:180},"-=0.5");
    }
});

arrow_down[2].addEventListener('click',()=>{
  const tl=new TimelineMax();
    if(div_overfooter[2].classList.contains("active")){
      tl.to(div_overfooter[2],0.5,{height:"24px"});
      tl.to(arrow_down[2],0.5,{rotate:360},"-=0.5");
      div_overfooter[2].classList.remove("active");
    }
    else{
      div_overfooter[2].classList.add("active");
      tl.to(div_overfooter[2],0.5,{height:"auto"});
      tl.to(arrow_down[2],0.5,{rotate:180},"-=0.5");
    }
});

hamburger.addEventListener('click',()=>{
  if(currently==false){
    const tl=new TimelineMax();
    if(navbarmb_div.classList.contains("active")){
      currently=true;
      tl.to(a_nav_bar,0.3,{opacity:0});
      tl.to(navbarmbid,0.5,{scaleX:0,transformOrigin:"right"});
      tl.to(navbarmb_div,0.25,{height:"0px"});
      navbarmb_div.classList.remove("active");
    }
    else{
      currently=true;
      tl.to(navbarmb_div,0.25,{height:"auto"});
      tl.to(navbarmbid,0.5,{scaleX:1,transformOrigin:"right"});
      tl.to(a_nav_bar,0.3,{opacity:1});
      navbarmb_div.classList.add("active");
    }
    setTimeout(()=>{currently=false},900);
  }
  else{
    return 0;
  }
});
