import FlagImage from "../assets/flag.webp";

const Flag = () => {

    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h1>Sinalizador de faltas</h1>
                    <p> Solução da HVEX para a identificação de correntes de faltas transitórias
                        ou permanentes em redes de distribuição, com foco em acelerar
                        o processo de reestabelecimento de circuitos em falta.
                        <br />
                        O sensoriamento de falta é aplicado a alimentadores de média tensão (MT),
                        especialmente para aqueles que possuem elevada extensão e baixo desempenho de indicadores de qualidade de energia.
                    </p>
                </div>

                <div className="main__header-right">
                    <div className="main__header-image">
                        <img src={ FlagImage } alt="image-header" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Flag;