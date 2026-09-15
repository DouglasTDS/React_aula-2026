import Input from "./Input"

 function Contatos(){

    return (

        <section className="entre-contato" id="contato">

            <h2>Entre em contato</h2>

            <form >

                <Input 
                label='nome'
                type='text'
                id="name"
                placeholder='Digite seu nome'
                />

                <Input 
                label='email'
                type='email'
                id="email"
                placeholder='Digite seu e-mail'
                />
                <Input 
                label='assunto'
                type='text'
                id="assunto"
                placeholder='Deixe seu comentário'
                />
                <Input 
                label='telefone'
                type='number'
                id="telefone"
                placeholder='Digite seu telefone'
                />
                <Input 
                label='cidade'
                type='text'
                id="Cidade"
                placeholder='Digite sua cidade'
                />

                <button>Enviar comentário</button>
            </form>
        </section>
    );
 };

 export default Contatos;