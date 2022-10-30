import React from "react";
import "../../App.css";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Clarusway Web Design, Copyright &copy; 2020</p>
        <br />
        <Link to="http://www.clarusway.com" target="_blank">
          <img
            src="https://clarusway.com/wp-content/uploads/2020/06/clarusway_logo.png"
            width="200"
            height="40"
            alt=""
          />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
