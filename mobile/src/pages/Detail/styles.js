import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
    backgroundColor: '#f0f0f5',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incidentContainer: {
    marginTop: 48,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  
  incident: {
    padding: 24,
  },

  incidentGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    marginBottom: 16,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },

  heroTitle: {
    fontSize: 20,
    color: '#13131a',
    fontWeight: 'bold',
    lineHeight: 30,
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: '#737380',
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    width: '48%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e02041',
    borderRadius: 8,
  },

  actionText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  }

});

export default styles;