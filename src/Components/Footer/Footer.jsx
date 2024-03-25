import React from "react";
import "./Footer.scss";
import Logo from "../Img/Header-logo.svg";
import Insta from "../Img/Instagram.svg";
import Face from "../Img/Facebook.svg";
import Twin from "../Img/Twitter.svg";
import You from "../Img/Youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list items-center text-center xs:grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xs:text-left">
          <li className="footer__item">
            <a className="footer__img" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <a className="footer__link" href="#">
              www.companyname.com
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              companyname@gmail.com
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Phone: +7 485-118-03-25
            </a>
          </li>

          <li className="footer__item">
            <h5 className="footer__heading">Home</h5>
            <a className="footer__link" href="#">
              Landingpage
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Documentation
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Referral Program
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              UI & UX Design
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Web Design
            </a>{" "}
            <br />
          </li>

          <li className="footer__item">
            <h5 className="footer__heading">Menu</h5>
            <a className="footer__link" href="#">
              Landingpage
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Documentation
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Referral Program
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              UI & UX Design
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Web Design
            </a>{" "}
            <br />
          </li>

          <li className="footer__item">
            <h5 className="footer__heading">Company</h5>
            <a className="footer__link" href="#">
              Landingpage
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Documentation
            </a>{" "}
            <br />
            <a className="footer__link" href="#">
              Referral Program
            </a>{" "}
            <br />
            <div className="footer__flex flex items-center gap-1 mt-5">
              <a className="footer__a" href="#">
                <img src={Insta} alt="" />
              </a>

              <a className="footer__a" href="#">
                <img src={Face} alt="" />
              </a>

              <a className="footer__a" href="#">
                <img src={Twin} alt="" />
              </a>

              <a className="footer__a" href="#">
                <img src={You} alt="" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
