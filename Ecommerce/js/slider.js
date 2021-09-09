const slider1 = document.getElementById("glide1");
const slider2 = document.getElementById("glide2");

if(slider1)
    new Glide(slider1,{
        type: "carousel",
        startAt:0 ,
        autoPlay: 3000,
        hoverpause:true,
        preView: 1,
        animationDuration: 800,
        animationTimingFunc: "linear",
}).mount();

if(slider2)
    new Glide(slider2,{
        type: "carousel",
        startAt:0 ,
        autoPlay: 2000,
        hoverpause:false,
        preView: 5,
        animationDuration: 800,
        animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            1200:{
                preView: 3,
            },
            768:{
                preView: 2,
            },
        },
}).mount();
