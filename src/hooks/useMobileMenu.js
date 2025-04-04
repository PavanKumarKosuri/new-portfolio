// src/hooks/useMobileMenu.js
import { useEffect } from "react";

export default function useMobileMenu() {
  useEffect(() => {
    const toggleButton = document.querySelector(".mobile-menu-toggle");
    const mainNavWrap = document.querySelector(".main-nav-wrap");
    const siteBody = document.querySelector("body");

    const mobileMenuHandler = (event) => {
      event.preventDefault();
      toggleButton.classList.toggle("is-clicked");
      siteBody.classList.toggle("menu-is-open");
    };

    if (toggleButton && mainNavWrap) {
      toggleButton.addEventListener("click", mobileMenuHandler);

      // Collapse mobile menu when any nav link is clicked (on small screens)
      const navLinks = mainNavWrap.querySelectorAll(".main-nav a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (window.matchMedia("(max-width: 800px)").matches) {
            toggleButton.classList.remove("is-clicked");
            siteBody.classList.remove("menu-is-open");
          }
        });
      });
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", mobileMenuHandler);
      }
    };
  }, []);
}
