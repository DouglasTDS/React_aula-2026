function Resultado({endereco}){

     if (!endereco){
        return null
     }

     const {cep, logradouro, bairro, localidade, uf,} = endereco

    return (
        <div>
            <h2>endereço encontrado</h2>
            <p>CEP: {cep}</p>
            <p>Rua:{logradouro}</p>
            <p>Bairro:{bairro}</p>
            <p>Cidade:{localidade}</p>
            <p>UF:{uf}</p>

        </div>
    );
}

export default Resultado