// src/hooks/useScrollSpy.js
import { useEffect } from "react";

export default function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll(".target-section");

    const navHighlight = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(
          ".main-nav a[href*=" + sectionId + "]"
        );
        if (navLink && navLink.parentNode) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.parentNode.classList.add("current");
          } else {
            navLink.parentNode.classList.remove("current");
          }
        }
      });
    };

    window.addEventListener("scroll", navHighlight);
    // Run once on mount.
    navHighlight();

    return () => window.removeEventListener("scroll", navHighlight);
  }, []);
}
