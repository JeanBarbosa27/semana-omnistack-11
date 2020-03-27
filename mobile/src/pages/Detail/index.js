import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logo from '../../assets/logo.png';


export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident: {
    city,
    description,
    name,
    email,
    title,
    uf,
    value,
    whatsapp,
  } } = route.params;

  const valueFormated = Intl
                          .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                          .format(value)

  const message = `Olá ${name}, estou entrando em contato pois gostaria de ajudar no caso "${title}" com o valor de ${valueFormated}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${whatsapp}&text=${message}`)
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${title}`,
      recipients: [email],
      body: message,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={navigateBack}
        >
          <Feather 
            name="arrow-left"
            size={20}
            color="#e02041"
          />
        </TouchableOpacity>
      </View>
      <ScrollView 
        fadingEdgeLength={0} 
        showsVerticalScrollIndicator={false} 
        style={styles.incidentContainer}
      >
        <View style={styles.incident}>
          <View style={styles.incidentGroupContainer}>
            <View style={{width: '60%',}}>
              <Text style={styles.incidentProperty}>
                CASO:
              </Text>
              <Text style={styles.incidentValue}>
                {title}
              </Text>
            </View>
            <View style={{width: '30%',}}>
              <Text style={styles.incidentProperty}>
                ONG:
              </Text>
              <Text style={styles.incidentValue}>
              {name}
              </Text>
            </View>
          </View>
          <Text style={styles.incidentProperty}>
            DESCRIÇÃO:
          </Text>
          <Text style={styles.incidentValue}>
            {description}
          </Text>
          <View style={styles.incidentGroupContainer}>
            <View style={{width: '50%',}}>
              <Text style={styles.incidentProperty}>
                CIDADE / UF:
              </Text>
              <Text style={styles.incidentValue}>
                {city} / {uf}
              </Text>
            </View>
            <View style={{width: '40%',}}>
            <Text style={styles.incidentProperty}>
              VALOR:
            </Text>
            <Text style={styles.incidentValue}>
              { valueFormated }
            </Text>
            </View>
          </View>
          
        </View>
      </ScrollView>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>
          Salve o dia!
        </Text>
        <Text style={styles.heroTitle}>
          Seja o herói desse caso.
        </Text>
        <Text style={styles.heroDescription}>
          Entre em contato:
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.action}
            onPress={sendWhatsapp}
          >
            <Text style={styles.actionText}>
              WhatsApp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.action}
            onPress={sendEmail}
          >
            <Text style={styles.actionText}>
              E-mail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
