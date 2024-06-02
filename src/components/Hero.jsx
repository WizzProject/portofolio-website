import heroImg from "../assets/images/marvin-profile-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-description" style={{ maxWidth: "600px" }}>
        <h1 style={{ margin: "0 auto" }}>
          {`Hi, I'm `}
          <span style={{ color: "greenyellow" }}>Marvin</span>
        </h1>
        <h2>Full-Stack Software Engineer</h2>
        <p style={{ marginBottom: "30px", width: "350px" }}>
          With a passion for developing modern web apps and a proven track
          record in Full-Stack Web Development.
        </p>
        <div className="link-wrapper">
          <a
            href="https://www.instagram.com/marvintan__/"
            target="_blank"
            className="iconBrand">
            <FontAwesomeIcon icon={faInstagram} className="iconBrand" />
          </a>
          <a
            href="https://github.com/WizzProject/"
            target="_blank"
            className="iconBrand">
            <FontAwesomeIcon icon={faGithub} className="iconBrand" />
          </a>
          <a
            href="https://www.linkedin.com/in/marvin-joseph-manuel-setyawan/"
            target="_blank"
            className="iconBrand">
            <FontAwesomeIcon icon={faLinkedin} className="iconBrand" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImg}
          alt="Profile picture of Marvin Joseph"
          style={{ borderRadius: "50%", width: "360", height: "360" }}
        />
      </div>
    </section>
  );
}

export default Hero;
