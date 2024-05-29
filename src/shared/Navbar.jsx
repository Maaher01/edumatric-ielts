import Logo from "../assets/images/edumatric-logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <nav
        className="navbar sticky-top navbar-light w-100"
        style={{ background: "#d9d9d9" }}
      >
        <img className="rounded mx-5" height="70px" src={Logo} />
      </nav>
    </Link>
  );
};

export default Navbar;
