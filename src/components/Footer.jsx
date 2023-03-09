import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Flex } from "@chakra-ui/react";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const instagram = () => {
    window.location.href = "https://www.instagram.com";
  };

  const twitter = () => {
    window.location.href = "https://www.twitter.com";
  };
  return (
    <div className="footer">
      <div className="quienesSom">
        <h2 id="foot_tit">Quiénes somos</h2>
        <h3>
          Turú Cerámica es un emprendimiento familiar creado hace 10 años, nuestro objetivo es crear piezas únicas y artesanales para personalizar tu hogar.
        </h3>
      </div>

      <div className="contact">
        <h2 id="foot_tit">Contactanos</h2>
        <Link target="_blank" to={"https://wa.link/6cnj10"}>
          <Flex alignItems="center" gap={2}>
            <FontAwesomeIcon icon={faWhatsapp} fontSize={22} />
            <h3>3512455555</h3>
          </Flex>
        </Link>

        <Link target="_blank" to={"https://www.google.com/maps/place/Turu+Ceramica/data=!3m1!4b1!4m2!3m1!1s0x9432a35662cbc975:0x78a4a692d008141c"}>
          <Flex alignItems="center" gap={2}>
            <FontAwesomeIcon icon={faLocationDot} fontSize={22} />
            <h3>Avenida Tronador 2074, Córdoba</h3>
          </Flex>
        </Link>
      </div>

    </div>
  );
};

export default Footer;
