/* *
 *  Author : Deependra Yadav
 *  Github : deependryadav
 */

var typed = new Typed(".typing", {

    strings: [
        ' Backend Developer',
        ' Full-Stack developer',
        ' Java Backend developer',
        'Programmer'
    ],

    typeSpeed: 150,
    backspeed: 150,
    loop: true,

});

var typed = new Typed(".typing2", {

    strings: [
        ' Backend Developer',
        ' Full-Stack developer',
        ' Java Backend developer',
        'Programmer'
    ],

    typeSpeed: 150,
    backspeed: 150,
    loop: true,

});

//---------------- for smooth scrolling ----------------//

// document.querySelectorAll('#nav-menu a[href^="#"]').forEach(anchor =>{
//     anchor.addEventListener('click',function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior : "smooth"
//         });
//         console.log("somooth");
//     });
// });

$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {

        event.preventDefault();

        var target = $($(this).attr('href'));

        if (target.length) {

            $('html, body').animate({

                scrollTop: target.offset().top

            }, 1000);

        }

    });

});

// if above code fails uncomment it 

// document.querySelector('#back-to-top>a[href^="#"]').addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth"
//     });
// });

// -------------logic for github calender-------------

// GitHubCalendar(".react-activity-calendar", "your-username");
// GitHubCalendar(".react-activity-calendar", "anuragjatofficial", { responsive: true });


$(document).ready(()=>{
    document.querySelector(".react-activity-calendar").innerHTML = CreateGitHubCalendar();
})

function CreateGitHubCalendar() {

    return `
        <img 
        src="https://ssr-contributions-svg.vercel.app/_/deependryadav?format=svg&weeks=50&theme=native&widget_size=medium" 
        style = "width: 100%" 
        alt="Github calender"
        />`;

}


// ------------logic for navBar ---------------------//

document
    .querySelectorAll(".odd-nav")
    .forEach(a => {

        a.addEventListener("click", (e) => {

            document
                .querySelector("header")
                .style
                .backgroundColor = "var(--third-color)";

        })

    });


// --------- for dynamically adding projects -------///

const projects = document.getElementById("project");

let projects_array = [
    {
        screenshots: ["./images/belk_clone.png", "", "", "", ""],
        project_title: "Belk clone",
        project_desc: "An e-commerce website where any one can buy mackeup, beauty and cosmatic product.",
        tech_stacks: "HTML | CSS | JavaScript",
        github_link: "https://github.com/DeependrYadav/-true-mine-3269",
        deployed_link: "https://effortless-figolla-edac29.netlify.app/",
    },
    {
        screenshots: ["./images/vastram_Project.png", "", "", "", ""],
        project_title: "Myntra clone",
        project_desc: "A product-based website that deals with makeup, beauty and cosmatic product.",
        tech_stacks: "HTML | CSS | JavaScript",
        github_link: "https://github.com/dhyan0112/animated-governor-4742",
        deployed_link: "https://spontaneous-scone-9c1acf.netlify.app/",
    },
    {
        screenshots: ["./images/Electricity-Bill-Management-System.png", "", "", "", ""],
        project_title: "Electricity Bill Management System",
        project_desc: "The main objective of this system is to maintain and manage detailed information on the crime that happened in an area under a particular police station.",
        tech_stacks: "Core Java",
        github_link: "https://github.com/deependryadav/overrated-chicken-3237",
        deployed_link: "https://drive.google.com/file/d/1W5Ca10qmKI2oI58n0a5ZZuh_xFhcpDPl/view?usp=sharing",
    },
    {
        screenshots: ["./images/Spice_up.png" , "", "", "", ""],
        project_title: "Recipe Management System Application",
        project_desc: "The Recipe Management System is a software solution designed to assist users in managing and organizing their recipes.",
        tech_stacks: "Java | JPA Hibernate | Mysql",
        github_link: "https://github.com/DeependrYadav/lonely-egg-2821",
        deployed_link: "https://drive.google.com/file/d/1ODOlSqwrFRDrC-ptwzQATd4ZqwXvZeQQ/view?usp=drive_link",
    },
    {
        screenshots: ["./images/Book_My_Bus.png" , "", "", "", ""],
        project_title: "Book My Bus",
        project_desc: "Book my bus (bus ticket reservation system) is an RESTful web service designed to provide customers with a personalized easy-to-utilize user experience for booking and purchasing tickets online.",
        tech_stacks: "Java | Spring Boot | Mysql | Sprnig Data JPA | Maven | HTML | CSS | JS",
        github_link: "https://github.com/DeependrYadav/honest-wing-5796",
        deployed_link: "https://jocular-cactus-c85dda.netlify.app",
    }
];


$(document).ready(() => {
    projects_array.forEach(e => {
        let t = createProjects(e);
        projects
            .append(t);
    })
});

function createProjects(project) {
    let div = document.createElement("div");
    div.setAttribute("class", "project-card");
    div.innerHTML =
        `<div class="project-box">
                    <div class="imgDiv">
                        <img src="${project.screenshots[0]}" alt="">
                    </div>
                    <h2 class="project-title">
                        ${project.project_title}
                    </h2>
                    <p class="project-description">
                        ${project.project_desc}
                    </p>
                    <p class="project-tech-stack">
                        <span>Tech-stack : </span>
                        ${project.tech_stacks}
                    </p>
                    <div>
                        <a href="${project.github_link}" class="project-github-link" target="_blank">
                            <img src="./images/github.svg" alt="">
                        </a>
                        <a href="${project.deployed_link}" class="project-deployed-link" target="_blank">
                            <img src="https://img.icons8.com/ios-glyphs/90/visible--v1.png" alt="visible--v1"/>
                        </a>
                    </div>
                </div>`;
    return div;
}


