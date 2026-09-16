
function ResumoCurso (){

    const curso = "REACT";
    const nomeInstrutor = "Igor Medeiros";
    const turma = "React 2026"
    const alunosMatriculados = 20;
    const cargaHoraria = 112;
    const aulasConcluidas = 10;
    const valorAula = 100;
    const ativo = true;
    const horasEstudadas = aulasConcluidas * 3;
    const valorTotal = cargaHoraria * valorAula;
    const faltamAulas = 38 - aulasConcluidas;
    const vagasDisponiveis = 25;


    return( 


            <section className="resumo-curso">

                <h2>Resumo do curso</h2>


                <p>Curso: {curso}</p>
                <p>Nome do instrutor: {nomeInstrutor}</p>
                <p>Turma: {turma}</p>
                <p>Alunos matriculados: {alunosMatriculados}</p>
                <p>Carga horária: {cargaHoraria}</p>
                <p>Aulas concluidas: {aulasConcluidas}</p>
                <p>Horas estudads: {horasEstudadas}</p>
                <p>Valor total: R$ {valorTotal}</p>
                <p>Aulas restantes: {faltamAulas}</p>
                <p>Curso ativo: {String(ativo)}</p>
                <p>Vagas Disponíveis: {vagasDisponiveis}</p>


            </section>
    );
}


export default ResumoCurso;