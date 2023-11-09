import "./services.scss";
import { motion } from "framer-motion";

const servicesVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  return (
    <div className="services-container">
      <motion.div
        className="services"
        variants={servicesVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={servicesVariants}>
          <p>
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={servicesVariants}>
          <div className="title">
            <img src="./people.webp" alt="group of people" />

            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>

          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Ideas
            </h1>

            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={servicesVariants}>
          <motion.div
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              alias adipisci quas dolorum corrupti vitae ducimus, illo odio iste
              aspernatur saepe mollitia fugiat itaque labore velit sapiente!
              Unde rerum voluptate aspernatur! Quis ea aut eligendi quae beatae
              dicta necessitatibus praesentium!
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              alias adipisci quas dolorum corrupti vitae ducimus, illo odio iste
              aspernatur saepe mollitia fugiat itaque labore velit sapiente!
              Unde rerum voluptate aspernatur! Quis ea aut eligendi quae beatae
              dicta necessitatibus praesentium!
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              alias adipisci quas dolorum corrupti vitae ducimus, illo odio iste
              aspernatur saepe mollitia fugiat itaque labore velit sapiente!
              Unde rerum voluptate aspernatur! Quis ea aut eligendi quae beatae
              dicta necessitatibus praesentium!
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              alias adipisci quas dolorum corrupti vitae ducimus, illo odio iste
              aspernatur saepe mollitia fugiat itaque labore velit sapiente!
              Unde rerum voluptate aspernatur! Quis ea aut eligendi quae beatae
              dicta necessitatibus praesentium!
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
