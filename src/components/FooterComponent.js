import { Link } from "react-router-dom";
import appLogo from "../../public/assets/appLogo.png";
const FooterComponentt = () => {
  return (
    <div className="footer">
      <div>
        <h1>FoodCart</h1>
        <p>© 2023 Ashika Technology Pvt Ltd.</p>
      </div>
      <div>
        <h1>Company</h1>
        <ul>
          <li>
            <a href="https://careers.swiggy.com/#/" target="blank">
              About
            </a>
          </li>
          <li>
            <a href="https://careers.swiggy.com/#/" target="blank">
              Carrers
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>
            <Link to="/help">Help & Support</Link>
          </li>
          <li>
            <a href="https://partner.swiggy.com/login#/swiggy" target="blank">
              Partner with us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src={appLogo} alt="app-logo" className="appLogo" />
      </div>
    </div>
  );
};

export default FooterComponentt;
