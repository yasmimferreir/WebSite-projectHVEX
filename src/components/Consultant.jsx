import { Link } from "react-router-dom";

const Consultant = () => {
    return (
        <section className="section__consult">
            <div className="container section__consult-container">
                <div className="section__left">
                    <h4></h4>
                    <h1>Quer saber mais sobre como podemos te ajudar a melhorar a performace de seus ativos?</h1>

                    <button to="/" className="btn consult">Falar com um consultor</button>
                </div>

            </div>
        </section>
    )
}

export default Consultant;