import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Branding, Form } from './styles';
import logo from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div className="content-wrapper">
        <Branding>
          <img src={logo} alt="logo com um polígono azul de seis lados" />
          food explorer
        </Branding>

        <Form>
          <h1 className="desktop-only">Faça login</h1>
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
            title="Entrar"
            showIcon={false}
            tomato100
            onClick={handleSignIn}
          />
          
          <p>
            <Link to="/register">
              Criar uma conta
            </Link>
          </p>
        </Form>
      </div>
    </Container>
  );
}