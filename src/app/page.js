
import { Mail, Code2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Chandan.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section className="hero" id="home">
        <p className="welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>V Chandan</span>
        </h1>

        <h2>
          Computer Science Engineering Student
        </h2>

        <p className="description">
          Interested in Web Development, Programming,
          and Cybersecurity. I enjoy building practical
          projects and learning new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://github.com/CHANDAN-cybe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={24} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:cv457279@gmail.com">
            <Mail size={24} />
            Email
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student
          with a Diploma background in Computer Science.
          I am passionate about technology, software
          development, and cybersecurity.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>CampusFix</h3>

          <p>
            A college complaint management platform
            designed to simplify campus issue reporting.
          </p>

          <p>
            Technology: Next.js, React, JavaScript, CSS
          </p>

          <a
            href="https://github.com/CHANDAN-cybe/campusfix-mvp"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <p>Email: cv457279@gmail.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 V Chandan. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
