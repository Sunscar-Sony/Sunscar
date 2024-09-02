import { useEffect, useRef, useState } from 'react';
import './Project.css';

const Project = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`project-section ${isVisible ? 'reveal' : ''}`}
      ref={sectionRef}
    >
      <div className="content-wrapper">
        <h1 className="project-heading">My Project</h1>
        <p className="project-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
    </section>
  );
};

export default Project;
