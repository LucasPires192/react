import React from 'react';
import {styles} from '../assets/css/styles';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Sobre a BYD</Text>
        
        <Image 
          source={require('../assets/images/empresa.jpg')} 
          style={styles.image}
          resizeMode="cover"
        />
        
        <Text style={styles.text}>
          Fundada em 1995, a BYD é uma empresa líder em tecnologia dedicada a alavancar inovações para uma vida melhor. Com mais de 28 anos de experiência, a BYD se estabeleceu como líder do setor de eletrônicos, automotivo, energia renovável e transporte ferroviário. Como líder global com mais de 30 parques industriais em 6 continentes, as soluções de emissão zero da BYD, focadas na geração e armazenamento de energia, são expansivas e amplamente aplicáveis.
        </Text>
        
        <Text style={styles.subtitle}>Nossos Valores</Text>
        <Text style={styles.text}>
          •	Excelência: Motivar sonhos por meio de vitalidade{"\n"}
          •	Pragmatismo: Transformar sonhos em realidade{"\n"}
          •	Paixão: Impulsionar sonhos{"\n"}
          •	Inovação: Transpôr barreiras na busca por sonhos{"\n"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;