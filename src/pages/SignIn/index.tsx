import React from 'react';

import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Background, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu login</h1>

        <input placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="forgot">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
