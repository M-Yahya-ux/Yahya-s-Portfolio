import { projects } from '../data';

export default function Projects() {
  return (
    <section className="section-shell section-block reveal" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected projects</p>
        <h2>Work shaped around outcomes, not just screens.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-meta">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{project.category}</p>
            </div>

            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <ul className="stack-list" aria-label={`${project.title} stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href={project.link} className="project-link">
              View case study
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}