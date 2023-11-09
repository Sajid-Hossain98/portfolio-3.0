import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services-container">
      <motion.div className="services" initial="initial" whileInView="animate">
        <motion.div className="textContainer">
          <p>
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer">
          <div className="title">
            <img src="./people.webp" alt="group of people" />

            <h1>
              <b>Unique</b> Ideas
            </h1>
          </div>

          <div className="title">
            <h1>
              <b>For Your</b> Ideas
            </h1>

            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer">
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
