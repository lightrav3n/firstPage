document.addEventListener("DOMContentLoaded", function () {
  const windowElement = window;
  const parallaxElements = document.querySelectorAll('.parallax-img[data-type="background"]');
  const contentElements = document.querySelectorAll(".content");
  const loaderElements = document.querySelectorAll(".loader");
  const header = document.querySelector(".sec1_half");
  const helloHead = document.querySelector(".sec1_hello");
  const sec1Text = document.querySelector(".sec1_text");
  const sec1Scroll = document.querySelector(".sec1_scroll");
  const sec1Scroll2 = document.querySelector(".sec1_scroll2");
  const removeLoader = document.querySelector(".loader_out2");

  // Parallax Effect
  parallaxElements.forEach((parallaxElement) => {
    windowElement.addEventListener("scroll", () => {
      const yPos = -(windowElement.scrollY || windowElement.scrollTop) / parallaxElement.dataset.speed;
      parallaxElement.style.backgroundPosition = `50% ${yPos}px`;
    });
  });

  // Set initial classes on window load
  window.addEventListener("load", () => {
    contentElements.forEach((contentElement) => contentElement.classList.add("content_block"));
    loaderElements.forEach((loaderElement) => {
      loaderElement.classList.add("loader_out");
      loaderElement.querySelector(".loader_out").animate({ width: "0" });
      loaderElement.querySelector(".loader_out2").animate({ width: "50vw" }, 500);
    });
  });

  // Hello Animation
  setTimeout(() => {
    const contTrue = document.querySelector(".content").classList.contains("content_block");
    if (contTrue) {
      helloHead.classList.add("sec1_hello_block");
      console.log("Trigger");
      const $browser = checkNavigateur();
      const tlHello = new TimelineLite({ paused: true });

      const animateHello = (selector, duration, offset) => {
        tlHello.staggerFrom(document.querySelectorAll(selector), duration, { drawSVG: "0%", ease: Power3.easeOut }, offset);
      };

      animateHello("#hello_h > *", 0.6, 0.8);
      animateHello("#hello_e > *", 0.6, "-=0.7");
      animateHello("#hello_l1 > *", 0.6, "-=1.2");
      animateHello("#hello_l2 > *", 0.6, "-=1");
      animateHello("#hello_o > *", 1.2, "-=1.2");
      animateHello("#hello_dot > *", 0.6, "-=0.8");

      if ($browser.name == "Safari" && $browser.version < 10) {
        tlHello.progress(1, false);
      } else {
        tlHello.play().timeScale(1);
      }
    } else {
      console.log("else working");
    }
  }, 2000);

  // Check Browser Function
  function checkNavigateur() {
    const nAgt = navigator.userAgent;
    let browserName = navigator.appName;
    let fullVersion = parseFloat(navigator.appVersion);
    let majorVersion = parseInt(navigator.appVersion, 10);

    const matchBrowser = (regex, name) => {
      const match = nAgt.match(regex);
      if (match) {
        browserName = name;
        fullVersion = match[1];
      }
    };

    matchBrowser(/Opera\/([0-9.]+)/, "Opera");
    matchBrowser(/MSIE ([0-9.]+)/, "Microsoft Internet Explorer");
    matchBrowser(/Chrome\/([0-9.]+)/, "Chrome");
    matchBrowser(/Safari\/([0-9.]+)/, "Safari");
    matchBrowser(/Firefox\/([0-9.]+)/, "Firefox");

    if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt(fullVersion, 10);

    if (isNaN(majorVersion)) {
      fullVersion = parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }

    return { name: browserName, version: majorVersion };
  }

  // Scroll Events
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY || window.scrollTop;

    // Apply classes based on scroll position
    if (scroll >= 100) {
      removeLoader.removeAttribute("style");
      removeLoader.classList.remove("loader_out2");
      header.classList.add("sec1_full");
      helloHead.classList.add("hello_right");
      sec1Text.classList.add("sec1_text_top");
      sec1Scroll.classList.add("down_hide");
      sec1Scroll2.classList.add("up_show");
    } else {
      header.classList.remove("sec1_full");
      helloHead.classList.remove("hello_right");
      sec1Text.classList.remove("sec1_text_top");
      sec1Scroll.classList.remove("down_hide");
      sec1Scroll2.classList.remove("up_show");
    }

    // Adjust animation position based on scroll
    if (scroll >= 600) {
      document.querySelector(".anim").style.top = `${200 - scroll / 3}px`;
    } else {
      document.querySelector(".anim").style.top = "0px";
    }
  });
});

