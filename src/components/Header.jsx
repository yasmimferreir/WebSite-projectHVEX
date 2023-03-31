import { Link } from "react-router-dom";
import Image from "../assets/homepage.png";

const Header = () => {
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h1>Tenha informações em tempo real das condições dos ativos
                        e com o monitoramento inteligente</h1>
                    <p> Tenha acesso a informações em tempo real, administração remota de dados importantes
                        da rede elétrica como: tensão, corrente, potência passante, energia, temperatura,
                        sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos
                        e aferindo perdas técnicas e não técnicas.
                    </p>
                    <Link to="/" className="btn-get lg">Quero mais informações</Link>
                </div>

                <div className="main__header-right">
                    <div className="main__header-image">
                        <img src={ Image } alt="image-header" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;