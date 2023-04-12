
// Get the scroll container element
const scrollContain = document.querySelector('.scroll-container');

// Add an event listener for when the user scrolls
scrollContain.addEventListener('scroll', () => {
  // If the user has scrolled to the end of the container
  if (scrollContain.scrollLeft === (scrollContain.scrollWidth - scrollContain.clientWidth)) {
    // Scroll back to the beginning
    scrollContain.scrollTo({ left: 0, behavior: 'smooth' });
  }
});



document.querySelector("#signIn").addEventListener("click",function(){
  window.location.href="login.html"
})

// bottom -scroll



const scrollContainer = document.querySelector(".scroll-container");
const scrollContent = document.querySelector(".scroll-content");
const scrollImages = document.querySelectorAll(".scroll-image");
const scrollDistance = 320; // Adjust this value to control the distance of each scroll

let scrollLeft = 0;

function scrollLeftFunc() {
  scrollLeft -= scrollDistance;
  if (scrollLeft < 0) {
    scrollLeft = 0;
  }
  scrollContent.style.transform = `translateX(-${scrollLeft}px)`;
}

function scrollRightFunc() {
  const maxScrollLeft = scrollContent.scrollWidth - scrollContainer.offsetWidth;
  scrollLeft += scrollDistance;
  if (scrollLeft > maxScrollLeft) {
    scrollLeft = maxScrollLeft;
  }
  scrollContent.style.transform = `translateX(-${scrollLeft}px)`;
}

document.querySelector("#scroll-left-btn").addEventListener("click", scrollLeftFunc);
document.querySelector("#scroll-right-btn").addEventListener("click", scrollRightFunc);

// >>>>>>>>>>>> ADMIN FUNCTIONALITY ADDED HERE  <<<<<<<<<<<<<<<<<<<<<<<<
let admin=document.querySelector("#admin")
admin.addEventListener("click",function(){
    window.location.assign("admin.html")
})