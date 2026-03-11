import { FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import { onlineWebsites } from '../data';

export default function OnlineWebsites() {
  return (
    <section className="section-shell section-block reveal" id="online-websites">
      <div className="section-heading">
        <p className="eyebrow">Online websites</p>
        <h2>Explore live websites built and deployed online.</h2>
      </div>

      <div className="online-sites-grid">
        {onlineWebsites.map((site) => (
          <article className="premium-card online-site-card" key={site.href}>
            <h3>
              <FaGlobe className="inline-icon" />
              {site.name}
            </h3>
            <p>{site.note}</p>
            <a href={site.href} target="_blank" rel="noreferrer" className="button button-primary">
              <FaExternalLinkAlt className="inline-icon" />
              Visit Website
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
