import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import scroll reveal library
import './Skill.css'; // Import the external CSS

const skills1 = [
  { name: 'HTML', image: '/path/to/html.png' },
  { name: 'CSS', image: '/path/to/css.png' },
  { name: 'JavaScript', image: '/path/to/js.png' },
  { name: 'React', image: '/path/to/react.png' },
  { name: 'TypeScript', image: '/path/to/typescript.png' },
  { name: 'Sass', image: '/path/to/sass.png' },
  { name: 'Webpack', image: '/path/to/webpack.png' },
  { name: 'Babel', image: '/path/to/babel.png' },
  { name: 'Jest', image: '/path/to/jest.png' },
  { name: 'GraphQL', image: '/path/to/graphql.png' },
  { name: 'Tailwind CSS', image: '/path/to/tailwind.png' },
];

const skills2 = [
  { name: 'Node.js', image: '/path/to/node.png' },
  { name: 'MongoDB', image: '/path/to/mongo.png' },
  { name: 'Python', image: '/path/to/python.png' },
  { name: 'Git', image: '/path/to/git.png' },
  { name: 'Docker', image: '/path/to/docker.png' },
  { name: 'Kubernetes', image: '/path/to/kubernetes.png' },
  { name: 'AWS', image: '/path/to/aws.png' },
  { name: 'Firebase', image: '/path/to/firebase.png' },
  { name: 'SQL', image: '/path/to/sql.png' },
  { name: 'Express.js', image: '/path/to/express.png' },
  { name: 'REST API', image: '/path/to/rest.png' },
];

const Skill = () => {
  const { ref: skillsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`skills-section ${inView ? 'reveal' : ''}`} ref={skillsRef}>
      <h1 className="skills-heading">My Skills</h1>
      
      <div className="carousel-container">
        <div className="carousel carousel1">
          <div className="carouselInner">
            {[...skills1, ...skills1].map((skill, index) => (
              <div className="card" key={index}>
                <img src={skill.image} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel carousel2">
          <div className="carouselInner">
            {[...skills2, ...skills2].map((skill, index) => (
              <div className="card" key={index}>
                <img src={skill.image} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
