import React from "react";
import "./Hero4.scss";
import ShowMore from "react-show-more-button";
import Img from "../../../Img/Hero4-1.png";
import Star from "../../../Img/Star.svg";

function Hero4() {
  return (
    <section className="hero4 mt-20">
      <div className="container text-center">
        <h4 className="hero4__title">MENU</h4>
        <h3 className="hero4__heading">Food Full of treaty Love</h3>
        <p className="hero4__text">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>

        <ul className="hero4__list mt-20">
          <ShowMore maxHeight={550} className="sm:grid sm:grid-cols-2 md:grid-cols-3">
            <li className="hero4__item w-80 mb-10">
              <img
                className="hero4__img mb-5"
                src={Img}
                alt="img"
                width={360}
                height={264}
              />
              <div className="hero4__p">
                <div className="flex gap-20 mb-3 items-center">
                  <h4 className="hero4__nick">Vegie Muffen</h4>
                  <p className="hero4__prise">16$</p>
                </div>
                <p className="hero4__comment mb-3">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex gap-44 items-center">
                  <button className="hero4__btn">+</button>
                  <img src={Star} alt="" />
                </div>
              </div>
            </li>

            <li className="hero4__item w-80">
              <img
                className="hero4__img mb-5"
                src={Img}
                alt="img"
                width={360}
                height={264}
              />
              <div className="hero4__p">
                <div className="flex gap-20 mb-3 items-center">
                  <h4 className="hero4__nick">Vegie Muffen</h4>
                  <p className="hero4__prise">16$</p>
                </div>
                <p className="hero4__comment mb-3">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex gap-44 items-center">
                  <button className="hero4__btn">+</button>
                  <img src={Star} alt="" />
                </div>
              </div>
            </li>

            <li className="hero4__item w-80">
              <img
                className="hero4__img mb-5"
                src={Img}
                alt="img"
                width={360}
                height={264}
              />
              <div className="hero4__p">
                <div className="flex gap-20 mb-3 items-center">
                  <h4 className="hero4__nick">Vegie Muffen</h4>
                  <p className="hero4__prise">16$</p>
                </div>
                <p className="hero4__comment mb-3">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex gap-44 items-center">
                  <button className="hero4__btn">+</button>
                  <img src={Star} alt="" />
                </div>
              </div>
            </li>

            <li className="hero4__item w-80">
              <img
                className="hero4__img mb-5"
                src={Img}
                alt="img"
                width={360}
                height={264}
              />
              <div className="hero4__p">
                <div className="flex gap-20 mb-3 items-center">
                  <h4 className="hero4__nick">Vegie Muffen</h4>
                  <p className="hero4__prise">16$</p>
                </div>
                <p className="hero4__comment mb-3">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex gap-44 items-center">
                  <button className="hero4__btn">+</button>
                  <img src={Star} alt="" />
                </div>
              </div>
            </li>

            <li className="hero4__item w-80">
              <img
                className="hero4__img mb-5"
                src={Img}
                alt="img"
                width={360}
                height={264}
              />
              <div className="hero4__p">
                <div className="flex gap-20 mb-3 items-center">
                  <h4 className="hero4__nick">Vegie Muffen</h4>
                  <p className="hero4__prise">16$</p>
                </div>
                <p className="hero4__comment mb-3">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex gap-44 items-center">
                  <button className="hero4__btn">+</button>
                  <img src={Star} alt="" />
                </div>
              </div>
            </li>

            <li className="hero4__item w-80">
              <img
                className="hero4__img mb-5"
                src={Img}
                alt="img"
                width={360}
                height={264}
              />
              <div className="hero4__p">
                <div className="flex gap-20 mb-3 items-center">
                  <h4 className="hero4__nick">Vegie Muffen</h4>
                  <p className="hero4__prise">16$</p>
                </div>
                <p className="hero4__comment mb-3">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex gap-44 items-center">
                  <button className="hero4__btn">+</button>
                  <img src={Star} alt="" />
                </div>
              </div>
            </li>
          </ShowMore>
        </ul>
      </div>
    </section>
  );
}

export default Hero4;
