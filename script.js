import Spheres1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js';

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    // Setting the specific countdown date 
    const countDownDate = new Date("Jun 28, 2025 16:00:00").getTime();
    const x = setInterval(function() {
        const now = new Date().getTime(),
              distance = countDownDate - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        // Display a message when the countdown ends
        if (distance < 0) {
            document.getElementById("headline").innerText = "The journey has come to an end, but the memories will stay forever.";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
            // Reinitialize confetti effect
            initParticles(); // Call to reinitialize the confetti effect
        }
    }, 1000);

    // Initialize ball effect with additional golden balls
    const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
        count: 51,
        minSize: 0.5,
        maxSize: 1,
        gravity: 0.5
    });

    // Add original and golden colors
    bg.spheres.setColors([
        0x0000ff, // Original color (blue)
        0x000000, // Original color (black)
        0xffffff, // Original color (white)
        0xee9e21  // Warm golden color
    ]);


})();
