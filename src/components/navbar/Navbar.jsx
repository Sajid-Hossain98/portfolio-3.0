import { motion } from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sajid Hossain
        </motion.span>

        <div className="socials">
          <a href="#">
            <img src="./facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="./instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="./youtube.png" alt="youtube" />
          </a>
          <a href="#">
            <img src="./dribbble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;