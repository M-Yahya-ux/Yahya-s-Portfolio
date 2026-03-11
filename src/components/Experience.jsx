import { experience } from '../data';

export default function Experience() {
  return (
    <section className="section-shell section-block reveal" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Professional experience</p>
        <h2>Hands-on product work across web and mobile environments.</h2>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.role}`}>
            <div className="experience-top">
              <h3>{item.role}</h3>
              <span>{item.period}</span>
            </div>
            <p className="experience-company">{item.company}</p>
            <ul className="experience-points">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}