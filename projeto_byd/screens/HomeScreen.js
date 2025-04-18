import React from 'react';
import {styles} from '../assets/css/styles';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// Componentes básicos do React Native:
// - View: container para outros componentes (como div no HTML)
// - Text: exibe textos
// - Image: exibe imagens
// - ScrollView: permite rolagem do conteúdo
// - StyleSheet: para estilização

import Header from '../components/Header';
// Importa nosso componente de cabeçalho personalizado

const HomeScreen = () => {
  // Componente da tela inicial
  return (
    <ScrollView style={styles.container}>
      {/* ScrollView permite rolar quando o conteúdo é maior que a tela */}
      <Header logo={require('../assets/images/logo.png')} />
      {/* Componente Header com a logo */}
      
      <Image 
        source={require('../assets/images/carros.jpg')}
        style={styles.banner}
        resizeMode="cover"
        />
        {/* Imagem de banner com ajuste para cobrir o espaço */}
      
      
      <View style={styles.content}>
        {/* Container para o conteúdo textual */}
        <Text style={styles.title}>BYD</Text>
        {/* Texto com estilo de título */}
        <Text style={styles.text}>
          É uma marca e fabricante nascida na China em 1995 que apresenta soluções em eletromobilidade e energia solar através dos módulos fotovoltaicos, com compromisso global na redução ou nulidade de emissões poluentes.

Líder de mercado no Brasil, na comercialização  de carros elétricos e híbridos. 
        </Text>
        {/* Texto descritivo */}
      </View>
         
      <Image 
        source={require('../assets/images/byd.gif')}
        style={styles.banner}
        resizeMode="cover"
        />
        {/* Imagem de banner com ajuste para cobrir o espaço */}
    </ScrollView>
  );
};

export default HomeScreen;