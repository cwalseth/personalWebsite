
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

$(document).ready(function () {
    const body = $("body");
    const content = $(".content");
    const loading = $("#loading");
    const loadingSVG = $("#loading > SVG");
    const loadingH1 = $("#loading > h1");
    const container1 = $('.container1');
    const nav = $('.container1 > nav');
    const navLinks = $('.container1 > nav > ul > li');
    const redBox = $('#one');
    const main = $("main#main");
    const container = $("#container");
    const timeOut1 = setTimeout(preloader, 1000);
    // const timeOut2 = setTimeout(postloader, 2200); 
    // main.hide();
    // container.on("load", function () {
    //     preloader();
    // })
    window.addEventListener("load", function(e) {
        preloader();
    })
    function preloader() {
        // loading.fadeOut(2000);
        let tl = gsap.timeline();
        tl.fromTo(container,{autoAlpha: 0}, {autoAlpha: 1, duration: 2})
        tl.to(loading, {autoAlpha: 0, duration: 3}, "+=2")
        // main.show().fadeIn(2000);
        tl.fromTo(main, {autoAlpha: 0}, {autoAlpha: 1, duration: 2})
    }

    // function preloader() {

    //     loading.addClass('displayed');
    //     loading.removeClass('nodisplay');
    //     let tl = gsap.timeline();

        // gsap.from(
        // tl.from(
        //     '.container1', {
        //     'backgroundColor': '#000',
        //     autoAlpha: 0,
        //     y: -200,
        //     ease: "bounce.out", 
        //     duration: 0.5
        // });
    // };
    // function postloader() {
    //     let tl = gsap.timeline({});
    //     tl.to(loadingH1, {x:"-200%", duration:1, autoAlpha:0});
    //     tl.to(loadingSVG, {y:"-200%", duration:1, autoAlpha:0});
        
    //     tl.to(nav, {autoAlpha:0.75, duration:0.5})
    //     tl.from(navLinks, {opacity:0, stagger:0.2})
    //     tl.to(loading, {"display":"none", autoAlpha:0, duration:0.2, });
    //     loading.remove()
    // }
    
// tl3.fromTo(redBox, {
//     x:"-100%",
//     backgoundColor: "red",
//     duration: 2
// },{
//     x: "0%",
//     backgoundColor: "blue"
// })

 });