import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css'

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Modal from '../../components/layouts/Modal';

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
                  : '';

export default function Profile () {
  const [incidents, setIncidents] = useState([]);
  const [title, setTitle] = useState('Carregando casos...');
  const history = useHistory();
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')
  

  useEffect(() => {
    try {
      api.get('profile', {
        headers: {
          Authorization: ongId
        }
      }).then(response => {
        const loadedIncidents = response.data
        setIncidents(loadedIncidents);
        if (loadedIncidents.length) {
          setTitle('Casos cadastrados');
        } else {
          setTitle('Sua ONG ainda não possui casos cadastrados. Cadastre um caso clicando em "Cadastrar novo caso"');
        }
      })
    } catch(error) {
      console.error('error: ', error);
      setModalType('error')
      setModalTitle('Erro ao carregar os casos!')
      setModalContent('Ocorreu um erro ao tentar carregar os casos para a sua ONG, por favor tente novamente.')
      setShowModal(true)
    }
  }, [ongId])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));

    } catch(error) {
      console.log('error: ', error)
      alert('Ocorreu um erro ao deleter o incidente, por favor tente novamente')
      console.error('error: ', error);
      setModalType('error')
      setModalTitle('Erro ao deletar o caso!')
      setModalContent('Ocorreu um erro ao tentar deletar este caso da sua ONG, por favor tente novamente.')
      setShowModal(true)
    }
  }

  function handleLogout () {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Logo Be The Hero" />
        <span>Bem vinda, { ongName }</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
          <button
            onClick={handleLogout}
            type="button"
          >
            <FiPower size={16} color="#E02041" />
          </button>
      </header>
      <h1>{title}</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
            
            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

        ))}
      </ul>
      {modal}
    </div>
  )
};
