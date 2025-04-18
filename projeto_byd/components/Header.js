import React from 'react';
import {styles} from '../assets/css/styles.js';
import { View, Image, StyleSheet, Text } from 'react-native';

const Header = ({ logo }) => {
  // Componente funcional que recebe 'logo' como prop
  return (
    <View style={styles.header}>
      {/* Container do cabeçalho */}
      <Image 
        source={logo} 
        style={styles.logo} 
        resizeMode="contain"
        />
      <Text style={styles.text}>
        Build your dreams
      </Text>
     {/* Imagem que mantém proporção dentro do espaço */}

    </View>
  );
};

export default Header;