import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__paragrafh">
                        <h3 className="values__title">Omni trafo</h3>
                        <span className="values__span">É o dispositivo capaz de integrar os transformadores as redes inteligentes</span>
                        <p className="values__p">O Omni Trafo envia informações em tempo real, permitindo a administração remota de dados
                            importantes da rede elétrica, como tensão, corrente, potência passante, energia,
                            temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil
                            dos ativos e aferindo perdas técnicas e não técnicas.
                        </p>
                    </div>
                </div>

                <div className="values__right">
                    <div className="values__wrapper">
                        {
                            values.map(({ id, title, avatar }) => {
                                return <Card key={ id } className="values__value">
                                    <span className="icon-values">
                                        <img src={ avatar } alt="image" />
                                    </span>
                                    <h4 className="title-card">{ title }</h4>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;