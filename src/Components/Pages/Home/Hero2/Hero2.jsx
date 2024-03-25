import React from "react";
import "./Hero2.scss";
import Img from "../../../Img/Hero2-1.svg";
import Img2 from "../../../Img/Hero2-2.svg";
import Img3 from "../../../Img/Hero2-3.svg";

function Hero2() {
  return (
    <section className="hero2">
      <div className="container text-center mb-0">
        <h4 className="hero2__title">FEATURES</h4>
        <h3 className="hero2__heading">Food with a New Passion</h3>

        <ul className="hero2__list mt-10 text-center xs:ml-32 md:flex md:ml-0 md:gap-20 lg:gap-32">
          <li className="hero2__item mb-5 w-72 sm:ml-48 md:ml-0 text-center">
            <img
              className="hero2__img ml-32 mb-5"
              src={Img}
              alt="img"
              width={44}
              height={44}
            />
            <h3 className="hero2__comment mb-2">Quality Food</h3>
            <p className="hero2__text">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </li>

          <li className="hero2__item mb-5 w-72 sm:ml-48 md:ml-0">
            <img
              className="hero2__img ml-32 mb-5"
              src={Img2}
              alt="img"
              width={44}
              height={44}
            />
            <h3 className="hero2__comment mb-2">Food Delivery</h3>
            <p className="hero2__text">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </li>
          <li className="hero2__item w-72 sm:ml-48 md:ml-0">
            <img
              className="hero2__img ml-32 mb-5"
              src={Img3}
              alt="img"
              width={44}
              height={44}
            />
            <h3 className="hero2__comment mb-2">Super Taste</h3>
            <p className="hero2__text">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero2;
