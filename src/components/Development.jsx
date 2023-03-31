import ImageSetor from "../assets/setorelétrico.png";
import { BsCheckCircleFill } from "react-icons/bs";

const Development = () => {
    return (
        <section className="main__header section__develop">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h1 className="section__title-develop">  Desenvolvido para melhorar a performance dos ativos de distribuição </h1>

                    <div className="right-r dev">
                        <div className="details-r develop">
                            <div>
                                <BsCheckCircleFill className="icons develop" />
                                <span>Balanço energético</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons develop" />
                                <span>Auto-diagnóstico dos transformadores</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons develop" />
                                <span>Medidor ideal para consumidores comerciais industriais</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons develop" />
                                <span>Á prova de fraude </span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons develop" />
                                <span>Melhoria dos Indicadores de Continuidade</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons develop" />
                                <span>Maior vida útil do ativo</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons develop" />
                                <span>Acompanhamento em tempo real das condições do equipamento </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="main__header-right">
                    <div className="main__header-image dev">
                        <img src={ ImageSetor } alt="image-header" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Development;