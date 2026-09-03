import Card from "./Card";

function Destaques() {
  return (
    <section className="destaques">
      <h2>Destaques</h2>

      <Card titulo="Ofertas especiais">
        <h2>Oferta do dia </h2>
        <p>Capuccino com 20% de desconto</p>
      </Card>

      <Card tiulo="Novidade">
   <h4>Novidades da semana</h4>

   <p>Conheça nosso novo Mocha</p>

      </Card>

      <Card titulo="sobremesa famosa ">

    <h4>Faça sua criação</h4>
    <p> Venha e crie sua sobremesa e participe da promoção valendo a inclusão da sua sobremesa no nosso cardápio.</p>

   </Card>
    </section>
  );
}

export default Destaques;
