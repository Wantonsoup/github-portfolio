/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


/* -----------------------------------------
  Project detail modal
 ---------------------------------------- */

const projectDetails = {
  "pong": {
    title: "PONG",
    tech: "C++ / SFML 3.0",
    media: { type: "image", src: "./images/project1Pong.gif", alt: "PONG gameplay demo" },
    introduction: "A classic Pong clone built in C++ using SFML 3.0. The project focuses on building a complete arcade-style gameplay loop with responsive controls, collision detection, ball movement, and score tracking.",
    features: [
      "Player paddle movement and input handling",
      "Ball collision against paddles and screen bounds",
      "Scoreboard UI and win/loss feedback",
      "Game reset flow after each point"
    ],
    responsibilities: [
      "Programmed the main gameplay loop",
      "Implemented collision detection and ball response",
      "Created the scoring logic and UI feedback",
      "Tested and tuned movement speed for better game feel"
    ],
    learned: [
      "Improved my understanding of C++ game loops",
      "Learned how to structure a small SFML project",
      "Practised debugging collision and movement issues",
      "Developed a better sense of game feel and iteration"
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/Wantonsoup/SFMLprojectPONG" }
    ]
  },
  "horror-circus": {
    title: "Horror Circus",
    tech: "Unreal Engine / Blueprints / C++ / Team Game Jam",
    media: { type: "image", src: "./images/project2SimonSays.gif", alt: "Horror Circus gameplay demo" },
    introduction: "A 5-day game jam project created by a team of 7. I worked as a gameplay programmer, helping build mechanics, solve bugs, and support the team during a short production deadline.",
    features: [
      "Horror-themed first-person gameplay",
      "Simon Says gameplay sequence",
      "Level-based progression and interactive moments",
      "Team-built gameplay systems using Unreal Engine"
    ],
    responsibilities: [
      "Contributed to gameplay mechanics and debugging",
      "Helped with the Simon Says gameplay section",
      "Supported other programmers with problem-solving",
      "Used Git for team version control"
    ],
    learned: [
      "Learned how to work effectively under game jam time pressure",
      "Improved communication with artists, designers, and programmers",
      "Gained more experience debugging Unreal Engine gameplay issues",
      "Practised balancing scope with limited development time"
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/Lewis-Craven/GameJam2.1" }
    ]
  },
  "stealth-game": {
    title: "First-Person Stealth Game",
    tech: "Unreal Engine 5 / C++ / Blueprints",
    media: { type: "image", src: "./images/project3_FPS.png", alt: "First-person stealth game preview" },
    introduction: "A first-person stealth prototype made in Unreal Engine 5 using a hybrid C++ and Blueprint workflow. The project focuses on AI behaviour, stealth mechanics, and player interaction systems.",
    features: [
      "AI perception and enemy awareness",
      "Behaviour trees and EQS-based decision making",
      "Crouching, hiding, and noise generation mechanics",
      "Player takedown interaction system"
    ],
    responsibilities: [
      "Built and connected stealth gameplay mechanics",
      "Worked on enemy AI behaviour and perception",
      "Integrated Blueprint logic with C++ systems",
      "Tested stealth scenarios and tuned player feedback"
    ],
    learned: [
      "Deepened my knowledge of Unreal Engine AI tools",
      "Learned how perception, EQS, and behaviour trees work together",
      "Improved my ability to combine C++ and Blueprints cleanly",
      "Practised designing mechanics that create readable player feedback"
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/Wantonsoup/FPS_Assignment" }
    ]
  },
  "library-management": {
    title: "Library Management System",
    tech: "Java",
    media: { type: "image", src: "./images/project4Java.png", alt: "Library Management System preview" },
    introduction: "A Java library management application built to practise object-oriented programming, data handling, and application structure outside of game development.",
    features: [
      "Book and record management",
      "Structured Java classes and methods",
      "Simple user flow for library operations",
      "Clear separation of responsibilities between classes"
    ],
    responsibilities: [
      "Designed the basic application structure",
      "Implemented the main Java functionality",
      "Tested core user flows and fixed logic issues",
      "Organised the project for readability and maintainability"
    ],
    learned: [
      "Improved my Java and object-oriented programming skills",
      "Practised planning class responsibilities",
      "Learned how to keep non-game projects structured",
      "Built confidence in debugging application logic"
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/Wantonsoup/Libary-management-Java" }
    ]
  }
};

const projectModal = document.querySelector("#project-modal");
const projectModalContent = document.querySelector(".project-modal__content");
const projectCards = document.querySelectorAll(".project-card");
let previouslyFocusedElement = null;

const createListItems = (items) => items.map((item) => `<li>${item}</li>`).join("");

const openProjectModal = (projectId) => {
  const project = projectDetails[projectId];
  if (!project || !projectModal) return;

  previouslyFocusedElement = document.activeElement;

  document.querySelector("#project-modal-title").textContent = project.title;
  document.querySelector("#project-modal-tech").textContent = project.tech;
  document.querySelector("#project-modal-intro").textContent = project.introduction;
  document.querySelector("#project-modal-features").innerHTML = createListItems(project.features);
  document.querySelector("#project-modal-responsibilities").innerHTML = createListItems(project.responsibilities);
  document.querySelector("#project-modal-learned").innerHTML = createListItems(project.learned);

  const mediaContainer = document.querySelector("#project-modal-media");
  mediaContainer.innerHTML = project.media.type === "video"
    ? `<iframe src="${project.media.src}" title="${project.title} video demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    : `<img src="${project.media.src}" alt="${project.media.alt}" />`;

  document.querySelector("#project-modal-links").innerHTML = project.links
    .map((link) => `<a class="btn" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
    .join("");

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-is-open");
  projectModalContent.focus();
};

const closeProjectModal = () => {
  if (!projectModal) return;

  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-is-open");

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
};

projectCards.forEach((card) => {
  card.addEventListener("click", () => openProjectModal(card.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal?.classList.contains("is-open")) {
    closeProjectModal();
  }
});
