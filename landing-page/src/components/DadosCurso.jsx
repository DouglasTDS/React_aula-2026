function DadosCurso() {

    const curso = {
        nome: "Javascript",
        cargaHoraria: 112,
        nivel: "Iniciante",
        ativo: true,
        instrutor: "Igor M"

       
    };

    const produto = {
        nome: "notebook",
        preco:2870 ,
        categoria:"Gamer",
        disponivel: true

    }

    const linguagem = [

        "java",
        "c#",
        "python",
        "lua",
        "cobol"


    ]


         const modulos =[
        "Fundamentos",
        "componentes",
        "props",
        "javaScript",
        "Estado"
    ];

    const tecnologias =[

        "React native",
        "blockChain",
        "5G",
        "Ciber segurança"
    ]

    const alunos  = [
        {
            nome: "Ana",
            idade: 20,
            ativo: true
        },

        {
            nome: "Lucas",
            idade: 22,
            ativo: true

        },

        {

            nome: "Marina",
            idade: 19,
            ativo: false
        }
    ];
     

    
    return (

        


        <section className= "dados-curso">
            <h2>Dadso do curso</h2>

            <p>Carga horária:{curso.cargaHoraria}</p>
            <p>Nível: {curso.nivel}</p>
            <p>Instrutor:{curso.instrutor}</p>

            <h3>Objeto Produto</h3>

            <p>Nome do produto: {produto.nome}</p>
            <p>Preço do produtop: {produto.preco}</p>
            <p>Categoria do produto:{produto.categoria}</p>
            <p>Disponibilidade do Produto:{produto.disponivel}</p>

            <h3>Módulos</h3>

            <p>{modulos[0]}</p>
            <p>{modulos[1]}</p>
            <p>{modulos[2]}</p>

            <p>Total de módulos: {modulos.length}</p>


            <h3>Alunos</h3>

            <p>Aluno 1: {alunos [0].nome}</p>
            <p>Idade: {alunos [0].idade}</p>

            <p>Aluno 2: {alunos[1].nome}</p>
            <p>Aluno 3: {alunos[2].nome}</p>

            <h3>Lista de linguagem</h3>

            <h3>Módulos</h3>

            <p>{linguagem[0]}</p>
            <p>{linguagem[2]}</p>
            <p>{linguagem[4]}</p>

            <h3>Quantidade de tecnologias</h3>

            <p>Total de tecnologias: {tecnologias.length}</p>




        </section>

    );
}



export default DadosCurso;