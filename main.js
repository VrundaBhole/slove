




gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.section').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false
    });
});
    

$(document).ready(function() {
    $(".section").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: 100, duration: 1, ease: "back.out(2)", stagger: { amount: 0.5 } });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top center",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });
});
   $("section .video").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: 100, duration: 1 });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });

     
// Create a timeline
const tl = gsap.timeline({ repeat: -1 });

// Get the text element
const textElement = document.querySelector('.head2');

// Split the text into individual characters
const chars = textElement.innerText.split('');

// Clear the text content
textElement.innerText = '';

// Add each character to the timeline with animation
chars.forEach((char, index) => {
  // Create a span for each character
  const charSpan = document.createElement('span');
  charSpan.textContent = char;
  charSpan.style.opacity = 0;
  textElement.appendChild(charSpan);

  // Add animation to each character
  tl.to(charSpan, {
    opacity: 1,
    y: -20, // Move the character upwards
    scale: 1.2, // Scale up
    rotation: 10, // Rotate clockwise
    color: "#FC9842", // Change color to blue
    duration: 0.1,
    ease: 'power2.out', // Ease-out for a more pronounced bounce
    delay: index * 0.05
  })
  .to(charSpan, {
    y: 0, // Return to original position
    scale: 1, // Return to original scale
    rotation: 0, // Return to original rotation
    color: "white", // Return to original color
    duration: 0.1,
    ease: 'bounce.out', // Bounce effect
    delay: index * 0.05 + 0.5
  });
});

