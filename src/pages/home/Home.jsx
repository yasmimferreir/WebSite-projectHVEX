


import Consultant from "../../components/Consultant";
import Development from "../../components/Development";
import Energy from "../../components/Energy";
import FAQs from "../../components/FaQs";
import Header from "../../components/Header";
import Monitoring from "../../components/Monitoring";
//import Programs from "../../components/Programs";
import Values from "../../components/Values";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <Energy />


            <Values />
            <Monitoring />

            <Development />
            <Consultant />

            <FAQs />

        </>
    )
}

export default Home