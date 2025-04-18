import React from 'react';
import {styles} from '../assets/css/styles.js';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
// Linking: para abrir URLs externas
// TouchableOpacity: botão que diminui opacidade quando pressionado
import { Ionicons, Entypo, FontAwesome6} from '@expo/vector-icons'; // Ícones
import Header from '../components/Header';

const ContactScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:byd@fsb.com.br'); // Abre cliente de email
  };
  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/BYD.Brasil.Auto'); // Abre cliente de email
  };
  const handleXPress = () => {
    Linking.openURL('https://twitter.com/BrasilBYD');
  };
  const handleInstagranPress = () => {
    Linking.openURL('https://www.instagram.com/bydautobrasil/');
  };
  const handleLinkedinPress = () => {
    Linking.openURL('https://www.linkedin.com/company/byd-auto-brasil/?viewAsMember=true');
  };
  const handleYoutubePress = () => {
    Linking.openURL('https://www.youtube.com/@bydautobrasil5408');
  };

  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Entre em Contato</Text>
        
        <TouchableOpacity 
          style={styles.contactItem} 
          onPress={handleEmailPress}   
        >
        {/* Botão clicável */}
          <Ionicons name="mail" size={24} color="#6200ee" />
          <Text style={styles.contactText}>byd@fsb.com.br</Text>
        </TouchableOpacity>

          <TouchableOpacity 
          style={styles.contactItem}
        >
        {/* Botão clicável */}
          <Entypo name="phone" size={24} color="#6200ee" />
          <Text style={styles.contactText}>4004-0658</Text>
        </TouchableOpacity>
        
        {/* ... outros botões de contato */}
        
        <View style={styles.socialMedia}>
          {/* Container para ícones sociais */}
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={handleFacebookPress}
          >
            <Ionicons name="logo-facebook" size={32} color="#ececec" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={handleInstagranPress}
          >
            <Ionicons name="logo-instagram" size={32} color="#ececec" />
          </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialIcon}
              onPress={handleXPress}
            >
            <FontAwesome6 name="x-twitter" size={32} color="#ececec" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={handleLinkedinPress}
          >
            <Ionicons name='logo-linkedin' size={32} color="#ececec" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={handleYoutubePress}
          >
            <Ionicons name='logo-youtube' size={32} color='#ececec' />
          </TouchableOpacity>
          {/* ... outros ícones */}
        </View>
      </View>
    </View>
   
  );
};

export default ContactScreen;