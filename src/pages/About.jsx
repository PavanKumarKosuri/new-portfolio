import React from "react";
import aboutPhoto from "../assets/images/about-photo.jpg";

const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row about-info wide" data-animate-block>
        <div className="column lg-6 md-12 about-info__pic-block">
          <img
            src={aboutPhoto}
            alt="about-pic"
            className="about-info__pic"
            data-animate-el
          />
        </div>

        <div className="column lg-6 md-12">
          <div className="about-info__text">
            <h2 className="text-pretitle with-line" data-animate-el>
              About
            </h2>
            <p className="attention-getter" data-animate-el>
              Full-Stack Developer with nearly 4 years of experience building
              secure, scalable web applications in React.js and Node.js. Adept
              at using AI-powered coding tools to rapidly prototype solutions,
              ensure clean code, and maintain best practices...
            </p>
            <a
              href="/resume.pdf"
              className="btn btn--medium u-fullwidth"
              data-animate-el
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Tech Toolbox */}
      <div className="row about-expertise" data-animate-block>
        <div className="column lg-12">
          <h2 className="text-pretitle" data-animate-el>
            Tech Toolbox
          </h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JWT</li>
                <li>WebSockets</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Databases</h3>
              <ul>
                <li>MySQL</li>
                <li>Azure Cosmos DB</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>DevOps & Cloud</h3>
              <ul>
                <li>Azure</li>
                <li>CI/CD</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Integrations & Security</h3>
              <ul>
                <li>Razorpay Integration</li>
                <li>API Integration</li>
                <li>OWASP Top 10</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Tools & Version Control</h3>
              <ul>
                <li>Git/GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience + Education Timelines */}
      <div className="row about-timelines" data-animate-block>
        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle" data-animate-el>
            Experience
          </h2>
          <div className="timeline" data-animate-el>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Infosys Limited</h4>
                <h5 className="timeline__meta">Full-Stack Developer</h5>
                <p className="timeline__timeframe">April 2022 - Present</p>
              </div>
              <div className="timeline__desc">
                <p>
                  Developed responsive web interfaces using React.js, Node.js,
                  integrated APIs, implemented security measures, and
                  collaborated with cross-functional teams...
                </p>
              </div>
            </div>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Avantel Limited</h4>
                <h5 className="timeline__meta">Web Developer Apprentice</h5>
                <p className="timeline__timeframe">Jan 2021 – Jan 2022</p>
              </div>
              <div className="timeline__desc">
                <p>
                  Enhanced front-end interfaces for 5kW UHF and 1kW HF units,
                  improved UI/UX, and mentored the production team...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle" data-animate-el>
            Education
          </h2>
          <div className="timeline" data-animate-el>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">BITS Vizag (JNTU-K)</h4>
                <h5 className="timeline__meta">
                  Bachelor of Technology in Electronics & Comm.
                </h5>
                <p className="timeline__timeframe">2020</p>
              </div>
              <div className="timeline__desc">
                <p>
                  Graduated with a B.Tech. in Electronics & Communication
                  Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
