function Banner({destaque, titulo, descricao}) {
    return (
        <section className="banner">
             <p>{destaque}</p>
            <h2>{titulo}</h2>
            <span>
                {descricao}
            </span>
        </section>
    );
}

export default Banner;