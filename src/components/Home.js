import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight , FaChevronLeft  } from "react-icons/fa";
import slide1 from "../imgs/slide1.jpeg";
import slide2 from "../imgs/slide2.jpeg";
import slide3 from "../imgs/slide3.jpeg";
import slide4 from "../imgs/slide4.jpeg";

function Home() {
  const prevSlide = () => {
    const totalSlides = 4;
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const totalSlides = 4;
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
        <div className="slides">
          <div className="seta-direita-slide" onClick={nextSlide}>
            <FaChevronRight  className="seta-unica"/>
          </div>
          <div className="seta-esquerda-slide" onClick={prevSlide}>
            <FaChevronLeft  className="seta-unica"/>
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
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
          <div className="manual-navigation">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>
      <div className="section-2">
            <div className="section-2-title">
              <h1>
              Chalé Vale Florido - Seu Refúgio para Momentos Especiais em Embu Guaçu, São Paulo
              </h1>
              <p>
              Descubra o Encanto do Chalé Vale Florido: Um Espaço Único para Eventos e Lazer
              </p>
            </div>
            <div className="section-2-imgs">
    <div className="section-text"> 
    <h1>
      
    </h1>
         <img>
         </img>
    </div>
            </div>
            <div className="section-2-text">
            <p>
              
            </p>
</div>
      </div>
    </div>
  );
}

export default Home;
