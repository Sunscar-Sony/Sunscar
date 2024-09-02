import { useEffect, useRef } from "react";
import "./Project.css";

const Project = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight * 0.8) {
        section.classList.add("project-reveal");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="project-section" ref={sectionRef}>
      <div className="project-container">
        <h1 className="project-main-heading">Our Projects</h1>
        <p className="project-section-content">
          Explore our innovative projects and see how we turn ideas into
          reality. Each project showcases our commitment to excellence and
          creativity.
        </p>
        <div className="project-cards-container">
          <div className="project-card">
            <img
              src="path/to/image1.jpg"
              alt="Project 1"
              className="project-card-image"
            />
            <h2 className="project-card-heading">Project 1</h2>
            <p className="project-card-content">
              Description of Project 1. Highlighting key features and
              achievements.
            </p>
            <div className="card-button-wrap">
              <button className="custom-button">Learn More</button>
            </div>
          </div>
          <div className="project-card">
            <img
              src="path/to/image2.jpg"
              alt="Project 2"
              className="project-card-image"
            />
            <h2 className="project-card-heading">Project 2</h2>
            <p className="project-card-content">
              Description of Project 2. Emphasizing innovative solutions and
              impact.
            </p>
            <div className="card-button-wrap">
              <button className="custom-button">Learn More</button>
            </div>
          </div>
          <div className="project-card">
            <img
              src="path/to/image3.jpg"
              alt="Project 3"
              className="project-card-image"
            />
            <h2 className="project-card-heading">Project 3</h2>
            <p className="project-card-content">
              Description of Project 3. Showcasing results and key benefits.
            </p>
            <div className="card-button-wrap">
              <button className="custom-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
