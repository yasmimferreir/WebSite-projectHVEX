import ImageSetor from "../assets/setorelétrico.png";


const Development = () => {
    return (

        <section className="main__header section__develop">
            <div className="container main__header-container">
                <div className="main__header-left">
                    {/*<h4></h4>*/ }
                    <h1 className="section__title-develop">  Desenvolvido para melhorar a performance dos ativos de distribuição </h1>

                    <p> Tenha acesso a informações em tempo real, administração remota de dados importantes
                        da rede elétrica como: tensão, corrente, potência passante, energia, temperatura,
                        sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos
                        e aferindo perdas técnicas e não técnicas.
                    </p>
                </div>


                <div className="main__header-right">
                    <div className="main__header-circle"></div>

                    <div className="main__header-image">
                        <img src={ ImageSetor } alt="image-header" />
                    </div>
                </div>

            </div>
        </section>











    )
}

export default Development