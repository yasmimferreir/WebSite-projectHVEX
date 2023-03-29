import { VscCircuitBoard } from "react-icons/vsc";
//import ProgramsHeader from "./ProgramsHead";
import { programs } from "../data";
import Card from "../UI/Card";
//import { Link } from "react-router-dom";

const Programs = () => {
    return (
        <section className="programs">
            <div className="container programs__container">
                <ProgramsHeader icon={ VscCircuitBoard } title="Omni trafo" />

                <div className="programs__wrapper">
                    {
                        programs.map(({ id, icon, title, info }) => {
                            return (
                                <Card className="programs__program" key={ id }>
                                    <span>{ icon }</span>
                                    <h4>{ title }</h4>
                                    <small>{ info }</small>
                                    {/*  <Link to={ path } className="btn sm"> Lear more</Link>*/ }
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs;