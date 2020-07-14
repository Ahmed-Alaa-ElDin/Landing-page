/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sectionTitles = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function navScrolling() {
  activeClass();
  document.querySelector("header").style.opacity = "1";
  setTimeout(function () {
    document.querySelector("header").style.opacity = "0.2";
  },2000);
  if (window.pageYOffset >= window.innerHeight) {
    document.querySelector(".to-top").style.opacity = "1";
  } else {
    document.querySelector(".to-top").style.opacity = "0";
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

sectionTitles.forEach(function (title) {
  const lst = document.createElement("li");
  const lstTitle = document.createTextNode(title.getAttribute("data-nav"));
  const lstId = document.createAttribute("data-id");
  lstId.value = "#" + title.getAttribute("id");
  lst.setAttributeNode(lstId);
  lst.appendChild(lstTitle);
  lst.classList.add("lst");
  navList.appendChild(lst);
})

// Add class 'active' to section when near top of viewport

const lst1 = document.querySelectorAll('.lst');
lst1[0].classList.add("active");
function activeClass() {
  sectionTitles.forEach(function (select) {
    if (window.pageYOffset > (select.offsetTop - 300) && window.pageYOffset < (select.offsetTop + select.offsetHeight - 300)) {
      const lstID = select.getAttribute("id");
      let activeSection = document.querySelector("[data-id='#" + lstID +"']");
      for (var i = 0; i < sectionTitles.length; i++) {
        sectionTitles[i].classList.remove("your-active-class");
        document.querySelectorAll(".lst")[i].classList.remove("active");
      }
      activeSection.classList.add("active");
      select.classList.add("your-active-class");
  }
})};

// Scroll to anchor ID using scrollTO event

document.addEventListener("scroll", navScrolling);
document.querySelector("header").addEventListener("mouseover", navScrolling);

lst1.forEach(function (itm) {
  itm.addEventListener("click", function () {
    activeClass();
    window.scrollTo(0,document.querySelector(itm.getAttribute("data-id")).offsetTop);
  });
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.querySelectorAll("section h2").forEach(function (sec) {
  sec.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("collapse");
  })
})
// Scroll to section on link click
document.querySelector(".to-top").addEventListener("click", function () {
  window.scrollTo(0,0);
})
// Set sections as active
