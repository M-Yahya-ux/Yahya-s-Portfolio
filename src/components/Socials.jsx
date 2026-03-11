import { socials } from '../data';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const socialIcons = {
  Email: FaEnvelope,
  LinkedIn: FaLinkedin,
  Phone: FaPhone,
};

export default function Socials() {
  return (
    <section className="section-shell section-block reveal" id="socials">
      <div className="section-heading">
        <p className="eyebrow">Social links</p>
        <h2>Reach out where you already work.</h2>
      </div>

      <div className="social-grid">
        {socials.map((social) => {
          const Icon = socialIcons[social.name];

          return (
            <a
              className="social-card"
              href={social.href}
              key={social.name}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <div>
                <p className="social-label">
                  {Icon ? <Icon className="inline-icon" /> : null}
                  {social.name}
                </p>
                <strong>{social.handle}</strong>
              </div>
              <span>{social.note}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}