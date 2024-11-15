const BODY = document.querySelector("body");

var randomWidth = () => {
  let x = 0;
  if (detectMob()) {
    //    x = getRndInteger(65,85);
    document.querySelector(".container-box").style.width = "80%";
    document.querySelector(".container-box").setAttribute("data-value",  " "); 
      document.querySelector(".btn-stop").style.opacity = "0";
    clearInterval(interval);
  } else {
    x = getRndInteger(30, 70); 
    document.querySelector(".container-box").style.width = x + "%";
    // document.querySelector(".container-box").setAttribute("data-value", x+ "%"); 

  }
};

var getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

randomWidth();

var interval = setInterval(() => {
  randomWidth();
}, 2000);

let stopbtn = document.querySelector(".btn-stop");

stopbtn.addEventListener("mouseover", function () {
  this.style.left = getRndInteger(-10, 99) + "%";
  this.style.top = getRndInteger(-10, 99) + "%";
  BODY.style.background = getRandomColor();
  this.innerHTML = "Stop it :)";
  this.style.bottom = "auto"; 
});

stopbtn.addEventListener("click", function () {
  clearInterval(interval);
  BODY.style.background = "white"; 
  this.style.opacity = "0";

  // Basic confetti explosion
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.9 }  // Start from near the bottom of the screen
  });

  // Create multiple bursts for a more dramatic effect
  const count = 200;
  const defaults = {
    origin: { y: 0.9 }
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  // Send confetti flying from both sides
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
});

function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 1000;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector("#date_").innerHTML =(new Date()).getFullYear();
// document.querySelector(".footer").style.marginTop = (window.innerHeight/2) - 250 +"px";
// console.log(window.innerHeight)