function Profissional ({profissional }) {

    const {
        nome,
        profissao,
        cidade,
        atendeOnline,
        atendePresencial

    } = profissional;

    function verificarOnline(atendimentoOnline){

        if (atendimentoOnline){
            return "Atendimento online disponível";
        }

        return "Sem atendimento online";
    }
    function verificarPresencial (atendePresencial) {
        if (atendePresencial) {

            return "Atendimento presencial disponível";


        }

        return "sem atendimento Presencial";
    }

    return (
        <section className = "Profisional" id = "profissional">

                  <p className="e tiqueta">PROFISSIONAL</p>
                  <h2>{nome}</h2>
                  <p>{profissao}</p>
                  <p>{cidade}</p>
                  <p>{verificarOnline(atendeOnline)}</p>
                  <p>{verificarPresencial(atendePresencial)}</p>
        </section>
  
    )
}

export default Profissional;

