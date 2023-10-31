import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}

      <div className="wrapper">
        <span>Sajid Hossain</span>

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
