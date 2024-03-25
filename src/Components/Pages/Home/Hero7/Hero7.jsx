import React from "react";
import "./Hero7.scss";
import "../Hero4/Hero4.scss";

function Hero7() {
  return (
    <section className="hero7 mt-24">
      <div className="container text-center">
        <div className="hero7__info">
          <h4 className="hero4__title">CONTACT</h4>
          <h3 className="hero4__heading">
            Food Stalls with Persons but also specialized equipment, Skills to
            manage.
          </h3>
        </div>
        <div className="hero7__flex flex items-center mt-20 text-center">
          <input
            className="hero7__input w-60 h-8 xs:w-64 xs:h-10 ss:w-96 ss:h-16"
            type="message"
            placeholder="Enter your message"
          />
          <button className="hero7__btn w-20 h-8 xs:w-24 xs:h-10 ss:w-32 ss:h-16">Send</button>
        </div>
      </div>
    </section>
  );
}

export default Hero7;
