

import {useState  } from"react"
import BuscaCep from "./components/BuscaCep";
import Resultado from "./components/Resultado";


function App() {
  const [cep, setCep] = useState('');
  const [ endereco, seteEndereco]= useState('');
  const [erro,setErro]= useState('');

  async function buscarCep(){
    // REGEX CEP pesquisar
    const cepLimpo = cep.replace(/\D/g, '')

    if (cepLimpo.length !== 8){
      setErro("Digite um CEP com oito números")
      return;
    }

    try {

      //GET,POST,UPDATE, DELETE

      const res =  await fetch (`https://viacep.com.br/ws/${cepLimpo}/json/`)
      // re.jason = formato de objeto {}
       const dados = await res.json()
       if (dados.erro) {
        setErro("Cep não encontrado");
        return;
       }

       seteEndereco(dados);
      
    } catch (error) {
      setErro("Não foi possível consultar o CEP");
      
    }
  }






  return (

    <div>

     <h1>Busca Endereço</h1>
     <BuscaCep cep={cep} setCep={setCep} buscarCep={buscarCep}/>
     <Resultado endereco={endereco}/>
       {erro && <p>{erro}</p>}
    </div>
  )
}

export default App
