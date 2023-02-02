const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio 
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r)
});

/*------------------------------- debut style cursor -------------------------------*/

// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// neonCursor({
//     el: document.getElementById('app'),
//     sharderPoints: 16,
//     curvePoints:80,
//     curveLerp: 0.5,
//     radius1: 5,
//     radius1: 30,
//     velocityTreshold: 10,
//     sleepRadiusX: 100,
//     sleepRadiusY: 100,
//     sleepTimeCoefX: 0.0025,
//     sleepTimeCoefY: 0.0025,
// })

// /*------------------------------- fin style cursor -------------------------------*/

