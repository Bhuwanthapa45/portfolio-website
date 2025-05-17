import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/ProjOne.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <a href="https://code-meet-livid.vercel.app/">
              <h2>
                An Online Collabrative Coding and Intervewing Platform With Built in Code Editor and Real time Video Sharing and Calling. 
              </h2>
              </a>
             
              <p className="text-white-50 md:text-xl">
                An app built in Next Js with Clerk Authentication.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/ProjTwo.png"
                  alt="Library Management Platform"
                />
              </div>
              <a href="https://chatverse-app-v1.onrender.com/"> <h2>Chat-Verse Real time Messaging App</h2></a>
             
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/ProjThree.png" alt="YC Directory App" />
              </div>
              <a href="https://f1gpt-eight.vercel.app/">
              <h2>F1GPT Langchain RAG AI Application</h2>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;