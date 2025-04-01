import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#0CFF8E',
  },

  input: {
    height: 40,
    border: 'solid black 1px',
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 8,
    backgroundColor: '#E5FFDC',
  },

  containerButton: {
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  divButton: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    borderTop: 'solid black 1px',
    borderRight: 'solid black 2px',
    borderBottom: 'solid black 2px',
    borderLeft: 'solid black 1px',
    borderRadius: 3,
  }
});