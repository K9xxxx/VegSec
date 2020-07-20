let hamburger=document.getElementById('hamburger');
let navbarmbid=document.getElementById('nav-bar-mb-id');
let navbarmb_div=document.querySelector('.nav-bar-mb');
let a_nav_bar=document.querySelectorAll('.a_nav_bar');
let arrow_down=document.querySelectorAll('.icofont-simple-down.foot');
let div_overfooter=document.querySelectorAll('.div');
let allContent=document.querySelector('.all-content');
let moreButton=document.querySelectorAll('.more');
let morePrice=document.querySelectorAll('.price');
let bottomContainer=document.querySelectorAll('.bottom-container');
let container=document.querySelectorAll('.container');
let xMark=document.querySelectorAll('.icofont-brand-nexus');
let back=document.querySelectorAll('.back');
let arrow_down_content=document.querySelectorAll('.icofont-simple-down.content');
let xMark_content=document.querySelectorAll('.icofont-brand-nexus.content2');
let double_arrow_right=document.querySelectorAll('.icofont-curved-double-right');
let conFront=document.querySelectorAll('.front');
let icoRight=document.querySelectorAll('.icofont-double-right')
let backc=document.querySelectorAll('.backc')
let galArrowRight=document.querySelectorAll('.directional.right')
let galArrowLeft=document.querySelectorAll('.directional.left')
let backgContent=document.querySelectorAll('.backg-content')
let backgBorder=document.querySelector('.backg')
let xMark3=document.querySelectorAll('.xmarkcon3')


const moretl=new TimelineMax();

container.forEach((item, i) => {
  container[i].addEventListener('click',()=>{
    const tlgal=new TimelineMax();
    tlgal.to(backgBorder,0,{zIndex:3,opacity:1});
    tlgal.to(".background.padding",0,{zIndex:2,opacity:1});
    backgContent[i].classList.remove("hide");
  })
});
 let i=0;
galArrowRight.forEach((item, i) => {
  galArrowRight[i].addEventListener('click',()=>{
    if(i==8){
      const tlgal1=new TimelineMax();
      backgContent[i].classList.add("hide")
      tlgal1.to(backgBorder,0,{zIndex:-1,opacity:0});
      tlgal1.to(".background.padding",0,{zIndex:-1,opacity:0});
    }
    else {
      backgContent[i].classList.add("hide")
      backgContent[i+1].classList.remove("hide")
    }
  })
});

let photos=8;
  xMark3.forEach((item, i) => {
    xMark3[i].addEventListener('click',()=>{
      for (j=0; j<=photos;j++){
        backgContent[j].classList.add("hide")
      }
      const tlgal2=new TimelineMax();
      tlgal2.to(backgBorder,0,{zIndex:-1,opacity:0});
      tlgal2.to(".background.padding",0,{zIndex:-1,opacity:0});
      i=0;
    })
  });

galArrowLeft.forEach((item, i) => {
  galArrowLeft[i].addEventListener('click',()=>{
    if(i==0){
      const tlgal1=new TimelineMax();
      backgContent[i].classList.add("hide")
      tlgal1.to(backgBorder,0,{zIndex:-1,opacity:0});
      tlgal1.to(".background.padding",0,{zIndex:-1,opacity:0});
    }
    else {
      backgContent[i].classList.add("hide")
      backgContent[i-1].classList.remove("hide")
    }
  })
});

//Galeria

//container.forEach((item, i) => {
//  container[i].addEventListener('click',()=>{
//    const tlgal=new TimelineMax();
//    tlgal.to(backgBorder,0,{zIndex:3,opacity:1});
//    tlgal.to(".background.padding",0,{zIndex:2,opacity:1});
//    backgContent[i].classList.remove("hide");
//  })
//  galArrowRight[i].addEventListener('click',()=>{
//    if(i==8){
//      backgContent[i].classList.add("hide");
//      const tlgal=new TimelineMax();
//      tlgal.to(backgBorder,0,{zIndex:3,opacity:1});
//      tlgal.to(".background.padding",0,{zIndex:2,opacity:1});
//      backgContent[i].classList.remove("hide");
//    }
//    else if(i<8){
//      console.log("i=="+i);
//      backgContent[i].classList.add("hide");
//      const tlgal=new TimelineMax();
//      tlgal.to(backgBorder,0,{zIndex:3,opacity:1});
//      tlgal.to(".background.padding",0,{zIndex:2,opacity:1});
//      backgContent[i+1].classList.remove("hide");
//    }
//    else{
//      i=0;
//      const tlgal1=new TimelineMax();
//      tlgal1.to(backgBorder,0,{zIndex:-1,opacity:0});
//      tlgal1.to(".background.padding",0,{zIndex:-1,opacity:0});
//      backgContent[i].classList.add("hide");
//    }
//    i+=1;
//  })
//});


//objasnienie zagadnien
conFront.forEach((item, i)=>{
  conFront[i].addEventListener('mouseenter',()=>{
      const tlslide=new TimelineMax();
    tlslide.to(double_arrow_right[i],0.2,{x:10})
  })
  conFront[i].addEventListener('mouseleave',()=>{
      const tlslide1=new TimelineMax();
    tlslide1.to(double_arrow_right[i],0.2,{x:0})
  })
});


icoRight.forEach((item, i)=>{
  item.addEventListener('click',()=>{
    if(container[i].classList.contains("active")){
      const icoTL=new TimelineMax();
      container[i].classList.remove("active");
      icoTL.to(backc[i],0.3,{opacity:0});
      icoTL.to(backc[i],0.3,{scaleY:0,transformOrigin:"top"},"-=0.1");
      icoTL.to(container[i],0.3,{height:"32px"},"-=0.3");
    }
    else{
      const icoTL=new TimelineMax();
      container[i].classList.add("active");
      icoTL.to(container[i],0.3,{height:"auto"});
      icoTL.to(backc[i],0.3,{scaleY:1},"-=0.3");
      icoTL.to(backc[i],0.3,{opacity:1});
    }
  })
})

// porady
arrow_down_content.forEach((item, i) => {
  item.addEventListener('click',()=>{
    container[i].classList.add("active");
    moretl.to(back[i],0.3,{delay:0.3,opacity:1})

  })
});
xMark_content.forEach((item,i) => {
  item.addEventListener('click',()=>{
    container[i].classList.remove("active");
    moretl.to(back[i],0.3,{opacity:0})
  })
});

// indywidualne urzadzenia
moreButton.forEach((item,i) => {
  item.addEventListener('click',()=>{
    container[i].classList.add("active");
  })
});
xMark.forEach((item,i) => {
  item.addEventListener('click',()=>{
    container[i].classList.remove("active");
    moretl.to(bottomContainer[i],0.3,{opacity:1});
    moretl.to(back[i],1,{opacity:0})
  })
});

// footer
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
      tl.to(allContent,0.25,{css:{marginTop:0}},"-=0.2");
      navbarmb_div.classList.remove("active");
    }
    else{
      currently=true;
      tl.to(navbarmb_div,0.25,{height:"auto"});
      tl.to(navbarmbid,0.5,{scaleX:1,transformOrigin:"right"});
      tl.to(a_nav_bar,0.3,{opacity:1});
      tl.to(allContent,0.25,{css:{marginTop:240}},"-=1.05");
      navbarmb_div.classList.add("active");
    }
    setTimeout(()=>{currently=false},900);
  }
  else{
    return 0;
  }
});
