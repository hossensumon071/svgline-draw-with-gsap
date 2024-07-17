gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

gsap.set("#line", { drawSVG: "0%" }); // Set initial state of the line

const mainTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-section",
    start: "top center",
    onEnter: () => mainTimeline.play(),
    onLeaveBack: () => mainTimeline.pause(), // Optional: pause if leaving back
    once: true // Ensure the animation happens only once when the section is in view
  }
});

// Animate the SVG line
mainTimeline.to("#line", {
  drawSVG: "100%",
  ease: "none",
  duration: 10 // Adjust duration to control the speed of the line drawing
});

// Animate the first content box when the SVG line animation starts
mainTimeline.from("#box1, .eleips", {
  opacity: 0,
  duration: 1
}, 0.5); // Starts at the beginning of the timeline

// Animate the second content box in sequence
mainTimeline.from("#box2, .eleips2", {
  opacity: 0,
  duration: 1
}, 4); // Adjust timing as needed to match SVG line progress

// Continue for other content boxes
mainTimeline.from("#box3, .eleips3", {
  opacity: 0,
  duration: 1
}, 6); // Adjust timing as needed to match SVG line progress

mainTimeline.from("#box4, .eleips4", {
  opacity: 0,
  duration: 1
}, 7); // Adjust timing as needed to match SVG line progress

mainTimeline.from("#box5, .eleips5", {
  opacity: 0,
  duration: 1
}, 8); // Adjust timing as needed to match SVG line progress
