import styled from 'styled-components';
import { shade } from 'polished';
import background from '../../assets/signInBackground.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  form {
    margin: 60px 0;
    width: 360px;
    max-width: 100%;
    text-align: center;

    h1 {
      margin-bottom: 30px;
    }

    input {
      background: #181e26;
      border-radius: 5px;
      height: 45px;
      padding: 15px;
      border: 2px solid #181e26;
      color: #eee;
      width: 100%;

      &::placeholder {
        color: #42464b;
      }

      & + input {
        margin-top: 10px;
      }
    }

    button {
      color: #333;
      background: #0071fe;
      border: 0;
      border-radius: 5px;
      height: 45px;
      padding: 0 15px;
      width: 100%;
      margin-top: 15px;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#0071fe')};
      }
    }

    a {
      color: #eee;
      text-decoration: none;
      margin-top: 15px;
      display: block;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#eee')};
      }
    }
  }

  > a {
    color: #0071fe;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    svg {
      margin-right: 5px;
    }
    &:hover {
      color: ${shade(0.2, '#0071fe')};
    }
  }
`;
export const Background = styled.div`
  background: url(${background}) no-repeat top center;
  background-size: cover;
  flex: 1;
  height: 100%;
`;
