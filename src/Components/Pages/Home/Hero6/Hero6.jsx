import React from "react";
import "./Hero6.scss";
import "../Hero4/Hero4.scss";
import Back from "../../../Img/Back.svg";
import Next from "../../../Img/Next.svg";
import Apo from "../../../Img/APO.png";
import Star from "../../../Img/Star.svg";

function Hero6() {
  return (
    <section className="hero6 mt-96">
      <div className="container">
        <h4 className="hero4__title">TESTIMONIAL</h4>
        <h3 className="hero4__heading">Making Food great again and again</h3>
        <p className="hero4__text">
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          to make your.
        </p>

        <ul className="hero6__list flex items-center justify-between mt-16 text-center">
          <li className="hero6__item-1">
            <img src={Back} alt="" />
          </li>

          <li className="hero6__item text-center">
            <img className="hero6__img" src={Apo} alt="user" />
            <p className="hero4__text">
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc to make your.
            </p>
            <img className="hero6__img" src={Star} alt="" />
            <h5 className="hero6__heading">Augusta W. Reynoso</h5>
            <p className="hero6__text">UI&UX DeSIGNER</p>
          </li>

          <li className="hero6__item-1">
            <img src={Next} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero6;
