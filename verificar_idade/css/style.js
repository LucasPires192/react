import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: "#245878",
  },

  title: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 20,
    color: "#E3E2E2",
  },

  div: {
    backgroundColor: "#347FAD",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRight: "2px solid #363535",
    borderBottom: "2px solid #363535",
  },

  textInput: {
    padding: 16,
    marginBottom: 20,
    borderTop: "1px solid #ADADAD",
    borderRight: "1px solid #363535",
    borderBottom: "1px solid #363535",
    borderLeft: "1px solid #ADADAD",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "#43A3DE",
  },
  text: {
    height: 80,
    textAlign: "center",
    fontSize: 25,
    padding: 5,
    marginTop: 20,
    alignContent: "center",
    borderRadius: 5,
    color: "#E3E2E2",
    backgroundColor: "#43A3DE",
  },
});

