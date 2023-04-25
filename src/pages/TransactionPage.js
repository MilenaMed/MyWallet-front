import styled from "styled-components"
import { useContext,useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";
import { AuthContext } from "../context/authContext"

export default function TransactionsPage() {
  const navigate = useNavigate()
  const [valorMonetario, setValorMonetario] = useState("");
  const [descriçaoEntrada, setDescriçãoEntrada] = useState("");
  const dadosEntrada = { valorMonetario, descriçaoEntrada }
  const { token} = useContext(AuthContext);
  let { TypeId } = useParams()

  useEffect(() => {

    if (!token) navigate("/");

  });

  function enviarEntrada(event) {
    event.preventDefault()
    const URL = `http://localhost:5000/nova-transacao/:${TypeId}`

    if (valorMonetario.length > 0 && descriçaoEntrada.length > 0) {
      const promise = axios.post(URL, dadosEntrada, { headers: { 'Authorization': `Bearer ${token}` } })
      promise.then(response => {
        console.log(dadosEntrada)
        alert("Entrada cadastrada com sucesso")
        navigate('/home')
      })
      promise.catch((err) => {
        console.log(err)
      }, [TypeId])
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
