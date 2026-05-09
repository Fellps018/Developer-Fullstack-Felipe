const projects = [
    {
    icon: "fa-solid fa-x",
    image: "",
    title: "Sem Projetos",
    description: "Esse card são para os projetos disponíveis",
    technologies: ["###", "###", "###", "###"],
    githubLink: "",
    demoLink: "",
    },
      {
    icon: "fa-solid fa-x",
    title: "Sem Projetos",
    description: "Esse card são para os projetos disponíveis",
    technologies: ["###", "###", "###", "###"],
    githubLink: "",
    demoLink: "",
    },
      {
    icon: "fa-solid fa-x",
    title: "Sem Projetos",
    description: "Esse card são para os projetos disponíveis",
    technologies: ["###", "###", "###", "###"],
    githubLink: "",
    demoLink: "",
    }
]

const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="card-header">
            <img src={project.image} className="project-image"/>
            <div className="project-icon">
              <i className={project.icon}></i>
            </div>
            <div className="project-title-wrapper">
              <h3 className="project-title">{project.title}</h3>
            </div>
          </div>
          
          <p className="project-description">{project.description}</p>
          
          {}
          <div className="project-tech">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="project-divider"></div>
          
          <div className="project-footer">
            <span className="project-type">Web App</span>
            <div className="project-links">
              <a 
                href={project.githubLink} 
                className="project-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href={project.demoLink} 
                className="project-link"
                aria-label="Demo"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;