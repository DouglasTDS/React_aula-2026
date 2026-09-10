


import Header from './components/Header'
import Hero from './components/Hero'
import Beneficios from './components/Beneficios'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
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
     <Formulario/>
     <Footer/>
    </>
  )
}

export default App
