import gsap from "gsap";

gsap.to(".box",{
    rotate:360,
    scale:1,
    borderRadius:150,
    duration:2,
    repeat:-1,
    // repeatDelay:2,
    yoyo:true,
    ease:"bounce",
    // paused:true,
    // stagger:2
})