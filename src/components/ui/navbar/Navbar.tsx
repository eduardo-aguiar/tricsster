import { Link } from "react-router-dom";
import st from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={st["navbar"]}>
      <ul>
        <div >
      <li className={st["logo"]}>
          <Link to="/">
          <i className="ri-infinity-line"></i>
          </Link>
      </li>
        </div>
      <div className={st["linksContainer"]}>
      <li>
          <Link to="/training">
    
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
      </div>
      
      </ul>
    </nav>
  );
};

