import React from 'react'

function Resumo({resumo}) {

    const {
        atendimentosHoje,
        valorRecebido,
        horariosDisponiveis
    } = resumo

    
  return (
    <section className = "resumno" id = "resumo">
        <h2>Resumo do dia</h2>
        <div className="resumo-cards">

            <div>
                <strong>{atendimentosHoje}</strong>
                <span>Atendimento hoje</span>
            </div>

            <div>
                <strong>R${valorRecebido}</strong>
                <span>Valor recebido</span>
            </div>
            <div>
                <strong>R${horariosDisponiveis}</strong>
                <span>Horários disponiveis</span>
            </div>
        </div>
    </section>
  );
}

export default Resumo;