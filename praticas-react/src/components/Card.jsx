function Card ({children, titulo}){

    return (
<section className="card">

        <h3>{titulo}</h3>
        <p>{children}</p>
       
        </section>
    );
}

export default Card;