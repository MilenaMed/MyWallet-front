import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext"

export default function TransactionsPage() {
  const navigate = useNavigate()
  const [valorMonetario, setValorMonetario] = useState("");
  const [descriçaoEntrada, setDescriçãoEntrada] = useState("");
  const dadosEntrada = { valorMonetario, descriçaoEntrada }
  const { token } = useContext(AuthContext);

  function enviarEntrada(event) {
    event.preventDefault()
    const URL = `http://localhost:5000/nova-transacao/:entrada`

    if(valorMonetario.length>0 && descriçaoEntrada.length>0){
    const promise = axios.post(URL, dadosEntrada, { headers: { 'Authorization': `Bearer ${token}` } })
    promise.then(response => {
      console.log(dadosEntrada)
      alert("Entrada cadastrada com sucesso")
      navigate('/home')
    })
    promise.catch((err) => {
      console.log(err)
    })
    } else {
    alert("erro: todos os campos são obrigatórios")
    }

  }

  return (
    <TransactionsContainer>
      <h1>Nova TRANSAÇÃO</h1>
      <form>
        <input
          placeholder="Valor"
          type="text"
          required value={valorMonetario}
          onChange={(e) => setValorMonetario(e.target.value)} />
        <input
          placeholder="Descrição"
          type="text"
          required value={descriçaoEntrada}
          onChange={(e) => setDescriçãoEntrada(e.target.value)} />
        <button onClick={enviarEntrada}>Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
