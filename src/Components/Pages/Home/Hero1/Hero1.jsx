import React from "react";
import "./Hero1.scss"
import Img from "../../../Img/Hero1.png"

function Hero1() {
  return (
    <section className="hero1">
      <div className="container md:flex md:justify-between items-start">
        <div className="hero1__info text-center md:text-left">
          <h1 className="hero1__heading text-4xl ss:text-5xl">
            Making time a good time by making food the good food.
          </h1>
          <p className="hero1__text text-xs ss:text-base">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </p>
          <div className="flex items-center gap-5 mb-60 text-center">
            <button className="hero1__btn">Order Now</button>
            <button className="hero1__button">Food Details</button>
          </div>
        </div>
        <img className="hero1__img" src={Img} alt="img" width={701} height={670}/>
      </div>
    </section>
  );
}

export default Hero1;
