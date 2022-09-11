gsap.from('.b1', { duration: 3,delay: 1.2, y: '-100vh', ease: "bounce.out" });
gsap.from('.b2', { duration: 3,delay: .8, y: '-100vh', ease: "bounce.out" });
gsap.from('.b3', { duration: 3,delay: .4, y: '-100vh', ease: "bounce.out" });
gsap.from('.b4', { duration: 3,delay: .4, y: '-100vh', ease: "bounce.out" });
gsap.from('.b5', { duration: 3,delay: .8, y: '-100vh', ease: "bounce.out" });
gsap.from('.b6', { duration: 3, delay: 1.2, y: '-100vh', ease: "bounce.out" });
var preloader=document.getElementById('load1');
function MyFunction(){
    preloader.style.display='none';
}
const timeline = gsap.timeline({ defaults: { duration: 1 } })
 timeline
        // .from('.b1', { x: '-100vw', ease: "elastic"})
        // .from('.b2', { x: '-100vw', ease: "elastic"})
        // .from('.b3', { x: '-100vw', ease: "elastic"})
        // .from('.b4', { x: '-100vw', ease: "elastic"})
        // .from('.b5', { x: '-100vw', ease: "elastic"})
        // .from('.b6', { x: '-100vw', ease: "elastic" })
        .from('#nav', { y: '-100%', ease: 'bounce' }, 1)
        .from('.link', {opacity:0, stager: 1},2)
        .from('#logo', {duration: 3,y:'-100vh', ease: 'elastic'})

        gsap.registerPlugin(ScrollTrigger);
        gsap.to('progress', {
          value: 100,
          ease: 'none',
          scrollTrigger: { scrub: 0.3 }
        });


        gsap.utils.toArray(".slideText").forEach(text => {
            gsap.timeline({
              defaults: {ease: "none"},
              scrollTrigger: {
                scroller: text.closest(".horizSlider"),
                horizontal: true,
                trigger: text.closest(".slide"),
                start: "left right",
                end: "left left",
                scrub: true
              }
            })
            .fromTo(text, {x: 250}, {x: -250}, 0)
            .from(text.nextElementSibling, {scale: 0.8}, 0)
        });
          


        let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 
    
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
        }
      }
    });
    
    // make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
    

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#parallel-container',
    start: "bottom bottom"
  }
});

t1.from('#star', { y: '100%', duration: 1 ,delay:1})
  .from('#snow-hill', { y: '100%', duration: 2.2 },2.4)
  .from('#front-hill', { y: '100%', duration: 2.8,},3.4)
  .from("#moon", { y: '100%', duration: 1.2 })
  .from('.right', { duration: 1.2, y: '100vh', delay: 0 })
  .fromTo('#co', { opacity: 0, scale: 0, rotation: 720 }, { duration: .8, opacity: 1, scale: 1, rotation: 0 })


  gsap.utils.toArray(".comparisonSection").forEach(section => {
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => "+=" + section.offsetWidth, 
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
        defaults: {ease: "none"}
      });
    // animate the container one way...
    tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
      // ...and the image the opposite way (at the same time)
      .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
  });

  // usage:
batch(".card", {
  interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
  batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true})
  // you can also define things like start, end, etc.
});
