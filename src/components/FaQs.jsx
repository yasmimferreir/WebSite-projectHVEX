//import ProgramsHead from "./ProgramsHead";
//import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";


const FAQs = () => {
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <h2 className="title__question"> Perguntas Frequentes </h2>
                <div className="faqs__wrapper">
                    { faqs.map(({ id, question, answer }) => {
                        return <FAQ key={ id } question={ question } answer={ answer } />
                    }) }
                </div>
            </div>

        </section>
    )
}

export default FAQs