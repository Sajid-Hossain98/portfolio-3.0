import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const textSliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      staggerChildren: 0.1,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SAJID HOSSAIN</motion.h2>
          <motion.h1 variants={textVariants}>Front-end Web Developer</motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>

          <motion.img
            animate="scrollButton"
            variants={textVariants}
            src="./scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={textSliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>

      <div className="imageContainer">
        <img src="./hero-img.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
