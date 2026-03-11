import { education, experience, expertise, projects, resumeMeta, softSkills } from '../data';
import { FaDownload } from 'react-icons/fa';

export default function ResumePage() {
  return (
    <section className="section-shell resume-page reveal visible" id="resume">
      <div className="resume-header premium-card">
        <div>
          <p className="eyebrow">Resume</p>
          <h1>{resumeMeta.fullName}</h1>
          <p className="resume-contact-line">
            {resumeMeta.location} | {resumeMeta.phone} | {resumeMeta.email}
          </p>
          <a href={`https://${resumeMeta.linkedin}`} target="_blank" rel="noreferrer" className="resume-link">
            {resumeMeta.linkedin}
          </a>
        </div>
        <a className="button button-primary" href={resumeMeta.resumeFile} download>
          <FaDownload className="inline-icon" />
          Download Resume
        </a>
      </div>

      <div className="resume-grid">
        <article className="premium-card">
          <h2>Education</h2>
          <div className="resume-stack">
            {education.map((item) => (
              <div key={item.institution} className="resume-block">
                <strong>{item.degree}</strong>
                <p>{item.institution}</p>
                <span>{item.period}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="premium-card">
          <h2>Technical Skills</h2>
          <ul className="resume-pill-list">
            {expertise.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="premium-card">
          <h2>Soft Skills</h2>
          <ul className="resume-pill-list">
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </div>

      <article className="premium-card resume-wide">
        <h2>Professional Experience</h2>
        <div className="resume-stack">
          {experience.map((item) => (
            <div key={`${item.company}-${item.period}`} className="resume-block">
              <div className="resume-row">
                <strong>{item.role}</strong>
                <span>{item.period}</span>
              </div>
              <p>{item.company}</p>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="premium-card resume-wide">
        <h2>Projects</h2>
        <div className="resume-stack">
          {projects.map((project) => (
            <div key={project.title} className="resume-block">
              <div className="resume-row">
                <strong>{project.title}</strong>
                <span>{project.category}</span>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}