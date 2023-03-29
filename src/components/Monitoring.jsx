import ImageMonitory from "../assets/monitory.png";
//import { AiOutlineCheckCircle } from "react-icons/ai"

const Monitoring = () => {
    return (
        <section className="main__section">
            <div className="container main__section-container">
                <div className="main__section-left">
                    <div className="main__header-circle"></div>

                    <div className="main__section-image">
                        <img src={ ImageMonitory } alt="image-section" />
                    </div>
                </div>


                <div className="main__header-right">
                    <h1>Omni Trafo</h1>
                    <h4>Monitoramento inteligente de transformadores de distribuição</h4>
                    <p>O Omni trafo é uma solução consolidada para monitoramento de ativos. Através deste equipamento, informações importantes
                        da rede são enviadas em tempo real, permitindo, assim, a admistração remota de dados como:
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Monitoring