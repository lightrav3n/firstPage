window.onload = function () {
  // swipe
  const bigCard = document.getElementById("bigCard");
  let touchStartX = 0;
  let touchEndX = 0;

  bigCard.addEventListener("touchstart", handleTouchStart, false);
  bigCard.addEventListener("touchmove", handleTouchMove, false);
  bigCard.addEventListener("mousedown", handleMouseDown, false);

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    handleSwipe();
  }

  function handleMouseDown(event) {
    touchStartX = event.clientX;
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
  }

  function handleMouseMove(event) {
    touchEndX = event.clientX;
    handleSwipe();
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove, false);
    document.removeEventListener("mouseup", handleMouseUp, false);
  }

  function handleSwipe() {
    const swipeThreshold = 150;

    if (touchStartX - touchEndX > swipeThreshold) {
      setIndex((currentIndex % 3) + 1);
    } else if (touchEndX - touchStartX > swipeThreshold) {
      setIndex((currentIndex + 1) % 3 || 3);
    }
  }

  // rest
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");
  
  const cardText = document.getElementById("cardText");
  const cardTitle = document.getElementById("cardTitle");

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
