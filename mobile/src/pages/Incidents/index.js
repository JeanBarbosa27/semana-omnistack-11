import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles';
import logo from '../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [incidents, setIncidents] = useState([]);
  const [page, setPage] = useState(1);
  const incidentsCount = total === 1 ? '1 caso' : `${total} casos`;

  async function loadIncidents() {
    if(loading && total > 0 && incidents.length === total) {
      return false;
    }

    const response = await api('incidents', { 
      params: { page }
    });

    setTotal(response.headers['x-total-count']);

    setLoading(true);
    setIncidents([...incidents, ...response.data]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{incidentsCount}</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>
        {
          total === 0
            ? 'Que pena, ainda não há casos disposníveis, verifique novamente mais tarde!'
            : 'Escolha um dos casos abaixo e salve o dia'
        }
      </Text>

      <FlatList
        style={styles.incidentsList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        onEndReachedThreshold={0.2}
        onEndReached={loadIncidents}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>
              CASO:
            </Text>
            <Text style={styles.incidentValue}>
              {incident.title}
            </Text>
            <Text style={styles.incidentProperty}>
              ONG:
            </Text>
            <Text style={styles.incidentValue}>
              {incident.name}
            </Text>
            <Text style={styles.incidentProperty}>
              VALOR:
            </Text>
            <Text style={styles.incidentValue}>
              {
                Intl.NumberFormat(
                  'pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL'
                  }
                ).format(incident.value)
              }
            </Text>
            <TouchableOpacity 
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
              </Text>
              <Feather name="arrow-right" size={16} color='#e02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
