import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>SAJID HOSSAIN</h2>
          <h1>Front-end Web Developer</h1>

          <div className="buttons">
            <button>See latest works</button>
            <button>Contact me</button>
          </div>

          <img src="./scroll.png" alt="scroll" />
        </div>
      </div>

      <div className="imageContainer">
        <img src="./hero-img.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
