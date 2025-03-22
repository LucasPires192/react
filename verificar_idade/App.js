import React, {useState} from 'react';
import { View, TextInput, Text, Button} from 'react-native';
import {styles} from "./css/style.js";

const App = () =>{
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('Resultado');
  
  const verficarIdade = () => {
    const age = parseInt(idade);
    if(!isNaN(idade) && age > 0){
      if(idade >= 18){
        setResultado("Você é maior de idade!");
      } else {
        setResultado("Voce é menor de idade!");
      }
    }else{
      setResultado("Idade Invalida!");
    }
  }

  return(
    <View style = {styles.container}>
      <Text style = {styles.title}>
          Verificador de Idades
      </Text>
      <View style = {styles.div}>
        <TextInput
          style= {styles.textInput}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />
        <Button title= "Verificar Idade" onPress={verficarIdade} color= "#245878"/>
        <Text style= {styles.text}>
          {resultado}
        </Text>
      </View>
    </View>
  );
};

export default App;