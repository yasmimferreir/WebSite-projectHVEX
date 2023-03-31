import { AiOutlinePlus } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";

const FAQ = ({ question, answer }) => {

    const [isAnswerShowing, setIsAnswerShowing] = useState(false)

    return (
        <article className="faq" onClick={ () => setIsAnswerShowing(prev => !prev) }>
            <div><h4 className="question_faq">
                { question }
            </h4>
                <button className="faq__icon">
                    { isAnswerShowing ? <RxCaretDown /> : <AiOutlinePlus /> }
                </button>
            </div>
            { isAnswerShowing && <p className="paragrafh_question">{ answer }</p> }
        </article>
    )
}

export default FAQ;


