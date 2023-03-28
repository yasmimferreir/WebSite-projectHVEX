import Energy from "../../components/Energy";
import Header from "../../components/Header";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <Energy />

            <Programs />
            <Values />

        </>
    )
}

export default Home