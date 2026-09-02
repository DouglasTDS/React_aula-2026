function Produto({ nome, preco, descricao,categoria }) {
    return (
        <div className="produto">
            <h3>{nome}</h3>
            <h4>{categoria}</h4>
            <p>{descricao}</p>
            <strong>{preco}</strong>
        </div>
    );
}
export default Produto

