import React from 'react';
import {styles} from '../assets/css/styles.js';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';

const images = [
  require('../assets/images/gallery1.jpg'),
  require('../assets/images/gallery2.jpg'),
  require('../assets/images/gallery3.jpg'),
  require('../assets/images/gallery4.jpg'),
  require('../assets/images/gallery5.jpg'),
  require('../assets/images/gallery6.jpg'),
  require('../assets/images/gallery7.jpg'),
  require('../assets/images/gallery8.jpg'),
  // Adicione mais imagens conforme necessário
];

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      
      <Text style={styles.title}>Galeria de Imagens</Text>
      
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <Image source={item} style={styles.galleryImage} />
        )}
        contentContainerStyle={styles.galleryContainer}
      />
    </View>
  );
};

export default GalleryScreen;