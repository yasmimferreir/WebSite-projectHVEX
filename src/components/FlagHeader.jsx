import { BsCheckCircleFill } from "react-icons/bs";
import FlagImage from "../assets/flag.webp";

const FlagHeader = () => {
    return (
        <section className="main__section">
            <div className="container main__section-container">
                <div className="main__section-left">
                    <div className="main__section-image">
                        <img src={ FlagImage } alt="image-section" />
                    </div>
                </div>

                <div className="main__header-right">
                    <h1 className="title-energy">Benefícios de utilizar o Sinalizador de faltas</h1>
                    <p className="paragrafh-energy"> Acelera o processo de reestabelecimento de circuitos em falta.
                        Colabora com iniciativas para redução de DEC em regiões críticas; Garante a qualidade da integração de dados.
                    </p>

                    <div className="right-r">
                        <div className="details-r">
                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Automação das redes</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Implementação de dispositivo IoT</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Baixo custo de implementação com relação direta para redução de DEC</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Comunicação LoRa / LTE / NB-IoT</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Carregamento automático da bateria por indução</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlagHeader;