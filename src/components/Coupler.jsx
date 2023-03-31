import AcopImage from "../assets/acop.webp";

const Coupler = () => {
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h1>Acoplador DP</h1>
                    <p> Os acopladores são os dispositivos utilizados para extrair do tap a tensão
                        fase-terra existente no isolamento capacitivo para, assim,
                        permitir a detecção dos pulsos decorrentes das descargas parciais.
                        <br />
                        O sistema de monitoramento da HVEX realiza a medição on-line de
                        descargas parciais dos enrolamentos de alta tensão,
                        capacitância e fator de dissipação (Tan δ) das buchas condensivas de transformadores de potência para fornecer informações precisas a respeito da integridade do isolamento às equipes de manutenção e gestão de ativos.
                    </p>
                </div>

                <div className="main__header-right">
                    <div className="main__header-image">
                        <img src={ AcopImage } alt="image-header" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Coupler;