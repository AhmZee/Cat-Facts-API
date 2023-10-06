window.onload = function () {
  const catAnimationElements = document.querySelectorAll('.cat-animation');
  let currentImage = 0;

  setInterval(imgTransform, 7000);

  function imgTransform() {
      catAnimationElements[currentImage].classList.remove('visible');
      catAnimationElements[currentImage].classList.add('hidden');

      currentImage = (currentImage + 1) % catAnimationElements.length;

      catAnimationElements[currentImage].classList.remove('hidden');
      catAnimationElements[currentImage].classList.add('visible');
  }
}

const loadElements = document.getElementById('more-fact-btn')

function change() {
  const apiUrl = 'https://catfact.ninja/fact?max_length=140';
  fetch(apiUrl)
      .then(response => response.json())
      .then(myResponse => {
          console.log(apiUrl);
          fact = myResponse.fact;

          const apiElement = document.getElementById('fact-display');
          apiElement.innerText = fact;
      })
}

loadElements.addEventListener('click', () => {
  change();
})