function Tarefa ({ tarefa, alternarStatus, removerTarefa}) {

    return (

        <article className={tarefa.concluida ? "tarefa concluida" : "tarefa"}> 
        <div>
            <h3>{tarefa.texto}</h3>

            <p>
                status:
                <strtong>{tarefa.concluida ? "concluida" : "pendente"}

                </strtong>

            </p>
        </div>

        <div className="acoes">
            <button
            type=" button"
            onClick={() => {
                alternarStatus (tarefa.id);

            }}
            >
                {tarefa.concluida ? "Reabrir" : "Concluidr"}

            </button>

            <button
            
            type="button"
            className="remover"
            onClick={()=> {
                removerTarefa(tarefa.id);
            }}
            >
                Remover

            </button>
        </div>
        </article>
    );
}

export default Tarefa;