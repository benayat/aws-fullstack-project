import { Link } from "react-router-dom";
import "./Header.components.css";

export const Header = () => {
  return (
    <div className="header bg-dark text-white">
      <div className="header-container">
        <div className="logo"><Link to=""></Link>
          <h2>Logo</h2>
        </div>
        <div className="items-wrapper">
            <ul>
              <li className="item"><Link to="/"></Link>
                <i class="fas fa-home"></i> 
                <label>Home</label>
              </li>
              <li className="item"><Link to="/recipes"></Link>
              <i class="fas fa-utensils"></i> 
              <label>Recipes</label>
              </li>
              <li className="item"><Link to="/myrecipes"></Link>
              <i class="fas fa-book"></i>
              <label>My Recipes</label>
              </li>
            </ul>
        </div>
        <div className="items-wrapper">
            <ul>
              <li></li>
            </ul>
        </div>
      </div>
    </div>
  );
};
