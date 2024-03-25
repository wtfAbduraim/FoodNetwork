import React from "react";
import "./Hero3.scss";
import Img from "../../../Img/Hero3.png";

function Hero3() {
  return (
    <section className="hero3 mt-20">
      <div className="container text-centerm md:flex md:items-center md:justify-around">
        <img className="hero3__img mb-10" src={Img} alt="img"/>
        <div className="hero3__info text-center sm:text-left sm:w-96">
          <h4 className="hero3__title mb-2">ABOUT US</h4>
          <h3 className="hero3__heading text-xl mb-5 ss:text-2xl">
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.{" "}
          </h3>
          <p className="hero3__text text-xs mb-5 ss:text-sm">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </p>
          <button className="hero3__btn">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero3;
