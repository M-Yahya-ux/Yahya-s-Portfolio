import { FaAtom, FaCube, FaLayerGroup, FaReact } from 'react-icons/fa';

export default function LoadingScreen({ isLeaving }) {
  return (
    <div className={`loading-screen${isLeaving ? ' loading-screen-leave' : ''}`} aria-hidden="true">
      <div className="loading-scene">
        <div className="loading-orb loading-orb-one" />
        <div className="loading-orb loading-orb-two" />
        <div className="loading-orb loading-orb-three" />
        <div className="loading-ring loading-ring-outer" />
        <div className="loading-ring loading-ring-inner" />
        <div className="loading-ring loading-ring-mid" />
        <div className="loading-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="loading-core-card loading-core-card-back">
          <span className="loading-icon-line">
            <FaCube /> Premium Build
          </span>
          <span className="loading-icon-line">
            <FaAtom /> Glass Motion
          </span>
          <span>Premium Build</span>
          <strong>Glass Interface</strong>
        </div>

        <div className="loading-core-card loading-core-card-front">
          <p className="loading-kicker">Loading portfolio</p>
          <strong>
            <FaReact className="inline-icon" /> Muhammad Yahya
          </strong>
          <div className="loading-pill-row">
            <span>3D Motion</span>
            <span>Front-End</span>
            <span>Luxury UI</span>
          </div>
          <div className="loading-progress" role="presentation">
            <div className="loading-progress-track">
              <div className="loading-progress-fill" />
            </div>
            <p>
              <FaLayerGroup className="inline-icon" /> Initializing layers and interactions...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}