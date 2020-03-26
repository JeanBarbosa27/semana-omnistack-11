import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css'
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function NewIncident () {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');

  const data = {
    title,
    description,
    value
  }

  async function handleNewIncident (event) {
    event.preventDefault();
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });
      history.push('/profile');
    } catch (error) {
      console.error('error: ', error);
      alert('Ocorreu um erro ao cadastrar o caso, por favor tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section className="form">
          <img src={logo} alt="Logo Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resulver isso.
          </p>
          <Link className="link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            type="text" 
            placeholder="Título do caso"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea 
            type="text" 
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input 
            type="text" 
            placeholder="Valor em reais"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button 
            className="button"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
};
