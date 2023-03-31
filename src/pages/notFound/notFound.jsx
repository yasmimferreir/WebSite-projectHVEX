import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

import "./notFound.css";

const notFound = () => {
    return (
        <section>

            <div className="container notfound__container">
                <h2>Página não encontrada</h2>
                <Link to="/" className="btn-get lg">Voltar para a página principal</Link>
            </div>

            <Footer />
        </section>
    )
}

export default notFound