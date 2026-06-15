import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets";

export default function MySlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>Mishack Okonti, ESQ.</h3>
        <img src={assets.EsqMishack} alt="Esq Mishack" />
      </div>
      <div>
        <h3>Abednego Okafor, ESQ.</h3>
        <img src={assets.EsqAbednego} alt="Esq Abednego" />
      </div>
      <div>
        <h3>Daniel Amadi, ESQ.</h3>
        <img src={assets.EsqDaniel} alt="Esq Daniel" />
      </div>
      <div>
        <h3>Edesiri Nwosu, ESQ.</h3>
        <img src={assets.EsqEdesiri} alt="Esq Edesiri" />
      </div>
      <div>
        <h3>Esther Okonkwo, ESQ.</h3>
        <img src={assets.EsqEsther} alt="Esq Esther" />
      </div>
      <div>
        <h3>Grace Nwosu, ESQ.</h3>
        <img src={assets.EsqGrace} alt="Esq Grace" />
      </div>
      <div>
        <h3>Hannah Amadi, ESQ.</h3>
        <img src={assets.EsqHannah} alt="Esq Hannah" />
      </div>
      <div>
        <h3>Miracle Okonta, ESQ.</h3>
        <img src={assets.EsqMiracle} alt="Esq Miracle" />
      </div>
      <div>
        <h3>Miriam Nwosu, ESQ.</h3>
        <img src={assets.EsqMiriam} alt="Esq Miriam" />
      </div>
    </Slider>
  );
}
