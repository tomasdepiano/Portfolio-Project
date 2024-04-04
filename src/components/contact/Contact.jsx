import "./contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opcaity: 0,
  },
  animate: {
    y: 0,
    opcaity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>tomasdepiano1@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Call or Text Me</h2>
          <span>661-713-5298</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="text" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
