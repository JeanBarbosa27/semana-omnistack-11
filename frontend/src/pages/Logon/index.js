import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css'

import api from '../../services/api';

import herosImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

export default function Logon () {
  const [id, setId] = useState('');
  const history = useHistory();
  
  function handleLogin(event) {
    event.preventDefault();

    try {
      api.post('session', { id })
        .then(response => {
          localStorage.setItem('ongId', id);
          localStorage.setItem('ongName', response.data.name);
          history.push('/profile');
        });
    } catch(error) {
      alert('Ocorreu um erro ao realizar o login, por favor tente novamente!')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Logo Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça o seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <button 
            className="button"
            type="submit"
          >
            Entrar
          </button>

          <Link className="link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="Imagem com representação dos heros"/>
    </div>
  )
};
