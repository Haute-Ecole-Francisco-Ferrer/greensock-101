const foncstart = () => {
     console.log('start');
}
const foncupdate = () => {
     console.log('update');
}
const fonccomplete = () => {
     console.log('complete');
}




// function foncstart() {
//     console.log('start');
// } 
// function foncupdate() {
//     console.log('update');
// } 
// function fonccomplete() {
//     console.log('complete');
// } 


const timeline = gsap.timeline({
    defaults: {
        duration: 1,
        // 
    },
    paused:true,
    onStart: foncstart,
    onUpdate: foncupdate,
    onComplete: fonccomplete
});




// gsap.set('body *', {
//     opacity:0
// })
timeline

    .fromTo('body', {
        backgroundColor: '#fff'
    },
        {
            backgroundColor: '#76c897'
        })

    .fromTo(['h1, .intro'], {
        opacity: 0,
        y: -20
    },
        {
            opacity: 1,
            y: 0,
            // stagger: 0.2,
            ease: 'power1.out'
        }, 'mylabel'
    )


    .fromTo('header img', {
        opacity: 0
    }, {
        opacity: 1,
        y: 20
    })


    .fromTo(['ul, h2'], {
        opacity: 0
    }, {
        opacity: 1,
        y: 20

    })

    .fromTo('ul li', {
        opacity: 0,
        y: -20,
    }, {
        opacity: 1,
        y: 0,
         stagger: 0.4

    }, 
    // 'mylabel'
    )

// gsap.fromTo('header', {x:-40}, {x:40, repeat:5, yoyo:true})

// const playbutton = document.querySelector('#btnPlay');
// console.log(playbutton);

$( "#btnPlay" ).click(function() {
  timeline.play();
});

$( "#btnPause" ).click(function() {
  timeline.pause();
});

$( "#btnPause" ).click(function() {
  timeline.pause();

});
