/* eslint-disable react/prop-types */
import React, { useState } from "react";
import regis from "../assets/images/portfolio/regis.jpg";
import superAdmin from "../assets/images/portfolio/superAdmin.jpg";
import hr from "../assets/images/portfolio/hr.png";
import phlebo from "../assets/images/portfolio/phlebo.jpg";
import manager from "../assets/images/portfolio/managerDashboard.jpg";
import vendor from "../assets/images/portfolio/vendor.jpg";

// Modal component to display project details and login info
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside content
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        {/* Conditionally render login info */}
        {project.loginType === "credentials" && project.credentials ? (
          <>
            <p>
              <strong>Username:</strong> {project.credentials.username}
            </p>
            <p>
              <strong>Password:</strong> {project.credentials.password}
            </p>
          </>
        ) : project.loginType === "otp" && project.mobile ? (
          <p>
            <strong>Login via OTP:</strong> Enter the OTP sent to{" "}
            {project.mobile}
          </p>
        ) : (
          <p>No login credentials required.</p>
        )}
        <a className="btn" href={project.link} target="_blank" rel="noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  );
};

const Works = () => {
  // Array of projects with different login methods
  const projects = [
    {
      id: 1,
      title: "Employee Registration Portal",
      image: regis,
      link: "https://ahcuserreg.vercel.app/#/home-page/1/CLT-85B8CAEA",
      loginType: "otp",
      mobile: "your number",
    },
    {
      id: 2,
      title: "Super Admin Dashboard",
      image: superAdmin,
      link: "https://ahc-pi.vercel.app/#/",
      loginType: "credentials",
      credentials: { username: "admin", password: "admin123" },
    },
    {
      id: 3,
      title: "HR Dashboard",
      image: hr,
      link: "https://ahchrdashboard.vercel.app/#/",
      loginType: "credentials",
      credentials: { username: "hr", password: "hr123" },
    },
    {
      id: 4,
      title: "Phlebo Dashboard",
      image: phlebo,
      link: "https://ahcphlebo.vercel.app/#/",
      loginType: "credentials",
      credentials: { username: "phlebo", password: "phlebo123" },
    },
    {
      id: 5,
      title: "Manager Dashboard",
      image: manager,
      link: "https://ahcmanager.vercel.app/#/",
      loginType: "credentials",
      credentials: { username: "manager", password: "manager123" },
    },
    {
      id: 6,
      title: "Vendor Dashboard",
      image: vendor,
      link: "https://ahcvendor.vercel.app/#/",
      loginType: "credentials",
      credentials: { username: "vendor", password: "vendor123" },
    },
  ];

  // State to store the selected project for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Handler for clicking on a project item
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Handler to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="works" className="s-works target-section">
      <div className="row works-portfolio">
        <div className="column lg-12" data-animate-block>
          <h2 className="text-pretitle" data-animate-el>
            Recent Works
          </h2>
          <p className="h1" data-animate-el>
            Here are some of my favorite projects I have done lately. Feel free
            to check them out.
          </p>
          <ul className="folio-list row block-lg-one-half block-stack-on-1000">
            {projects.map((project) => (
              <li
                key={project.id}
                className="folio-list__item column"
                data-animate-el
                onClick={() => handleProjectClick(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="folio-list__item-link">
                  <div className="folio-list__item-pic">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="folio-list__item-text">
                    <div className="folio-list__item-cat">Website</div>
                    <div className="folio-list__item-title">
                      {project.title}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Works;
