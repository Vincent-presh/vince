var controller = new ScrollMagic.Controller();
var video = document.querySelector(".video");
var titles = document.querySelectorAll(".titlee");
var main = document.querySelector(".main");

// create a scene
var scene = new ScrollMagic.Scene({
  duration: 750, // the scene should last for a scroll distance of 1000px
  offset: 50, // start this scene after scrolling for 50px
  triggerHook: 0.45,
})
  //.addIndicators("welcome3")
  .setClassToggle(
    ".textintro, .rect, .textwel, .encompasrec, .socials, .header, .contain-image",
    "activated"
  )
  .setPin(".main") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

var scenew = new ScrollMagic.Scene({
  duration: 750, // the scene should last for a scroll distance of 1000px
  offset: 0, // start this scene after scrolling for 50px
  triggerHook: 0,
})
  //.addIndicators("welcome3")
  .setClassToggle(".directbut", "deactivated")
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  duration: 3300, // the scene should last for a scroll distance of 1000px
  offset: 0,
  triggerElement: ".design",
  triggerHook: 0.07,
})
  .setClassToggle(".contain-video", "active")
  //.addIndicators()
  .setPin(".design") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

let ifScene2played = false;
let accerlermount = 0.05;
let scrollPos = 0;
let delay = 0;

scene2.on("update", (e) => {
  scrollPos = e.scrollPos / 3500;
});

setInterval(() => {
  delay += (scrollPos - delay) * accerlermount;
  video.currentTime = scrollPos;
}, 1);

for (var i = 0; i < titles.length; i++) {
  /*const textAnim = TweenMax.fromTo(
    ".titlee:nth-of-type(" + (i + 1) + ")",
    500,
    { opacity: 0 },
    { opacity: 1 }
  );
  */

  var scene3 = new ScrollMagic.Scene({
    duration: 400, // the scene should last for a scroll distance of 1000px
    offset: 0,
    triggerElement: ".titlee:nth-of-type(" + (i + 1) + ")",
    triggerHook: 0,
  })
    .setClassToggle(".titlee:nth-of-type(" + (i + 1) + ")", "active")
    .setPin(".titlee:nth-of-type(" + (i + 1) + ")")
    //    .setTween(textAnim)
    .addTo(controller);
}
