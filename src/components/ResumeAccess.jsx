import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaFileAlt, FaFolderOpen } from 'react-icons/fa';
import { resumeMeta } from '../data';

export default function ResumeAccess() {
  return (
    <section className="section-shell section-block reveal" id="resume-access">
      <div className="section-heading">
        <p className="eyebrow">Resume access</p>
        <h2>Open the resume page or jump directly to the resume file.</h2>
      </div>

      <div className="resume-access-grid">
        <article className="premium-card">
          <h3>
            <FaFileAlt className="inline-icon" /> Resume Page
          </h3>
          <p>See the full structured resume inside the portfolio with education, experience, and projects.</p>
          <Link to="/resume" className="button button-secondary">
            Go to Resume Page
          </Link>
        </article>

        <article className="premium-card">
          <h3>
            <FaFolderOpen className="inline-icon" /> Resume Folder File
          </h3>
          <p>Open your uploaded CV from the public resume folder and download the latest document.</p>
          <a href={resumeMeta.resumeFile} target="_blank" rel="noreferrer" className="button button-primary">
            <FaExternalLinkAlt className="inline-icon" />
            Open Resume File
          </a>
        </article>
      </div>
    </section>
  );
}