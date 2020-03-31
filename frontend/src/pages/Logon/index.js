import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css'

import api from '../../services/api';

import herosImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'
import Modal from '../../components/layouts/Modal';

export default function Logon () {
  const [id, setId] = useState('');
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const modal = showModal
                  ? (
                    <Modal type={modalType} title={modalTitle}>
                      {modalContent}
                    </Modal>
                  )
                  : ''
  
  function handleLogin(event) {
    event.preventDefault();

    api.post('session', { id })
      .then(response => {
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');
      }).catch(error => {
        console.error('error: ', error);
        setModalType('error')
        setModalTitle('Erro ao realizar o login!')
        setModalContent('Ocorreu um erro ao realizar o login da sua ONG, por favor confirme a sua ID e tente novamente.')
        setShowModal(true)
      });
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
      {modal}
    </div>
  )
};
