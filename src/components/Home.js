import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import slide1 from "../imgs/slide1.jpg";
import slide2 from "../imgs/slide2.jpg";
import slide3 from "../imgs/slide3.jpg";
import slide4 from "../imgs/slide4.jpg";
import slide5 from "../imgs/slide5.jpg";
import { IoClose } from "react-icons/io5";
import home_gallery from "./Home_data";
import piscina from "../imgs/piscina.jpg";
import espaço from "../imgs/espaço.jpg";
import rooftop from "../imgs/rooftop.jpg";
import pet from "../imgs/pet.jpg";
import casal1 from "../imgs/casal1.jpg";
import casal2 from "../imgs/casal2.jpg";
import casal3 from "../imgs/casal3.jpg";
import casal4 from "../imgs/casal4.jpg";
import teste from "../imgs/teste.jpg";
import locaçao from "../imgs/locaçao.jpeg";

import divisor from "../imgs/divisor.png";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = home_gallery.length;
  const [model, setModel] = useState(false);
  const [tempthumb, setTempThumb] = useState("");

  const nextSlideModal = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    setTempThumb(home_gallery[(currentImageIndex + 1) % totalImages]?.thumb);
  };

  const prevSlideModal = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
    setTempThumb(
      home_gallery[(currentImageIndex - 1 + totalImages) % totalImages]?.thumb
    );
  };
  const getImg = (thumb, index) => {
    setTempThumb(thumb);
    setCurrentImageIndex(index);
    setModel(true);
  };
  const prevSlide = () => {
    const totalSlides = 5;
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const totalSlides = 5;
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const intervalIdRef = useRef(null);

  const resetInterval = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalIdRef.current);
  }, [currentSlide]);

  return (
    <div className="main-home">
      <div className="slider">
        <div className="slider-logo">
          <div className="section-2-title">
            <h1 id="chale">Brand</h1>
            <h1 id="chale2"> Sub Name</h1>
          </div>
        </div>

        <div className="slides">
          <div className="seta-direita-slide" onClick={nextSlide}>
            <FaChevronRight className="seta-unica" />
          </div>
          <div className="seta-esquerda-slide" onClick={prevSlide}>
            <FaChevronLeft className="seta-unica" />
          </div>
          <input
            type="radio"
            name="radio-btn"
            id="radio1"
            checked={currentSlide === 0}
            onChange={() => {
              setCurrentSlide(0);
              resetInterval();
            }}
          ></input>
          <input
            type="radio"
            name="radio-btn"
            id="radio2"
            checked={currentSlide === 1}
            onChange={() => {
              setCurrentSlide(1);
              resetInterval();
            }}
          ></input>
          <input
            type="radio"
            name="radio-btn"
            id="radio3"
            checked={currentSlide === 2}
            onChange={() => {
              setCurrentSlide(2);
              resetInterval();
            }}
          ></input>
          <input
            type="radio"
            name="radio-btn"
            id="radio4"
            checked={currentSlide === 3}
            onChange={() => {
              setCurrentSlide(3);
              resetInterval();
            }}
          ></input>
          <input
            type="radio"
            name="radio-btn"
            id="radio5"
            checked={currentSlide === 4}
            onChange={() => {
              setCurrentSlide(4);
              resetInterval();
            }}
          ></input>

          <div className="slide first">
            <img loading="lazy" src={slide1} alt="Slide 1"></img>
            <div className="layout-preto"></div>
          </div>
          <div className="slide ">
            <img loading="lazy" src={slide2} alt="Slide 2"></img>
            <div className="layout-preto"></div>
          </div>
          <div className="slide ">
            <img loading="lazy" src={slide3} alt="Slide 3"></img>
            <div className="layout-preto"></div>
          </div>
          <div className="slide ">
            <img loading="lazy" src={slide4} alt="Slide 4"></img>
            <div className="layout-preto"></div>
          </div>
          <div className="slide ">
            <img loading="lazy" src={slide5} alt="Slide 5"></img>
            <div className="layout-preto"></div>
          </div>
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
          </div>
          <div className="manual-navigation">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
            <label htmlFor="radio5" className="manual-btn"></label>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-imgs">
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> First Info</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>
            <img src={piscina}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1 id=""> Second Info </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>

            <img src={espaço}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Third Info </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>

            <img src={pet}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1 id=""> Fourth Info </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="layout-preto-texto"></div>

            <img src={rooftop}></img>
          </div>
        </div>

        <div className="section-2-text-img">
          <div className="section-2-text">
            <h4>Sub Title </h4>
            <h1>Main Title</h1>
            <p id="paragrafo1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p id="paragrafo2">
              Lorem ipsum dolor sit amet, consectetur adipiscing:{" "}
            </p>
            <p>
              <b>• </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              <b>• </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              <b>• </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              <b>• </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              <b>• </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              <b>• </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              <b>• </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div
            className="section-2-text-img-img"
            style={{ backgroundImage: `url(${teste})` }}
          ></div>
        </div>
      </div>
      <div className="divisor">
        <img src={divisor} />
      </div>
      <div className="section-3">
        <div className="section-3-bottom">
          <div className="section-3-imgs">
            <div className="section-3-imgs-top">
              <div className="section-3-img-container" id="image2">
                <img src={casal1} />
              </div>
              <div className="section-3-img-container" id="image1">
                <img src={casal2} />
              </div>
            </div>
            <div className="section-3-imgs-bottom">
              <div className="section-3-img-container" id="image3">
                <img src={casal4} />
              </div>
              <div className="section-3-img-container" id="image4">
                <img src={casal3} />
              </div>
            </div>
          </div>
          <div className="section-3-text">
            <h1 id="promotion">Promotion</h1>
            <h1 id="promotion2">Section</h1>
            <h2>Lorem ipsum dolor sit amet.</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="section-3-btn">Button Action</div>
          </div>
        </div>
      </div>
      <div className="divisor">
        <img src={divisor} />
      </div>
      <div className="section-4">
        <div className="section-4-title">
          <h1>Browse our space</h1>
          <p>
            *To better view the photos, simply click on the images to enlarge.
          </p>
        </div>
        <div className={model ? "model open" : "model"}>
          <img src={tempthumb} />
          <IoClose className="icon-svg" onClick={() => setModel(false)} />
          <div className="setas-geral">
            <FaChevronLeft onClick={prevSlideModal} />
            <FaChevronRight onClick={nextSlideModal} />
          </div>
        </div>
        <div className="section-4-imgs">
          {home_gallery.map((item, index) => (
            <div
              key={item.id}
              className="pics"
              onClick={() => getImg(item.thumb, index)}
            >
              <img loading="lazy" src={item.thumb} alt={item.id} />
            </div>
          ))}
        </div>
        <div className="section-4-absolute">
          <div className="section-4-button">
            <h1>View All</h1>
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="divisor">
        <img src={divisor} />
      </div>
      <div className="section-5">
        <div className="section-5-img">
          <img src={locaçao} />
        </div>
        <div className="section-5-text">
          <h2>Promotion</h2>
          <h1>Section</h1>
          <h3>First Info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod.
          </p>
          <h3>Second Info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <h3>Third Info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className="section-5-btn">Button Action</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
