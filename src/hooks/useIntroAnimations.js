// src/hooks/useIntroAnimations.js
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export default function useIntroAnimations() {
  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeInOutCubic",
      duration: 800,
      autoplay: false,
    });

    tl.add({
      targets: "#loader",
      opacity: 0,
      duration: 1000,
      begin: () => window.scrollTo(0, 0),
    })
      .add({
        targets: "#preloader",
        opacity: 0,
        complete: () => {
          const preloader = document.querySelector("#preloader");
          if (preloader) {
            preloader.style.visibility = "hidden";
            preloader.style.display = "none";
          }
        },
      })
      .add(
        {
          targets: ".s-header",
          translateY: [-100, 0],
          opacity: [0, 1],
        },
        "-=200"
      )
      .add({
        targets: [".s-intro .text-pretitle", ".s-intro .text-huge-title"],
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(400),
      })
      .add({
        targets: ".circles span",
        keyframes: [
          { opacity: [0, 0.3] },
          {
            opacity: [0.3, 0.1],
            delay: anime.stagger(100, { direction: "reverse" }),
          },
        ],
        delay: anime.stagger(100, { direction: "reverse" }),
      })
      .add({
        targets: ".intro-social li",
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { direction: "reverse" }),
      })
      .add(
        {
          targets: ".intro-scrolldown",
          translateY: [100, 0],
          opacity: [0, 1],
        },
        "-=800"
      );

    if (document.readyState === "complete") {
      tl.play();
    } else {
      window.addEventListener("load", () => {
        tl.play();
      });
    }
  }, []);
}
