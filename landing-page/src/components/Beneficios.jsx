import Card from "./Card";

function Beneficios(){

    return (

        <section className="bene ficios" id="beneficios"> 
        
        <div className="cards">

            <Card titulo='Aulas praticas'>
                <p>Aprenda construindo pequenos projetos</p>


            </Card>
            <Card titulo='Para iniciantes'>
                <p>Comece mesmo sem experiencia com programação</p>


            </Card>
            <Card titulo='No seu ritimo'>
                <p>Pratique o conteúdo apresentado durante a aula</p>


            </Card>
        </div>
        </section>


    );
};

export default Beneficios;