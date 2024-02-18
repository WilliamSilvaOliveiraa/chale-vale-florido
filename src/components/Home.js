import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
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
          <h1>Chalé Vale Florido</h1>
          <h2>Seu Refúgio para Momentos Especiais em Embu Guaçu, São Paulo</h2>
          <p>
            Descubra o Encanto do Chalé Vale Florido: Um Espaço Único para
            Eventos e Lazer
          </p>
        </div>
        <div className="section-2-imgs">
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Área Gourmet </h1>
            </div>
            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Área Gourmet </h1>
            </div>
            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Área Gourmet </h1>
            </div>
            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Área Gourmet </h1>
            </div>
            <img src={slide1}></img>
          </div>
        </div>
        <div className="section-2-text-img">
          <div className="section-2-text">
            <p>
              Bem-vindo ao Chalé Vale Florido, localizado em Embu Guaçu, São
              Paulo, o destino perfeito para tornar seus eventos e momentos de
              lazer verdadeiramente inesquecíveis.{" "}
            </p>
            <p>
              Com uma estrutura completa e charmosa, oferecemos um ambiente
              acolhedor para casamentos, aniversários, formaturas, chás de bebê,
              chás revelação, confraternizações e muitos outros eventos.{" "}
            </p>
            <p>Para o seu lazer, proporcionamos: 🍃 </p>
            <p>
              • Piscina Gigantesca com Prainha, Hidromassagem e LED Noturno:
              Relaxe e divirta-se em nossa ampla piscina, perfeita para momentos
              de descontração.{" "}
            </p>
            <p>
              • Salão de Jogos: Desfrute de mesa de sinuca, jogos de tabuleiros,
              dominó e baralho em nosso aconchegante salão de jogos.{" "}
            </p>
            <p>
              • Espaço Gourmet: Explore o prazer da culinária em nosso espaço
              com churrasqueira, forno a lenha, fogão, forno de pizza italiano,
              freezer, cervejeira e utensílios completos.{" "}
            </p>
            <p>
              • Rooftop com Vista Deslumbrante: Contemple a paisagem em nosso
              rooftop, equipado com balanço, banco e bistrôs, proporcionando um
              ambiente perfeito para relaxar.{" "}
            </p>
            <p>
              • Salão de Festa: Celebre momentos especiais em nosso salão,
              equipado com mesas e cadeiras para acomodar até 49 pessoas
              sentadas, além de equipamentos de luzes para animar a pista de
              dança.{" "}
            </p>
            <p>
              • Chalé Diamante e Chalés Rústicos: Oferecemos opções de
              acomodação, desde um chalé completo com geladeira, TV, microondas
              e cama de casal até chalés rústicos, ideais para grupos maiores.{" "}
            </p>
            <p>
              Aqui você encontra todo o seu conforto para se reunir com família
              e amigos…
            </p>
          </div>
          <div className="section-2-text-img-img">
            <img src={slide1} />
            <img src={slide1} />
            <img src={slide1} />
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="section-3-text">
          <h1>
            Escape Romântico - Chalé Completo para Casais de Segunda a
            Quinta-feira!
          </h1>
          <p>
            Finalmente, uma oportunidade especial para ambos! Aproveite a
            promoção exclusiva de segunda a quinta-feira e mergulhe em um
            refúgio romântico no Chalé Completo.
          </p>
          <p>
            Com tudo o que vocês precisam para uma escapada perfeita, nosso
            chalé oferece um ambiente acolhedor, com sofá confortável, quarto
            aconchegante, TV para maratonar juntos e uma cozinha completa para
            preparar suas refeições favoritas. 🍳
          </p>
          <p>
            Além disso, desfrutem de momentos ainda mais aconchegantes junto à
            lareira. Realizem passeios no jardim, desfrutem de um churrasco no
            deck privativo e relaxem em uma piscina enorme e climatizada
            exclusiva para vocês.
          </p>
          <p>
            Quando a noite chegar, a diversão é garantida no rooftop, equipado
            com mesa de bilhar e espaço para carteado. Aproveitem cada segundo
            juntos neste espaço exclusivo para o casal! 🎉
          </p>
        </div>
        <div className="section-3-imgs">
          <div className="section-3-imgs-flex">
            <img src={slide1} />
            <img src={slide1} />
          </div>
          <div className="section-3-imgs-flex">
            <img src={slide1} />
            <img src={slide1} />
          </div>
          <div className="section-3-imgs-flex">
            <img src={slide1} />
            <img src={slide1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
