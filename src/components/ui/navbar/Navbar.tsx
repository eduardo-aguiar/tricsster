import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="">
      <ul>
      <li>
          <Link to="/training">
            <a>Training</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

