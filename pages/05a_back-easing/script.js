import gsap from "gsap";

const tabs = document.querySelectorAll('.tab');
const indicator = document.querySelector('.indicator');
const tabRow = document.querySelector('.tab-row');

function updateIndicator(target){
    const tabBounce = target.getBoundingClientRect();
    const rowBounce = tabRow.getBoundingClientRect();

    const width = tabBounce.width;
    const offSet = tabBounce.left - rowBounce.left;

    gsap.to(indicator,{
        x:offSet,
        width:width,
        duration:0.4,
        ease:'back.out(1.4)'
    })
};

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active')
        updateIndicator(tab)
    })
});

updateIndicator(document.querySelector('.tab.active'));