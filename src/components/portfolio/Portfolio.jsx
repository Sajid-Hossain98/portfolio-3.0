import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Vanilla JS",
    img: "https://images.pexels.com/photos/18957568/pexels-photo-18957568/free-photo-of-landscape.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque, fugit eos corporis possimus cupiditate delectus! Saepe ex porro corporis!",
  },
  {
    id: 2,
    title: "React JS",
    img: "https://images.pexels.com/photos/19050720/pexels-photo-19050720/free-photo-of-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque, fugit eos corporis possimus cupiditate delectus! Saepe ex porro corporis!",
  },
  {
    id: 3,
    title: "Next JS",
    img: "https://images.pexels.com/photos/15200768/pexels-photo-15200768/free-photo-of-a-high-angle-shot-of-a-spiral-staircase.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque, fugit eos corporis possimus cupiditate delectus! Saepe ex porro corporis!",
  },
  {
    id: 4,
    title: "Ecommerce",
    img: "https://images.pexels.com/photos/18510514/pexels-photo-18510514/free-photo-of-a-close-up-of-apples-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque, fugit eos corporis possimus cupiditate delectus! Saepe ex porro corporis!",
  },
];

const Single = ({ item }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>

          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progress-bar" />
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
