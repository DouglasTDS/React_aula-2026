
import Header from "./components/Header"
import Produtos from "./components/produtos"
import Banner from "./components/banner"
import Footer from "./components/footer"
import Oferta from "./components/Oferta"
import './App.css'
 

function App() {


  return (
    <>
     <Header />
     <Banner 
     destaque="CAFÉ ESPECIAL"
     titulo= "Café para todos os momentos"
     descricao="Escolha o seu favorito e aproveite"
     
     />
     
     <Oferta
     titulo_promo="Grande Promoção do dia"
     descricao="Essa promoção é por tempo limitado"
     preco= "R$ 30,00 em desconto na compra de 3 bebidas " 
     />

     
     <Produtos/>

     <Footer 
     nome="Essenza Café"
     ano="© 2026 "
     />
    </>
  )
}

export default App 
