import React from "react";

const Home = () => {
  return (
    <main className="s-content">
      <div id="preloader">
        <div id="loader"></div>
      </div>

      <section id="intro" className="s-intro target-section">
        <div className="row intro-content wide">
          <div className="column">
            <div className="text-pretitle with-line">Hello</div>
            <h1 className="text-huge-title">
              I am Pavan,
              <br />
              a full stack developer
              <br />
              in Infosys.
            </h1>
          </div>

          <ul className="intro-social">
            <li>
              <a
                href="https://github.com/PavanKumarKosuri"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pavan-kumar-kosuri"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kosuri_pavankumar"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* <a href="#about" className="intro-scrolldown smoothscroll">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
          </svg>
        </a> */}
        
      </section>
    </main>
  );
};

export default Home;
