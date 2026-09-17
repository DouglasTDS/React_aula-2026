function StatusCurso() {
  const vagasTotais = 25;
  const alunosMatriculados = 22;
  const aulasConcluidas = 9;
  const totalAulas = 38;
  const valorAula = 50;

  function verificarVagas(total, matriculados) {
    if (matriculados < total) {
      return "vagas disponíveis";
    }

    return "Turma lotada";
  }

  function verificarAndamento(concluidas, total) {
    const percentual = (concluidas / total) * 100;

    if (percentual === 100) {
      return "Curso concluido";
    } else if (percentual >= 50) {
      return "Curso em andamento";
    } else {
      return "Curso no início";
    }
    }

  function calcularInvestimento(aulas, valor) {
      return aulas * valor;
    }
  

  const statusVagas = verificarVagas(vagasTotais, alunosMatriculados);

  const andamento = verificarAndamento(
    aulasConcluidas,

    totalAulas,
  );

  const investimento = calcularInvestimento(aulasConcluidas, valorAula);
const verificar = 25;
  function verificarIdade (idade){
  
  if (idade >=18) {

    return "Maior de idade "
  }
  else{

    return "Menor de idade"
  }

  }

  const numeral = 9;

  function verificarNumero (numero){

    if(numero >= 0){

      return "Positivo"
    }
    else{
      return "negativo"
    }

  }
const calculadora = 10;
  function calcularDobro (numeros){

    return numeros * 2
  }


  return (
    <section className="status-curso">
      <h2>Status do curso</h2>
      <p>{vagasTotais}</p>
      <p>{statusVagas}</p>
      <p>andamento: {andamento}</p>
      <p>investimento realizado: R${investimento}</p>
      <p>{verificarIdade(verificar)}</p>
      <p>{verificarNumero(numeral)}</p>
      <p>{calcularDobro(calculadora)}</p>
    </section>
  );
}

export default StatusCurso;