window.onload = function () {
  // swipe and click events

  const bigCard = document.getElementById("bigCard");
  let touchStartX = 0;
  let touchEndX = 0;

  bigCard.addEventListener("touchstart", handleTouchStart, false);
  bigCard.addEventListener("touchmove", handleTouchMove, false);
  bigCard.addEventListener("touchend", handleTouchClick, false)
  bigCard.addEventListener("click", handleClick, false);

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    event.preventDefault()
  }
  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    handleSwipe();
  }

  function handleTouchClick(event) {
    const clickX = event.clientX - bigCard.getBoundingClientRect().left;

    // Get the width of the card-big element
    const cardWidth = bigCard.clientWidth;

    // Determine if the click occurred on the left or right side
    if (clickX < cardWidth / 2) {
      // Clicked on the left side
      setIndex((currentIndex + 1) % 3 || 3);
    } else {
      // Clicked on the right side
      setIndex((currentIndex % 3) + 1);
    }
  }
  function handleSwipe() {
    const swipeThreshold = 100;

    if (touchStartX - touchEndX > swipeThreshold) {
      setIndex((currentIndex % 3) + 1);
    } else if (touchEndX - touchStartX > swipeThreshold) {
      setIndex((currentIndex + 1) % 3 || 3);
    }
  }

  function handleClick(event) {
    const clickX = event.clientX - bigCard.getBoundingClientRect().left;

    // Get the width of the card-big element
    const cardWidth = bigCard.clientWidth;

    // Determine if the click occurred on the left or right side
    if (clickX < cardWidth / 2) {
      // Clicked on the left side
      setIndex((currentIndex + 1) % 3 || 3);
    } else {
      // Clicked on the right side
      setIndex((currentIndex % 3) + 1);
    }
  }


  // rest
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");
  const cardText = document.getElementById("cardText");
  const cardTitle = document.getElementById("cardTitle");

  cardTitle.style.userSelect = "none";
  cardText.style.userSelect = "none";

  let currentIndex = 1;
  let intervalId = setInterval(changeImage, 8000);

  function changeImage() {
    switch (currentIndex) {
      case 1:
        bigCard.style.backgroundImage = 'url("./assets/images/1.jpg")';
        radio1.checked = true;
        cardTitle.textContent = "HTML/CSS Portfolio";
        cardText.textContent =
          "A portfolio made with HTML,SCSS (some Bootstrap elements) and a bit of JavaScript to tie all, nice, together.";
        break;
      case 2:
        bigCard.style.backgroundImage = 'url("./assets/images/2.jpg")';
        radio2.checked = true;
        cardTitle.textContent = "React Portfolio";
        cardText.textContent =
          "The same portfolio as the one done with HTML and SCSS, but refactored using React JS. No Bootstrap on this one. Just some React  Router and Font Awesome";
        break;
      case 3:
        bigCard.style.backgroundImage = 'url("./assets/images/3.jpg")';
        radio3.checked = true;
        cardTitle.textContent = "JS Adventure Game";
        cardText.textContent =
          "Going back to the origins with this one. An old school  text based adventure game made entirely using JavaScript. (maybe a dash of HTML and a bit of CSS for some light styling)";
        break;
    }

    currentIndex = (currentIndex % 3) + 1;
  }

  function setIndex(index) {
    clearInterval(intervalId);
    currentIndex = index;
    intervalId = setInterval(changeImage, 8000);
    changeImage();
  }

  changeImage();

  radio1.addEventListener("change", () => {
    if (radio1.checked) {
      setIndex(1);
    }
  });

  radio2.addEventListener("change", () => {
    if (radio2.checked) {
      setIndex(2);
    }
  });

  radio3.addEventListener("change", () => {
    if (radio3.checked) {
      setIndex(3);
    }
  });
};
