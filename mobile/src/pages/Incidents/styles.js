import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#f0f0f5',

  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    marginTop: 48,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    color: '#737380',
    lineHeight: 24,
  },

  incidentsList: {
    marginTop: 32,
  },
  
  incident: {
    marginBottom: 16,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    fontSize: 15,
    color: '#e02041',
    fontWeight: 'bold',
  },

});

export default styles;