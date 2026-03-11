import { stats } from '../data';

export default function Stats() {
  return (
    <section className="section-shell section-block reveal" id="stats">
      <div className="section-heading">
        <p className="eyebrow">Snapshot</p>
        <h2>Numbers that frame how I work.</h2>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}