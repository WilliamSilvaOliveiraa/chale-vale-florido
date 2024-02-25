import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Footer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCSS5G4wii8-wQNWr-2K63Oa_1wj2EZvFg",
  });

  const position = {
    lat: -23.861373072256526,
    lng: -46.84585721958537,
  };

  return (
    <div className="main-footer">
      <div className="footer-content">
        <div className="footer-links">
          <h2>Menu</h2>
          <a href="#">Início</a>
          <a href="#">Galeria</a>
          <a href="#">Contato</a>
        </div>
        <div className="footer-links">
          <h2>Rede Sociais</h2>
          <div id="footer_social_media">
            <a
              href="https://www.instagram.com/eurogrill_churrasqueiras/"
              className="footer-link"
              id="instagram"
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              href="https://www.facebook.com/eurogrillchurrasqueiras/"
              className="footer-link"
              id="facebook"
            >
              <FaFacebookF></FaFacebookF>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519992510945&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20atrav%C3%A9s%20do%20website!"
              className="footer-link"
              id="whatsapp"
            >
              <FaWhatsapp> </FaWhatsapp>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h2>Contato</h2>
          <p>+55 (19) 99999-9999</p>
          <p>+55 (19) 99999-9999</p>
          <p>+55 (19) 99999-9999</p>
        </div>
        <div className="footer-links">
          <div className="maps-euro">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
                center={position}
                zoom={15}
              >
                <Marker
                  position={position}
                  options={{
                    label: {
                      text: " ",
                      className: "map-marker",
                    },
                  }}
                  onLoad={(marker) => {
                    // Aqui, você pode acessar o objeto Marker e definir estilos adicionais
                    const label = marker.getLabel();
                    label.color = "#ea4335"; // Define a cor do texto
                    marker.setLabel(label);
                  }}
                ></Marker>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div id="footer_copyright">
        <h1>Chalé Vale Florido Copyright 2024</h1> <div className="traço"></div>
        <p className="develop">
          Desenvolvido por{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.williamoliveirasilva.online"
            target="_blank"
            className="nome-Will"
          >
            William Silva
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
