import './App.css'
import {useState} from "react"
import CardConfiguracao from "./components/cardConfiguracao"

function App() {
  const [notificacoes, setNotificacoes] = useState(true)
  const [temaEscuro, setTemaEscuro] = useState(true)
  const [perfilVisivel, setPerfilVisivel] = useState(true)

  function alterarNotificacao(){
    setNotificacoes(!notificacoes)
  }

  function alterarTema(){

    setTemaEscuro(!temaEscuro)
  }


  function alterarPerfil(){
    setPerfilVisivel(!perfilVisivel)
  }

  return (
    <div>
      <main className={temaEscuro ? 'app escuro' : 'app claro'}>
      <h1>Painel de configurações</h1>

      <CardConfiguracao titulo={notificacoes}>

        <p>
          Status: {notificacoes ? "Atividades" : "Desativadas"}  
        </p>

        <button onclick={alterarNotificacao}>{notificacoes ? "Ativar " : "Desativar"}</button>
      </CardConfiguracao>

      <CardConfiguracao titulo= {'Tema'}>
        <p>Tema Atual {temaEscuro ? 'Escuro'  : 'Claro'}</p>
        <button onclick={alterarTema}>Alterar tema</button>
      </CardConfiguracao>

      <CardConfiguracao tiutlo={'Perfil'}>

        <p>Status: {perfilVisivel ? "Esconder Perfil" : "Mostrar perfil"}</p>

        <button onClick={alterarPerfil}>
          {perfilVisivel ?  "Esconder perfil" : "Mostrar perfil"}
          
          </button>
       
      </CardConfiguracao>

       {perfilVisivel && (
          <div className="perfil">
            <h3>Perfil do usuário</h3>
            <p>Estudante React</p>
          </div>
        )}

     </main>
    </div>
  )
}

export default App
