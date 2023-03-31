import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={ Logo } alt="Footer Logo" />
                    </Link>
                </article>

                <article>
                    <h4>Endereço</h4>
                    <p>R.Ismael Pinto de Noronha, 86 - Nossa Sra.de Fatima, Itajubá - MG, 37502-508</p>
                </article>

                <article>
                    <h4>Contato</h4>
                    <p>(35) 3622-2699</p>
                    <p>contato@hvex.com.br</p>
                </article>

                <article>
                    <h4>Confira nossa redes</h4>
                    <div className="footer__socials">
                        <a href="/" target="_blank"> <FaLinkedinIn /></a>
                        <a href="/" target="_blank"> <FaFacebookF /></a>
                        <a href="/" target="_blank"> <AiFillInstagram /></a>
                        <a href="/" target="_blank"> <AiFillYoutube /></a>
                    </div>
                </article>
            </div>

            <div className="footer__copyright">
                <small className="footer_p">HVEX © 2023 | Todos os direitos reservados.</small>
                <small className="footer_p">Políticas de Privacidade</small>
                <small className="footer_p">Termos de uso</small>
            </div>
        </footer>
    )
}

export default Footer;