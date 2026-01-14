import gsap from "gsap";

const bars = document.querySelectorAll('.bar');

bars.forEach((bar,index)=>{
    gsap.fromTo(bar,{
        // from
        scaleY:0.4
    },{
        // to
        scaleY:1.4,
        duration:0.6,
        ease:'sine.out',
        repeat:-1,
        yoyo:true,
        delay:index * 0.1
    }
)
})