const skills = [
    {
        image: "./images/java.svg",
        alt: "JAVA",
        name: "Java"
    },
    {
        image: "./images/springBoot.svg",
        alt: "Spring Boot",
        name: "Spring Boot"
    },
    {
        image: "./images/Hibernate.svg",
        alt: "Hibernate",
        name: "Hibernate"
    },
    {
        image: "./images/resApi.svg",
        alt: "Rest APIs",
        name: "Rest APIs"
    },
    {
        image: "./images/Html.svg",
        alt: "HTML 5",
        name: "HTML 5"
    },
    {
        image: "./images/css.svg",
        alt: "CSS 3",
        name: "CSS 3"
    },
    {
        image: "./images/js.svg",
        alt: "JavaScript",
        name: "JavaScript"
    },
    {
        image: "./images/MySql.svg",
        alt: "MySQL",
        name: "MySQL"
    },
    {
        image: "./images/github.svg",
        alt: "GitHub",
        name: "GitHub"
    },
    {
        image: "https://img.icons8.com/glyph-neue/64/json.png",
        alt: "JSON",
        name: "JSON"
    },
    {
        image: "./images/git.svg",
        alt: "Git",
        name: "Git"
    },
    {
        image: "./images/postman.svg",
        alt: "Postman",
        name: "Postman"
    }
];

$(document).ready(createSkills(skills));

function createSkills(skills) {
    let skillsDiv = document.querySelector(".tech-skills");
    skillsDiv.innerHTML = skills.map(e => `
                    <div class="skills-card">
                        <img class="skills-card-img" src="${e.image}" alt="${e.alt}">
                        <p class="skills-card-name">${e.name}</p>
                    </div>
    `).join("");
}



// ------------------------logic for window replace ---------- ///

function resume() {
    window.open("https://drive.google.com/file/d/1hfJN0Lfeday2sddlw7S8b3g5hLVFsJw2/view?usp=drive_link");
}

// logic to blur the background & zoom project screenshots on click 

$(document).ready(() => {
    let originalOverflow = document.body.style.overflow;
    const overlay = document.createElement("div");
    document.querySelectorAll('.imgDiv').forEach((e, i) => {

        e.addEventListener('click', (event) => {
            event.stopPropagation();
            e.style.position = "fixed";
            e.style.zIndex = "1";
            e.style.transform = "translate(-50%, -50%)";
            e.style.top = "50%";
            e.style.left = "50%";
            e.style.width = "80vw";
            e.style.border = "none";

            document
                .body
                .style
                .pointerEvents = "none";

            overlay
                .style
                .display = "flex";

            overlay
                .style
                .position = "fixed";

            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";

            document
                .querySelector('header')
                .style
                .zIndex = 0;

            document
                .querySelectorAll(".imgDiv>img")[i]
                .style.borderRadius = "0px";

            document
                .querySelector('#back-to-top')
                .style
                .zIndex = 0;

            overlay
                .style
                .backgroundColor = "rgba(3, 3, 3, 0.7)"; // White color with 70% opacity

            overlay
                .style
                .backdropFilter = "blur(15px)"; // Apply blur to the entire overlay

            document
                .body
                .style
                .overflow = "hidden";

            document
                .body
                .append(overlay);
        })
    })

    document
        .addEventListener("click", function (event) {
            document
                .querySelectorAll('.imgDiv').forEach((e, i) => {
                    e.style.position = ""; // Reset the position
                    e.style.zIndex = ""; // Reset the z-index
                    e.style.transform = ""; // Reset the transform
                    e.style.top = ""; // Reset the top
                    e.style.left = ""; // Reset the left
                    e.style.width = ""; // Reset the width

                    document
                        .querySelector("body")
                        .style
                        .filter = "";

                    document
                        .body
                        .style
                        .overflow = originalOverflow;

                    overlay
                        .style
                        .display = "none";

                    document
                        .body
                        .style
                        .pointerEvents = "auto";

                    document
                        .querySelector('header')
                        .style
                        .zIndex = 1;
                    document
                        .querySelectorAll(".imgDiv>img")[i]
                        .style
                        .borderRadius = "";
                    document
                        .querySelector('#back-to-top')
                        .style
                        .zIndex = 1;
                });
        });

})

//-- code to redirect to github -- //

$(document).ready(() => {
    const URL = `https://github.com/deependryadav`;

    document
        .querySelectorAll(".redirect_to_github")
        .forEach(e => {
            e.style.cursor = "pointer";
            e.addEventListener('click', () => {
                window.open(URL, "_blank");
            })
        })


})
// -- code to disable right click , view source , inspect -- //

$(document).ready(()=>{
    document
        .addEventListener("contextmenu", (e => e.preventDefault())),
        document
            .onkeydown = function (e) {
                return 123 != event.keyCode && (
                    (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))
                )
            }
})