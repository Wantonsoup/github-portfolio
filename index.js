/* -----------------------------------------
  Loading screen
 ---------------------------------------- */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("loader--hidden");
  }, 1800);

  setTimeout(() => {
    loader.remove();
  }, 3200);
});

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
    tech: "Unreal Engine / Blueprints / C++ /Game Jam",
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
  },
  "real-time-engine": {
    title: "Real-Time Engine",
    tech: "C++ / DirectX 11",
    media: { type: "image", src: "./images/project5_RealTime.png", alt: "Real-Time Engine preview" },
    video: { type: "youtube", src: "https://www.youtube.com/embed/TZVsBlPRazc" },
    introduction: "A custom real-time rendering engine built from scratch using C++ and DirectX 11.",
    features: [
      "Real-time 3D rendering capabilities",
      "Basic lighting and shading models",
      "Scene management and object rendering",
      "PBR materials and basic post-processing effects",
      "User input for camera control and scene interaction",
      "OBJ model and texture loading",
      "GPU instancing for efficient rendering of multiple objects",
      "FPS counter and frustum culling for performance optimization"
    ],
    responsibilities: [
      "Designed and implemented the core rendering pipeline",
      "Implemented support for basic lighting and shading models",
      "Built scene management and object rendering systems",
      "Implemented support for PBR materials and basic post-processing effects",
      "Implemented user input handling for camera control and scene interaction",
      "Implemented support for loading OBJ models and textures for rendering",
      "Implemented GPU instancing for efficient rendering of multiple objects",
      "Implemented an FPS counter and frustum culling for performance optimization"
    ],
    learned: [
      "Gained a deeper understanding of real-time rendering concepts and techniques",
      "Improved my C++ programming skills and familiarity with DirectX 11",
      "Learned how to design and implement a basic rendering engine from scratch",
      "Gained experience with performance optimization techniques for real-time applications"
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/Wantonsoup/GraphicProgEngine" }
    ]
  },
  "pub-crawl": {
    title: "Pub Crawl",
    tech: "C++ / Unreal Engine 5.6 / Blueprints / Game Jam",
    media: { type: "image", src: "./images/project6_PubCrawl.png", alt: "Pub Crawl preview" },
    video: { type: "youtube", src: "https://www.youtube.com/embed/_NWVSbVefsA" },
    introduction: "Pub Crawl is a comedy rage-game about staying on your feet after a night out. The player must make it back to their house before the drinking catches up to them in 2 minutes, fighting for control over their own legs.",
    features: [
      "Drunk man 3rd person gameplay with physics mechanics",
      "Navigation and interaction with a pub environment",
      "Low poly art style and humorous tone",
      "Created a custom character controller using a sphere to simulate drunken movement and physics interactions",
      "Team-built gameplay systems using Unreal Engine"
    ],
    responsibilities: [
      "Designed the core gameplay loop and mechanics",
      "Implemented the main character movement and physics interactions by using a sphere",
      "Worked on the navigation and interaction systems",
      "Supported other programmers with problem-solving and debugging",
      "Used Git for team version control and coordinated with artists and designers to ensure smooth integration of assets and mechanics",
      "Led the production process, helping to manage scope and ensure we met our game jam deadline"
    ],
    learned: [
      "Learned how to work effectively under game jam time pressure",
      "Improved communication and coordination with artists, designers, and programmers",
      "Gained more experience designing and implementing physics-based gameplay mechanics in Unreal Engine",
      "Learned how to lead a small team and manage scope during a short development cycle",
      
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/Wantonsoup/wobblyworker" }
    ]
  },
  "portfolio": {
    title: "Portfolio Website",
    tech: "HTML / CSS / JavaScript / AI assistance",
    media: { type: "image", src: "./images/project7_Portfolio.png", alt: "Portfolio Website preview" },
    introduction: "This is my personal portfolio website, showcasing my projects and skills as a game programmer. First project on HTML, CSS, and JavaScript with AI design assistance, built to create a professional online presence and share my work with potential employers.",
    features: [
      "Responsive design for desktop and mobile",
      "Fixed navigation bar with smooth scrolling",
      "Interactive project cards with modal popups for details",
      "CSS animations, transitions, gradients, and hover effects for visual polish",
      "AI-assisted design and content creation for a more professional presentation"
    ],
    responsibilities: [
      "Designed the overall layout and structure of the website",
      "Implemented the responsive design using HTML and CSS",
      "Built the interactive project cards and modal popup functionality using JavaScript",
      "Added CSS animations, transitions, gradients, and hover effects for visual polish",
      "Tested the website on different screen sizes and devices to ensure a good user experience",
      "Used AI to teach and assist with design choices, content creation, and code structure to create a more polished and professional portfolio website"
    ],
    learned: [
      "Structured a responsive website using HTML, CSS, and JavaScript",
      "Created a fixed navigation bar for better user experience",
      "Built interactive project cards and modal popups",
      "Used CSS animations, transitions, gradients, and hover effects",
      "Made a website more mobile-friendly",
      "Presented game programming projects clearly and professionally",
      "Understood how small design choices affect readability, usability, and first impressions"
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/Wantonsoup/github-portfolio" }
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

  if (project.video?.type === "youtube") {
    mediaContainer.innerHTML = `
      <iframe
        src="${project.video.src}"
        title="${project.title} video demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  } else if (project.media.type === "video") {
    mediaContainer.innerHTML = `
      <video controls muted playsinline class="project-modal__video">
        <source src="${project.media.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    mediaContainer.innerHTML = `
      <img src="${project.media.src}" alt="${project.media.alt}" />
    `;
  }

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
