var swiper = new Swiper('.Slider' , {
    autoplay:true,
    speed:2500,
    loop:true,
    parallax:true,

    navigation:{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});



function cards(){
    /*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
}

cards()



function gsapScrolling(){
    gsap.to('.sec3-text',{
        // ease:'Expo.easeInOut',
        x:'-30%',
        scrollTrigger:{
            trigger:'.sec3-text',
            scroller:"body",
            start:'top 60%',
            end:'bottom 30%',
            scrub:true,
            markers:true
        }
    })
    gsap.to('.sliderText',{
        x:'40%',
        scrollTrigger:{
            trigger:'.sliderText',
            scroller:"body",
            start:'top 80%',
            end:'bottom 30%',
            scrub:true
        }
    })
}

gsapScrolling()