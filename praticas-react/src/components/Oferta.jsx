function Oferta({titulo_promo, descricao, preco}) {

    return (

        
       < div className="oferta">

        <p>{titulo_promo}</p>
        <p>{descricao}</p>
        <p>{preco}</p>
       </div>
        
    );
}

export default Oferta;