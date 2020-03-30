import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css'

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import Modal from '../../components/layouts/Modal';

export default function Register () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();

  const [ongId, setOngId] = useState('')

  function modalOnClose() {
    history.push('/')
  }

  const modal = ongId !== ''
                  ? (
                    <Modal type="success" title="Cadastro concluído!" onClose={modalOnClose} >
                      Parabéns, seu cadastro foi concluído com sucesso! Anote sua ID para realizar o login: {ongId}
                    </Modal>
                  )
                  : ''

  async function handleRegister (event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    }

    try {
      const response = await api.post('ongs', data)
      setOngId(response.data.id);
    } catch (error) {
      console.error('error: ', error);
      alert('Erro ao realizar o cadastro, por favor tente novamente.')
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section className="form">
          <img src={logo} alt="Logo Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG
          </p>
          <Link className="link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={ event => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={ event => setEmail(event.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={ event => setWhatsapp(event.target.value)}
          />
          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={ event => setCity(event.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              value={uf}
              onChange={ event => setUf(event.target.value)}
              style={{
                width: 80
              }}
            />
          </div>
          <button 
            className="button"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
      {modal}
    </div>
  )
};
