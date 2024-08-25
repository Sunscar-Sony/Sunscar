import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="hero-heading typing-animation">
          Hey! it&apos;s Sanskar Soni
        </h1>
        <br />
        <h2 className="hero-subheading">
          Mastering Full-Stack Development & Competitive Coding
        </h2>
        <br />

        <p className="hero-content">
          Hello! I&apos;m Sanskar Soni, a full-stack developer and competitive
          coder with a strong foundation in Data Structures and Algorithms
          (DSA). I specialize in building seamless and responsive web
          applications, with expertise spanning both front-end and back-end
          development. My passion for UI/UX design allows me to create
          intuitive, user-centered interfaces that enhance the digital
          experience. Whether it&apos;s architecting complex systems, solving
          intricate coding challenges, or designing elegant interfaces, I am
          dedicated to turning ideas into impactful digital solutions.
          Let&apos;s work together to bring your vision to life!
        </p>
        <div className="hero-social-icons">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path-to-your-icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path-to-your-icons/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path-to-your-icons/instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path-to-your-icons/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://via.placeholder.com/400"
          alt="Hero"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
