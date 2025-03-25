import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {styles} from "./css/style.js";

const App = () =>{
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');
  const [resultado, setResultado] = useState('Resultado');

  const calcularMedia = () =>{
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    const n4 = parseFloat(nota4);

    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)){
      const media = (n1 + n2 + n3 + n4) / 4;

      if(media >= 6){
        setResultado("Média: " + media + " Aprovado 😎");
      }else if(media >= 4 && media < 6){
        setResultado("Média: " + media + " Recuperação 😐");
      }else{
        setResultado("Média: " + media + " Reprovado 😭 ");
      }
    }else{
      setResultado("Valor das notas invalidos! 🤔" );
    }
  };
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a 1º nota:"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a 2º nota:"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a 3º nota:"
        keyboardType="numeric"
        value={nota3}
        onChangeText={setNota3}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a 4º nota:"
        keyboardType="numeric"
        value={nota4}
        onChangeText={setNota4}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a 4 nota:"
        keyboardType="numeric"
        value={resultado}
        onChangeText={setResultado}
        editable={false}
      />
      <Button title="Calcular Média" onPress={calcularMedia}/>
    </View>
  );
}; 

export default App;