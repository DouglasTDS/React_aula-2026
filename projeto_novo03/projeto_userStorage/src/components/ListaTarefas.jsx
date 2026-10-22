import Tarefa from  "./Tarefa.jsx";

function ListaTarefas ({ tarefas, alternarStatus, removerTarefa}) {

    if (tarefas.length === 0) {

        return <p className="lista_vazia">Nenhuma tarefa cadastrada</p>;
    }

    return (
        <section className="lista">
            {tarefas.map((tarefa) => {
                return (
                    <Tarefa
                    key = {tarefa.id}
                    tarefa={tarefa}
                    alternarStatus={alternarStatus}
                    removerTartefa={removerTarefa}
                    />
                );
            }
        )}

        </section>
    );
}

export default ListaTarefas;