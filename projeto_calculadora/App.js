import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {styles} from './css/style.js';

const App = () =>{
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularSoma = ()=>{
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)){
      setResultado((num1 + num2).toString());
    }else{
      setResultado('Entrada Inválida!');
    }
  };

  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput 
        style={styles.input}
        placeholder="Digite um número"
        keyboradType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <TextInput 
        style={styles.input}
        placeholder="Resultado"
        value={resultado}
        onChangeText={setResultado}
        editable={false}
      />
      <Button title="Calcular" onPress={calcularSoma}/>
    </View>
  );
};

export default App;