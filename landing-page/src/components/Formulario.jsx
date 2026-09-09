 function Formulario(){

    return (

        <section className="contato" id="contato">

            <h2>Quero saber mais</h2>

            <form >

                <Input 
                label='name'
                tipo='text'
                id="name"
                placeholder='Digite seu nome'
                />

                <Input 
                label='e-mail'
                tipo='e-mail'
                id="e-mail"
                placeholder='Digite seu e-mail'
                />
            </form>
        </section>
    );
 };

    export default Formulario;