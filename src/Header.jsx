import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header>
      <nav>
        <div className="menu-list">
          <Link to="/">
            {" "}
            <span className="link-name">Home</span>
          </Link>
          <Link to="/signup">
            <span className="link-name">Signup</span>
          </Link>
          <Link to="/login">
            <span className="link-name">Login</span>
          </Link>
          <LogoutLink />
        </div>
      </nav>
    </header>
  );
}
