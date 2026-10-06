// Mobile menu toggle

const mobileTrigger = document.getElementById("opal-menu-toggle");

const navigationList = document.getElementById("opal-nav-list");

const navigationBox = navigationList.parentElement;

mobileTrigger.addEventListener("click", function () {
  mobileTrigger.classList.toggle("opal-active");
  navigationBox.classList.toggle("opal-open");
});


// Close menu when a link is clicked

navigationList.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileTrigger.classList.remove("opal-active");
    navigationBox.classList.remove("opal-open");
  });
});


// Reset menu when resizing to desktop

window.addEventListener("resize", function () {
  if (window.innerWidth > 991) {
    mobileTrigger.classList.remove("opal-active");
    navigationBox.classList.remove("opal-open");
  }
});
