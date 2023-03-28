import ProgramsHeader from "./ProgramsHead";
import { values } from "../data";
import Card from "../UI/Card";
import { VscCircuitBoard } from "react-icons/vsc"


const Values = () => {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <h3>Omni trafo</h3>
                        <span>dsds</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, excepturi?</p>
                    </div>
                </div>


                <div className="right">
                    <ProgramsHeader icon={ <VscCircuitBoard /> }></ProgramsHeader>
                </div>
            </div>
        </section>
    )
}

export default Values;