import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="row contact-content wide">
        <div className="column lg-12">
          <h2 className="text-pretitle">Say Hello</h2>
          <p className="h1">Let’s connect! Feel free to reach out any time.</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:kosuri.pavank@gmail.com">kosuri.pavank@gmail.com</a>
          </p>
          <p>
            Or drop me a message on{" "}
            <a
              href="https://www.linkedin.com/in/pavan-kumar-kosuri"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
