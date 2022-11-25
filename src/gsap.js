// TweenMax.method(element, duration, { vars } )
const ham = document.querySelector('.gsap')
const l1 = document.querySelector('.lineOne');
const l2 = document.querySelector('.lineTwo');
const l3 = document.querySelector('.lineThree');
const lines = [l1, l2, l3]


const timeLine = new TimelineMax({});
const toggle = new TimelineMax({paused: true, reversed: true})
ham.addEventListener('click', _ => {
    // TweenMax.to(l2, 2, {scaleX: 1.5})
    // TweenMax.to(l3, 2, {scaleX: 1.5})
    // timeLine
        // .to(l1, 1, {scaleX : 1.5})
        // .to(l1, 0.75, {scaleX : 0.8})
        // .to(l1, 1, {scaleX: 1})
})

// timeLine.staggerTo([lines], 0.25, {scaleX : 1.5, repeat: 1, yoyo: true}, 0.1)

toggle
 .to(l2, .25, {scaleX : 0})
 .to(l1, .25, {rotation : 45, transformOrigin : "50% 50%", y: 8})
 .to(l3, .25, {rotation : -45, transformOrigin : "50% 50%", y : -8})

ham.addEventListener('click', _ => {
    toggle.reversed() ? toggle.play()   : toggle.reverse();
})

