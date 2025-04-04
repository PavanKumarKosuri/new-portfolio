// src/hooks/useViewAnimations.js
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export default function useViewAnimations() {
  useEffect(() => {
    const animateOnView = () => {
      const blocks = document.querySelectorAll("[data-animate-block]");
      const scrollY = window.pageYOffset;
      blocks.forEach((block) => {
        const viewportHeight = window.innerHeight;
        const triggerTop = block.offsetTop + viewportHeight * 0.2 - viewportHeight;
        const blockHeight = block.offsetHeight;
        const blockSpace = triggerTop + blockHeight;
        const inView = scrollY > triggerTop && scrollY <= blockSpace;
        const alreadyAnimated = block.classList.contains("ss-animated");

        if (inView && !alreadyAnimated) {
          anime({
            targets: block.querySelectorAll("[data-animate-el]"),
            opacity: [0, 1],
            translateY: [100, 0],
            delay: anime.stagger(400, { start: 200 }),
            duration: 800,
            easing: "easeInOutCubic",
            begin: () => {
              block.classList.add("ss-animated");
            },
          });
        }
      });
    };

    window.addEventListener("scroll", animateOnView);
    // Run once on mount in case some elements are already in view.
    animateOnView();

    return () => window.removeEventListener("scroll", animateOnView);
  }, []);
}
