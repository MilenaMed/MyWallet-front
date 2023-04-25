import { Link } from "react-router-dom";
import styled from "styled-components";
import MyWalletLogo from "../components/MyWalletLogo";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

const URL = `http://localhost:5000/cadastro`

export default function SignUpPage() {
  const navigate = useNavigate()
  const [nomeUsuário, setNomeUsuario] = useState("")
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ConfirmaçãoSenha, setConfirmaçãoSenha] = useState("");

  function passarDados(event) {
    event.preventDefault()
    const EmailValido = /\S+@\S+\.\S+/;
    const dados = { nomeUsuário, email, senha}

    if (nomeUsuário.length > 0 && (email.search(EmailValido) !== -1) && email.length > 11 && senha.length >= 3 && senha === ConfirmaçãoSenha) {
      const promise = axios.post(URL, dados)
        promise.then(response => {
            alert("Usuário cadastrado com sucesso")
            navigate('/')
        })
        promise.catch((err) => {
            console.log(err)
        })
    } else {
      alert("erro: preencha os dados corretamente")
    }
  }

  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />
        <input
          placeholder="Nome"
          name="name"
          type="text"
          required value={nomeUsuário}
          onChange={(e) => setNomeUsuario(e.target.value)} />
        <input placeholder="E-mail"
          type="email"
          required value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          autocomplete="new-password"
          required value={senha}
          onChange={(e) => setSenha(e.target.value)} />
        <input
          placeholder="Confirme a senha"
          type="password"
          autocomplete="new-password"
          required value={ConfirmaçãoSenha}
          onChange={(e) => setConfirmaçãoSenha(e.target.value)} />
        <button onClick={passarDados}>
          Cadastrar
        </button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
