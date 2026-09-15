import Card from "./Card";

function Depoimento() {
  return (
    <section className="depoimentosAlunos">
      <h2>Depoimentos dos Alunos</h2>

      <div className="cards">
        <Card titulo="Ana ">
          <p>gostei muito do curso</p>

          <p>★★★★★</p>
        </Card>

        <Card titulo="Lucas">
          <p>Finalmente comecei a entender React.</p>

          <p>★★★★★</p>
        </Card>

        <Card titulo="Maria">
          <p>Os projetos me ajudaram bastante.</p>

          <p>★★★★☆</p>
        </Card>
        <Card titulo="Bruno">
          <p>Consegui meu primeiro trabalho home-office.</p>

          <p>★★★★☆</p>
        </Card>
      </div>
    </section>
  );
}

export default Depoimento;
