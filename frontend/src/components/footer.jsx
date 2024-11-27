import "../styles/header-footer.css";
import GitHubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://github.com/YoussefDawod"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={GitHubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/youssef-dawod-203273215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/youssef0d/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={InstagramIcon} alt="Instagram" />
        </a>
      </div>
      <p>&copy; 2024 wurde mit ❤️ erstellt </p>
    </footer>
  );
};

export default Footer;
