import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [Loginbtn, setLoginbtn] = useState("Login");

  console.log('Header Rendered');

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li> Online Statue : { onlineStatus === true ? "🟢" : "🔴"} </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
               Loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
            }}
          >
            {Loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
