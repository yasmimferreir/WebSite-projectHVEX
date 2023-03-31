import ImageMonitory from "../assets/monitory.png";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.png";
import Image5 from "../assets/5.png";
import Image6 from "../assets/6.png";
import Image7 from "../assets/7.png";
import Image8 from "../assets/8.png";

const Monitoring = () => {
    return (
        <section className="main__section">
            <div className="container main__section-container">
                <div className="main__section-left">
                    <div className="main__section-image">
                        <img src={ ImageMonitory } alt="image-section" />
                    </div>
                </div>

                <div className="main__header-right monitory_container">
                    <h1 className="title-monitory">Omni Trafo</h1>
                    <h4 className="paragrafh-monitory">Monitoramento inteligente de transformadores de distribuição</h4>
                    <p>O Omni trafo é uma solução consolidada para monitoramento de ativos. Através deste equipamento, informações importantes
                        da rede são enviadas em tempo real, permitindo, assim, a admistração remota de dados como:
                    </p>

                    <div className="right-r monitory">
                        <div className="details-r monitory">
                            <div>
                                <img src={ Image1 } className="icons monitory" />
                                <span className="span__monitory">Monitoramento de tensão de tensão, corrente e carga</span>
                            </div>

                            <div>
                                <img src={ Image2 } className="icons monitory" />
                                <span className="span__monitory">Análise de perda de vida útil do transformador</span>
                            </div>

                            <div>
                                <img src={ Image3 } className="icons monitory" />
                                <span className="span__monitory">Medição do balanço energético de Perdas</span>
                            </div>

                            <div>
                                <img src={ Image4 } className="icons monitory" />
                                <span className="span__monitory">Detecção de faltas na rede elétrica </span>
                            </div>

                            <div>
                                <img src={ Image5 } className="icons monitory" />
                                <span className="span__monitory">Anáise de Fator de potência</span>
                            </div>

                            <div>
                                <img src={ Image6 } className="icons monitory" />
                                <span className="span__monitory">Harmônicas de corrente e tensão</span>
                            </div>

                            <div>
                                <img src={ Image7 } className="icons monitory" />
                                <span className="span__monitory">Medição de temperatura interna </span>
                            </div>

                            <div>
                                <img src={ Image8 } className="icons monitory" />
                                <span className="span__monitory">Supervisão de baixa tensão</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Monitoring;