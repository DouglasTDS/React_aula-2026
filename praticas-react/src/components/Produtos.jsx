import Produto from "./Produto";


function Produtos() {
    return (
        <section className="produtos">
            <h2>Nossos produtos</h2>
            <Produto
                nome='Espresso'
                categoria='Café'
                preco='15,99'
                descricao='teste descrição prod 1'
            />

            <Produto
                nome='Cappuccino'
                categoria='Café'
                preco='18,99'
                descricao='teste descrição prod 2' />
            <Produto
                nome='Chocolate'
                categoria='Chocolate'
                preco='25,99'
                descricao='teste descrição prod 3' />
            <Produto
                nome='Mocha'
                categoria='Chocolate'
                preco='24,85'
                descricao='Traz a intensidade e um toque amargo. Calda, cacau em pó ou chocolate derretido (ao leite ou amargo) que adiciona doçura.' />
            <Produto
                nome='Latte'
                categoria='Café'
                preco='24,90'
                descricao=' Leva cerca de 70% de leite vaporizado, 20% de café espresso e 10% de espuma fina. O resultado é uma bebida cremosa, suave e aveludada, onde o sabor do café é mais leve e o leite se destaca.' />
            <Produto
                nome='Chá gelado'
                categoria='Bebida gelada'
                preco='10,37'
                descricao=' Feito com folhas de Camellia sinensis (chá preto ou verde) ou ervas como mate e capim-limão.' />
        </section>
    );
}

export default Produtos;