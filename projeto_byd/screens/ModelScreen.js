import React from 'react';
import {styles} from '../assets/css/styles.js';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
// FlatList é otimizado para listas longas (renderiza apenas itens visíveis)
import Header from '../components/Header';

const models = [
  // Array de objetos com dados dos produtos
  {
    id: '1', // Chave única obrigatória
    name: 'Dolphin Mini',
    description: 'O BYD Dolphin Mini é mais do que um veículo elétrico, ele é a representação da visão da BYD em popularizar a tecnologia no Brasil, tornando-a acessível e atraente.',
    image: require('../assets/images/dolphin_mini.jpg'),
  },
  {
    id: '2', // Chave única obrigatória
    name: 'Han EV',
    description: 'O BYD Han EV leva você a uma emocionante viagem, com aceleração de 0-100 km/h em apenas 3,9s. A tração elétrica integral funciona em tempo real e proporciona excelente controle de tração em todas as condições. Explore o seu mundo, com muita potência.',
    image: require('../assets/images/han_EV.jpg'),
  },
  {
    id: '3', // Chave única obrigatória
    name: 'Yuan Pro',
    description: 'O BYD Yuan Pro integra uma aparência atraente, direção confortável e segurança.',
    image: require('../assets/images/yuan_pro.jpg'),
  },
  // ... outros produtos
];

const ModelScreen = () => {
  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      
      <FlatList
        data={models} // Fonte de dados
        keyExtractor={(item) => item.id} // Extrai chaves únicas
        renderItem={({ item }) => ( // Como renderizar cada item
          <View style={styles.modelCard}>
            <Image source={item.image} style={styles.modelImage} />
            <View style={styles.modelInfo}>
              <Text style={styles.modelName}>{item.name}</Text>
              <Text style={styles.modelDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent} // Estilo da lista
      />
    </View>
  );
};

export default ModelScreen;