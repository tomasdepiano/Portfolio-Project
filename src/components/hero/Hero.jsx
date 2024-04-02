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
          <motion.h2 variants={textVariants}>Tomas De Piano</motion.h2>
          <motion.h1 variants={textVariants}>Front End Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Recent Projects
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <div className="slidingTextContainer">Innovative Passionate Driven</div>
      <div className="imageContainer">
        <img src="/tomasheadshot.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
