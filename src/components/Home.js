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
                Texto Generico sobre o espaço gourmet bla bla bla bla Texto
                Generico sobre o espaço gourmet bla bla bla bla
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>
            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Espaço Gourmet </h1>
              <p>
                Texto Generico sobre o espaço gourmet bla bla bla bla Texto
                Generico sobre o espaço gourmet bla bla bla bla
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
                Texto Generico sobre o espaço gourmet bla bla bla bla Texto
                Generico sobre o espaço gourmet bla bla bla bla
              </p>{" "}
            </div>
            <div className="layout-preto-texto"></div>

            <img src={slide1}></img>
          </div>
          <div className="img-text-preto">
            <div className="text-img">
              <FaHouseChimney className="icone" />
              <h1> Área Rooftop </h1>
              <p>
                Texto Generico sobre o espaço gourmet bla bla bla bla Texto
                Generico sobre o espaço gourmet bla bla bla bla
              </p>
            </div>
            <div className="layout-preto-texto"></div>

            <img src={slide1}></img>
          </div>
        </div>
        <div className="section-2-text-img">
          <div className="section-2-text">
            <h4>Bem-vindo ao Chalé Vale Florido</h4>
            <p>
              Localizado em <b>Embu Guaçu, São Paulo</b>,, o destino perfeito
              para tornar seus eventos e momentos de lazer verdadeiramente
              inesquecíveis.
            </p>
            <p>
              Com uma estrutura completa e charmosa, oferecemos um ambiente
              acolhedor para casamentos, aniversários, formaturas, chás de bebê,
              chás revelação, confraternizações e muitos outros eventos.{" "}
            </p>
            <p>Para o seu lazer, proporcionamos: 🍃 </p>
            <p>
              <b>• Piscina </b>com Prainha, Hidromassagem e LED Noturno: Relaxe
              e divirta-se em nossa ampla piscina, perfeita para momentos de
              descontração.{" "}
            </p>
            <p>
              <b> • Salão de Jogos: </b> Desfrute de mesa de sinuca, jogos de
              tabuleiros, dominó e baralho em nosso aconchegante salão de jogos.{" "}
            </p>
            <p>
              <b>• Espaço Gourmet:</b> Explore o prazer da culinária em nosso
              espaço com churrasqueira, forno a lenha, fogão, forno de pizza
              italiano, freezer, cervejeira e utensílios completos.{" "}
            </p>
            <p>
              <b>• Rooftop</b> com Vista Deslumbrante: Contemple a paisagem em
              nosso rooftop, equipado com balanço, banco e bistrôs,
              proporcionando um ambiente perfeito para relaxar.{" "}
            </p>
            <p>
              <b>• Salão de Festa: </b>Celebre momentos especiais em nosso
              salão, equipado com mesas e cadeiras para acomodar até 49 pessoas
              sentadas, além de equipamentos de luzes para animar a pista de
              dança.{" "}
            </p>
            <p>
              <b>• Chalé Diamante e Chalés Rústicos: </b>Oferecemos opções de
              acomodação, desde um chalé completo com geladeira, TV, microondas
              e cama de casal até chalés rústicos, ideais para grupos maiores.{" "}
            </p>
          </div>
          <div className="section-2-text-img-img">
            <div className="section-2-img-container">
              <img src={slide1} />
            </div>
            <div className="section-2-img-container">
              <img src={slide1} />
            </div>
          </div>
        </div>

        <div className="section-3">
          <div className="section-3-text">
            <div className="section-3-title">
              <h1>Escape Romântico!</h1>
              <h1>Pacote para Casais de Segunda a Quinta-feira!</h1>
            </div>
            <p>Finalmente, uma oportunidade especial para ambos!</p>
            <p>
              Aproveite a promoção exclusiva de segunda a quinta-feira e
              mergulhe em um refúgio romântico no Chalé Completo.
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
            <img src={slide1} />
            <img src={slide2} />
            <img src={slide5} />
            <img src={slide3} />
            <img src={slide5} />
            <img src={slide4} />
            <img src={slide3} />
            <img src={slide4} />
            <img src={slide1} />
            <img src={slide5} />
            <img src={slide2} />
            <img src={slide2} />
          </div>
        </div>
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
