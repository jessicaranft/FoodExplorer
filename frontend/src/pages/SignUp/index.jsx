import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Branding, Form } from './styles';
import logo from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Todos os campos devem ser preenchidos.");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }

  return (
    <Container>
      <div className="content-wrapper">
        <Branding>
          <img src={logo} alt="logo com um polígono azul de seis lados" />
          food explorer
        </Branding>

        <Form>
          <h1>Crie sua conta</h1>
          <div>
            <label htmlFor="name">Seu nome</label>
            <Input
              type="text"
              id="name"
              placeholder="Exemplo: Maria da Silva"
              showIcon={false}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              id="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              showIcon={false}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              id="password"
              placeholder="No mínimo 6 caracteres"
              showIcon={false}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button
            title="Criar conta"
            showIcon={false}
            tomato100
            onClick={handleSignUp}
          />

          <p>
            <Link to="/">
              Já tenho uma conta
            </Link>
          </p>

        </Form>
      </div>
    </Container>
  );
}