window.onload = function () {
  // Your script code here

  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");
  const bigCard = document.getElementById("bigCard");
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
