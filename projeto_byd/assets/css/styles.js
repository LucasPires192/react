import {StyleSheet} from 'react-native';

const _borderColor = "#ececec";
const fontColor = "#ececec";

export const styles = StyleSheet.create({
  

  // Objeto de estilos (similar ao CSS)
  header: {
    alignItems: 'center', // Centraliza horizontalmente
    padding: 15,         // Espaçamento interno
    backgroundColor: '#303133', // Fundo branco
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: _borderColor,
    opacity: 0.8,
  },
  logo: {
    width: 180,         // Largura fixa
    height: 70,         // Altura fixa
  },
  container: {
    flex: 1,            // Ocupa todo o espaço disponível
    backgroundColor: '#303133', // Fundo branco
    padding: 5,
    fontFamily: 'Montserrat',
  },
  banner: {
    width: '100%',      // Largura total
    height: 200,        // Altura fixa
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: fontColor,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: fontColor,
    marginBottom: 15,
    alignText: 'center',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: fontColor,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  listContent: {
    padding: 10,
  },
  modelCard: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#5e6066',
    elevation: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: _borderColor,
    padding: 3,
  },
  modelImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modelInfo: {
    padding: 15,
  },
  modelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: fontColor,
    textAlign: 'center',
  },
  modelDescription: {
    fontSize: 14,
    color: fontColor,
    textAlign: 'center',
  },
  galleryContainer: {
    width: '100%',
    padding: 5,
  },
  galleryImage: {
    width: '100%',
    height: 160,
    margin: '1% auto',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: _borderColor,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  socialIcon: {
    marginHorizontal: 15,
  },
  // ... outros estilos
});