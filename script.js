const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".bounding-element", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#hero-footer", {
        y: 0,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }


  firstPageAnim()
function circleMouseFollower(){
    window.addEventListener("mousemove", 
    function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
    })
}

circleMouseFollower()

document.querySelectorAll('.element').forEach( function(element){

    var rotate = 0;
    var diffrot = 0;
  
    element.addEventListener("mouseleave", function () {
      gsap.to(element.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
    element.addEventListener("mousemove", function(dets){

        let diff = dets.clientY - element.getBoundingClientRect().top ;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(element.querySelector('img') ,{
            opacity : 1 , 
            ease: Power3,
            top : diff ,
            left : dets.clientX ,
      duration: 0.5,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),

        });
    });
    
});

