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
    const swipeThreshold = 50;

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
