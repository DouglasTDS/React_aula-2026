


import Header from './components/Header'
import Hero from './components/Hero'
import Beneficios from './components/Beneficios'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import Depoimento from './components/Depoimento'
import Contatos from './components/Contatos'
import ResumoCurso from './components/ResumoCurso'
import StatusCurso from './components/StatusCurso'
import DadosCurso from './components/DadosCurso'
import './App.css'



function App() {

  return (
    <>
     <Header/>
     <Hero
     titulo='Aprenda programação  do zero'
     descricao='Um curso para quem quer começar na tecnologia'
     botao='Quero começar'

     />
   
     <Beneficios/>
     <StatusCurso/>
     <Formulario/>
    <Depoimento/>
    <Contatos/>
    <ResumoCurso/>
     <DadosCurso/>
     <Footer/>
    </>
  )
}

export default App
