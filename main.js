window.onload = function () {
  // JavaScript code

const catAnimationElements = document.querySelectorAll('.cat-animation');
let currentImage = 0;
let catImages = []; // Array to store all cat images

// Function to fetch cat images from the Unsplash API for a given page
async function fetchCatImages(page) {
    const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=cat&client_id=5SMnL1Kj3KRgqWUXINstM87ccsK2T2CuSmYP0496-yQ&per_page=12`;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.results.map(result => result.urls.regular))
        .catch(error => {
            console.error('Error fetching cat images:', error);
        });
}

// Function to fetch cat images from all pages
async function fetchAllCatImages() {
    const totalPages = 30; // You can adjust the number of pages as needed
    for (let page = 1; page <= totalPages; page++) {
        const images = await fetchCatImages(page);
        catImages = catImages.concat(images);
    }
    preloadImages(catImages); // Preload all images
    changeBackgroundImage(); // Start background animation
}

// Function to preload all images
function preloadImages(images) {
    images.forEach(imageUrl => {
        const img = new Image();
        img.src = imageUrl;
    });
}

// Function to change the background image smoothly
function changeBackgroundImage() {
  const catBackground = document.getElementById('cat-background');
  const nextImageIndex = Math.floor(Math.random() * catImages.length);

  catBackground.style.opacity = 0; // Fade out the current image

  // Wait for the transition to complete before changing the image
  setTimeout(() => {
      catBackground.src = catImages[nextImageIndex];
      catBackground.style.opacity = 1; // Fade in the next image
      currentImage = nextImageIndex;

      setTimeout(changeBackgroundImage, 7000); // Change image every 7 seconds
  }, 2000); // Adjust this delay to match your CSS transition duration
}
// Call the function to fetch and display cat images from all pages
fetchAllCatImages();



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