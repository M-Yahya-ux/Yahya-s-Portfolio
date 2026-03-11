import { expertise, profile, softSkills } from '../data';

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy reveal visible">
        <p className="eyebrow">{profile.title}</p>
        <h1>
          {profile.name}
        </h1>
        <p className="hero-location">{profile.location}</p>
        <p className="hero-text" id="about">
          {profile.about}
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore projects
          </a>
          <a className="button button-secondary" href="#socials">
            Contact me
          </a>
        </div>

        <div className="skills-group">
          <p className="skills-label">Expertise</p>
          <ul className="hero-highlights" aria-label="Technical expertise">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="skills-group">
          <p className="skills-label">Soft skills</p>
          <ul className="hero-highlights" aria-label="Soft skills">
            {softSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-visual reveal visible">
        <div className="scene-3d" aria-hidden="true">
          <div className="scene-glow scene-glow-one" />
          <div className="scene-glow scene-glow-two" />
          <div className="scene-grid" />
          <div className="scene-platform" />
          <div className="scene-ring scene-ring-one" />
          <div className="scene-ring scene-ring-two" />
          <div className="scene-shimmer scene-shimmer-one" />
          <div className="scene-shimmer scene-shimmer-two" />

          <div className="scene-column scene-column-left" />
          <div className="scene-column scene-column-right" />
          <div className="scene-prism scene-prism-one" />
          <div className="scene-prism scene-prism-two" />
          <div className="scene-pillar scene-pillar-left" />
          <div className="scene-pillar scene-pillar-right" />

          <div className="scene-card scene-card-back">
            <span>Frontend</span>
            <strong>Interactive UI</strong>
          </div>

          <div className="scene-card scene-card-main">
            <p className="scene-kicker">Developer Stack</p>
            <strong>{profile.title}</strong>
            <div className="scene-bars">
              {expertise.slice(0, 3).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="orbit orbit-one">
            <span>React</span>
          </div>
          <div className="orbit orbit-two">
            <span>JavaScript</span>
          </div>
          <div className="orbit orbit-three">
            <span>Creative UI</span>
          </div>

          <div className="glass-chip glass-chip-one">
            <span>Responsive Systems</span>
          </div>
          <div className="glass-chip glass-chip-two">
            <span>Motion Layers</span>
          </div>
        </div>
      </div>
    </section>
  );
}