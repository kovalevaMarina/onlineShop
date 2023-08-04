import "./Logo.scss";

import { Link } from "react-router-dom";

function Logo({ textColor }) {
  return (
    <div className="logo">
      <Link to="/" style={{ color: textColor }} className="logo-link">
        <span className="logo-link_letter">S</span>hopy.
      </Link>
    </div>
  );
}

export default Logo;
