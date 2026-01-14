const projects = [
    {
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    githubLink: "",
    demoLink: "",
    },
    {
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    githubLink: "",
    demoLink: "",
    },
    {
    title: "",
    description: "",
    technologies: ["", "", "", ""],
    githubLink: "",
    demoLink: "",
    }
]

// Renderizar projetos
const projectsGrid = document.querySelector(".projects-grid");
projects.forEach((project) => {
const projectCard = document.createElement("div");
projectCard.className = "project-card";

projectCard.innerHTML = `
    <div class="project-image">
        <i class="fas fa-code"></i>
    </div>
    <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
        ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-links">
        <a href="${project.githubLink}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> Código
        </a>
        ${
            project.demoLink !== "#"
            ? `<a href="${project.demoLink}" target="_blank" class="project-link">
            <i class="fas fa-external-link-alt"></i> Demo
            </a>`
            : ""
        }
        </div>
    </div>
    `;

projectsGrid.appendChild(projectCard);
});