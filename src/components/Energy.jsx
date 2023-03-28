import ImageEnergy from "../assets/bg.png";
//import { AiOutlineCheckCircle } from "react-icons/ai"


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
                    <h4></h4>
                    <h1>Seja bem-vindo a era da energia inteligente</h1>
                    <p> As redes inteligentes são um caminho sem volta, o desenvolvimento e disceminação
                        de dispositivos de medição e monitoramento são as ferramentas para redução de custos,
                        perdas e trazem mais previsibilidade para as utilities de energia.
                    </p>


                </div>


            </div>
        </section>

    )
}

export default Energy;