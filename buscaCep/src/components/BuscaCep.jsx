

function BuscaCep({cep, setCep, buscarCep}) {
  return (
    <div>
        <input
        id= "cep"
        type="text"
        placeholder= "ex: 01001000"
        value={cep}
        onChange={(event) => {
            // hooks
            setCep(event.target.value);
        }}
        />

        <button onClick={buscarCep}>
            Procurar
        </button>
    </div>
  );
}

export default BuscaCep;