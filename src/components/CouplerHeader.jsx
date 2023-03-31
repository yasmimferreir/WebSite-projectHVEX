import { BsCheckCircleFill } from "react-icons/bs";
import AcopImage from "../assets/acopl.webp";

const CouplerHeader = () => {
    return (
        <section className="main__section">
            <div className="container main__section-container">
                <div className="main__section-left">
                    <div className="main__section-image">
                        <img src={ AcopImage } alt="image-section" />
                    </div>
                </div>

                <div className="main__header-right">
                    <h1 className="title-energy">Benefícios de utilizar o  Acoplador DP</h1>
                    <p className="paragrafh-energy"> O sistema conta com um software especialista para processamento de dados e
                        gerenciamento da comunicação com outros equipamentos presentes na subestação e sistemas supervisórios.
                    </p>

                    <div className="right-r">
                        <div className="details-r">
                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Projeto e produção 100% brasileira</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Não requer manutenção periódica</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Dois anos de garantia</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Suporte técnico direto com a HVEX</span>
                            </div>

                            <div>
                                <BsCheckCircleFill className="icons" />
                                <span>Vida útil estimada superior a 10 anos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CouplerHeader;