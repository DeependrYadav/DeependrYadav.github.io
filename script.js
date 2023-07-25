function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
  
      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
    });
  }
  
  navSlide();
  
  // git calendar
  GitHubCalendar(".react-activity-calendar", "guyvinay", {
    responsive: true,
    // global_stats: false,
    // tooltips: true,
  });
  
  // resume download btn navbar
  let resumeDwn1 = document.querySelector("#resume-link-1");
  resumeDwn1.addEventListener("click", () => {
    window.location.assign(
      "https://drive.google.com/file/d/1PPeQnU-bnOuN_G7RzBKzvCqYIbYdE3Ry/view?usp=sharing",
      "_blank"
    );
  });
  
  // resume download btn home section
  let resumeDwn2 = document.querySelector("#resume-button-2");
  resumeDwn2.addEventListener("click", () => {
    window.location.assign(
      "https://drive.google.com/file/d/1PPeQnU-bnOuN_G7RzBKzvCqYIbYdE3Ry/view?usp=sharing",
      "_blank"
    );
  });
  