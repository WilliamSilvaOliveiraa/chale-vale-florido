import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-content">
        <div className="footer-links">
          <h2>Links</h2>
          <a href="#">Início</a>
          <a href="#">Galeria</a>
          <a href="#">Contato</a>
        </div>
        <div className="footer-links">
          <h2>Rede Sociais</h2>
          <a href="#">Início</a>
          <a href="#">Galeria</a>
          <a href="#">Contato</a>
        </div>
        <div className="footer-links">
          <h2>Contato</h2>
          <a href="#">Início</a>
          <a href="#">Galeria</a>
          <a href="#">Contato</a>
        </div>
        <div className="footer-links">
          <h2>Como chegar</h2>
          <div className="mapa"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
