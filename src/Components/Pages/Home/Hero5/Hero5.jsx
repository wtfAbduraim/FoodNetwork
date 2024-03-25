import React from "react";
import "./Hero5.scss";
import Apple from "../../../Img/apple.svg";
import Play from "../../../Img/play.svg";
import Phone from "../../../Img/Phone.png";

function Hero5() {
  return (
    <section className="hero5 mt-24">
      <div className="container text-center md:flex md:text-left md:items-center md:justify-between">
          <div className="hero5__info">
            <h4 className="hero5__title">TAKE AWAY</h4>
            <h3 className="hero5__heading mb-5">
              Food Stalls with Persons but to Product marketing plane.{" "}
            </h3>
            <p className="hero5__text mb-5">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipmentwith Persons but also Just Food Stalls with
              Persons.
            </p>
            <div className="hero5__flex xs:flex">
              <button className="hero5__button flex items-center gap-2">
                <img src={Apple} alt="logo" width={26} height={26} />
                App Store
              </button>
              <button className="hero5__btn flex items-center gap-2">
                <img src={Play} alt="logo" width={26} height={26} />
                Google Play
              </button>
            </div>
          </div>
          <img className="hero5__img" src={Phone} alt="" />
        </div>
    </section>
  );
}

export default Hero5;
