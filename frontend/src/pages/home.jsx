import { Link } from "react-router-dom";
import "../styles/home.css";
import { useState, useEffect } from "react";
import { projectsData } from "./projects";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const imagesWithTitles = projectsData.flatMap((project) =>
    project.images.map((image) => ({ image, title: project.title }))
  );

  const changeImage = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(false);
    }, 1000); // Zeit für den Fade-Out-Effekt
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % imagesWithTitles.length;
      changeImage(nextIndex);
    }, 5000); // Wechselt alle 3 Sekunden
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handlePrevClick = () => {
    const prevIndex =
      (currentImageIndex - 1 + imagesWithTitles.length) % imagesWithTitles.length;
    changeImage(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % imagesWithTitles.length;
    changeImage(nextIndex);
  };

  return (
    <div className="home">
      <div className="navigation-icons">
        <a href="#developer">
          <svg
            id="profile"
            className="icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
          </svg>
        </a>
        <a href="#knowledge-content">
          <svg
            id="education"
            className="icon"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
          </svg>
        </a>
        <a href="#projects-container">
          <svg
            id="projects"
            className="icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z" />
          </svg>
        </a>
      </div>
      <div id="developer" className="developer">
        <div className="developer-ti-sub">
          <h1 className="developer-title">Youssef Dawod</h1>
          <h2 className="developer-subtitle">Full Stack Webentwickler</h2>
        </div>
        <div className="developer-description">
          <p>
            Entwicklung moderner Webseiten mit den neuesten Technologien und
            Tolls
          </p>
          <p>
            Kreative Ansätze treffen auf innovative Technik, um digitale
            Projekte zu realisieren
          </p>
          <p>
            Klare Strukturen und durchdachte Designs schaffen eine harmonische
            Verbindung aus Ästhetik und Funktionalität
          </p>
          <p>
            Jedes Projekt wird mit zuverlässigen Technologien umgesetzt, um ein
            inspirierendes und zukunftssicheres digitales Erlebnis zu schaffen
          </p>
          <p>
            Visionen werden greifbar in Form moderner und einzigartiger
            Webseiten
          </p>
        </div>
      </div>
      <div id="knowledge-content" className="knowledge-content">
        <h3>Fachkenntnisse:</h3>
        <div className="knowledge-list">
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/html-5.svg"
              alt="HTML5"
            />
            HTML5
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/css-3.svg"
              alt="CSS3"
            />
            CSS3
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/scss.svg"
              alt="SASS"
            />
            SASS
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/tailwind-css.svg"
              alt="Tailwind"
            />
            Tailwind
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/bootstrap.svg"
              alt="Bootstrap"
            />
            Bootstrap
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/javascript.svg"
              alt="JavaScript"
            />
            JavaScript
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/react.svg"
              alt="React"
            />
            React
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/vite.svg"
              alt="Vite"
            />
            Vite
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/node-js.svg"
              alt="Node.js"
            />
            Node.js
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/mongodb.svg"
              alt="MongoDB"
            />
            MongoDB
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/rest-api.svg"
              alt="Rest API"
            />
            Rest API
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/git.svg"
              alt="Git"
            />
            Git
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/terminal.svg"
              alt="Terminal"
            />
            Terminal
          </div>
          <div className="knowledge">
            <img
              className="knowledge-img"
              src="/assets/icons/corel-draw.svg"
              alt="Corel Draw"
            />
            Corel Draw
          </div>
        </div>
      </div>
      <div id="projects-container" className="projects-container">
        <h3>Projekte</h3>
        {imagesWithTitles.length > 0 && (
          <div className="project-image-container">
            <img
              src={imagesWithTitles[currentImageIndex].image}
              alt="Projektbild"
              className={`project-image ${fade ? "fade-out" : "fade-in"}`}
            />
            <div className="container-button">
              <button
                className="nav-button prev-button"
                onClick={handlePrevClick}
              >
                {"<"}
              </button>
              <div className="project-title">
                {imagesWithTitles[currentImageIndex].title}
              </div>
              <button
                className="nav-button next-button"
                onClick={handleNextClick}
              >
                {">"}
              </button>
            </div>
            <Link to="/projects">Alle Projekte zeigen</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;