// gsap.from(".line h1",{
//     y:150,
//     stagger:0.27,
//     duration:0.6,
//     delay:0.5
// })




var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.27,
    duration:0.6,
    delay:0.5
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0;
        setInterval(function(){
            if(grow<100){
                 
                 h5timer.innerHTML=grow++
            }else{
                grow=100
                h5timer.textContent=grow
            }
           
            
        },20)
    }
})
tl.from(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})