import ImageEnergy from "../assets/bg.png";
//import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsCheckCircleFill } from "react-icons/bs"


const Energy = () => {
    return (
        <section className="main__section">
            <div className="container main__section-container">
                <div className="main__section-left">
                    <div className="main__header-circle"></div>

                    <div className="main__section-image">
                        <img src={ ImageEnergy } alt="image-section" />
                    </div>
                </div>


                <div className="main__header-right">
                    {/*<h4></h4>*/ }
                    <h1 className="title-energy">Seja bem-vindo a era da energia inteligente</h1>
                    <p className="paragrafh-energy"> As redes inteligentes são um caminho sem volta, o desenvolvimento e disceminação
                        de dispositivos de medição e monitoramento são as ferramentas para redução de custos,
                        perdas e trazem mais previsibilidade para as utilities de energia.
                    </p>





                    <div className="right-r">
                        {/*   <span>algumas razões</span>*/ }

                        {/*    <div>
                            <span className="stroke-text">Por que </span>
                            <span> nós escolher?</span>
                        </div>*/ }

                        <div className="details-r">
                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Monitoramento inteligente de ativos</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />

                                <span>Melhoria dos indicadores de continuidade</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />

                                <span>Comunicação Modular</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Business Inteligence</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Redução de Perdas técnicas e Não técnicas</span>
                            </div>

                        </div>
                    </div>
                </div>







            </div>







        </section>

    )
}

export default Energy;