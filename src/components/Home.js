import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import slide1 from "../imgs/slide1.jpeg";
import slide2 from "../imgs/slide2.jpeg";
import slide3 from "../imgs/slide3.jpeg";
import slide4 from "../imgs/slide4.jpeg";
import { IoClose } from "react-icons/io5";
import home_gallery from "./Home_data";
import slide5 from "../imgs/slide5.png";
import slide6 from "../imgs/slide6.png";
import divisor from "../imgs/divisor.png";
import logo from "../imgs/logo.png";

function Home() {
  const [model, setModel] = useState(false);
  const [tempthumb, setTempThumb] = useState("");
  const getImg = (thumb) => {
    setTempThumb(thumb);
    setModel(true);
  };

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
        <div className="slider-logo">
          <img src={logo}></img>
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
        </div>
        <div className="section-2-imgs">
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Piscina </h1>
              <p>
                Maravilhosa piscina gigantesca equipada com prainha,
                hidromassagem relaxante e iluminação em LED!
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>
            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1 id="espaço-gourmet"> Espaço Gourmet </h1>
              <p>
                Espaço gourmet completo para experiências culinárias premium,
                com churrasqueira, forno a lenha, fogão, forno de pizza
                italiano, freezer, cervejeira e utensílios variados.
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>

            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Pet Friendly </h1>
              <p>
                Ambiente acolhedor e pet friendly, onde seu adorável animal de
                estimação é mais que bem-vindo!
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>

            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1 id="espaço-gourmet"> Área Rooftop </h1>
              <p>
                Rooftop exclusivo com atmosfera descontraída, apresentando um
                charmoso balanço, banco e seis bistrôs, cada um equipado com
                três confortáveis cadeiras.
              </p>
            </div>
            <div className="layout-preto-texto"></div>

            <img src={slide1}></img>
          </div>
        </div>

        <div className="section-2-text-img">
          <div className="section-2-text">
            <h4>Bem-vindo ao Chalé </h4>
            <h1>Vale Florido</h1>
            <p id="paragrafo1">
              Localizado em Embu Guaçu, São Paulo, o destino perfeito para
              tornar seus eventos e momentos de lazer verdadeiramente
              inesquecíveis.
            </p>
            <p id="paragrafo2">Para o seu lazer, proporcionamos: </p>
            <p>
              <b>• </b>Piscina com Prainha, Hidromassagem e LED Noturno: Relaxe
              e divirta-se em nossa ampla piscina, perfeita para momentos de
              descontração.{" "}
            </p>
            <p>
              <b>• </b>Salão de Jogos: Desfrute de mesa de sinuca, jogos de
              tabuleiros, dominó e baralho em nosso aconchegante salão de jogos.{" "}
            </p>
            <p>
              <b>• </b>Espaço Gourmet: Explore o prazer da culinária em nosso
              espaço com churrasqueira, forno a lenha, fogão, forno de pizza
              italiano, freezer, cervejeira e utensílios completos.{" "}
            </p>
            <p>
              <b>• </b>Rooftop com Vista Deslumbrante: Contemple a paisagem em
              nosso rooftop, equipado com balanço, banco e bistrôs,
              proporcionando um ambiente perfeito para relaxar.{" "}
            </p>
            <p>
              <b>• </b>Salão de Festa: Celebre momentos especiais em nosso
              salão, equipado com mesas e cadeiras para acomodar até 49 pessoas
              sentadas, além de equipamentos de luzes para animar a pista de
              dança.{" "}
            </p>
            <p>
              <b>• </b>Chalé Diamante e Chalés Rústicos: Oferecemos opções de
              acomodação, desde um chalé completo com geladeira, TV, microondas
              e cama de casal até chalés rústicos, ideais para grupos maiores.{" "}
            </p>
          </div>
          <div
            className="section-2-text-img-img"
            style={{ backgroundImage: `url(${slide1})` }}
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
                <img src={slide6} />
              </div>
              <div className="section-3-img-container" id="image1">
                <img src={slide6} />
              </div>
            </div>
            <div className="section-3-imgs-bottom">
              <div className="section-3-img-container" id="image3">
                <img src={slide6} />
              </div>
              <div className="section-3-img-container" id="image4">
                <img src={slide6} />
              </div>
            </div>
          </div>
          <div className="section-3-text">
            <h1 id="promotion">Promoção</h1>
            <h1 id="promotion2">De Casal!</h1>
            <h2>Disponível Segunda à Quinta</h2>

            <p>
              Aproveite uma promoção exclusiva de segunda a quinta-feira para um
              refúgio romântico no Chalé Completo, que oferece conforto e
              comodidades ideais.
            </p>
            <p>
              Desfrute de momentos aconchegantes, passeios no jardim, churrascos
              no deck privativo e relaxe na piscina exclusiva.
            </p>
            <p>
              Quando a noite chegar, a diversão é garantida no rooftop, equipado
              com mesa de bilhar e espaço para carteado.
            </p>

            <p>
              Aproveitem cada segundo juntos neste espaço exclusivo para o
              casal!
            </p>
            <div className="section-3-btn">Tenho Interesse</div>
          </div>
        </div>
      </div>
      <div className="divisor">
        <img src={divisor} />
      </div>
      <div className="section-4">
        <div className="section-4-title">
          <h1>Navegue pelo nosso espaço</h1>
          <p>
            *Para visualizar melhor as fotos, basta clicar nas imagens para
            ampliar.
          </p>
        </div>
        <div className={model ? "model open" : "model"}>
          <img src={tempthumb} />
          <IoClose className="icon-svg" onClick={() => setModel(false)} />
        </div>
        <div className="section-4-imgs">
          {home_gallery.map((item, index) => (
            <div
              key={item.id}
              className="pics"
              onClick={() => getImg(item.thumb)}
            >
              <img loading="lazy" src={item.thumb} alt={item.id} />
            </div>
          ))}
        </div>
        <div className="section-4-absolute">
          <div className="section-4-button">
            <h1>Ver Todas</h1>
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="section-5-img">
          <img src={slide1} />
        </div>
        <div className="section-5-text">
          <h2>Modalidades de</h2>
          <h1>Locação</h1>
          <p>Temos diversas opções que se encaixam no que você procura</p>
          <h3>Day Use</h3>
          <p>
            Um dia com a gente, com descanso e divesão ao ar livre, em meio à
            natureza.
          </p>
          <p>Nosso Day Use funciona de terça-feira a domingo, das 9h às 17h</p>
          <p>Faça sua reserva antecipada para garantir sua vaga</p>
          <p>*O Day Use não dá acesso às acomodações dos quartos/chalés</p>
          <h3>Finais de Semana e Feriados</h3>
          <p>
            Aproveite a experiencia completa que o chalé nomedochalé pode te
            oferecer com nosso serviço de hospedagem. Seja para um fim de semana
            romantico ou uma confraternização familiar, somos a opção perfeita.
          </p>
          <h3>Eventos Corporativos</h3>
          <p>Temos um espaço ideal para eventos bla bla bla</p>
          <div className="section-5-btn">Faça sua reserva</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
