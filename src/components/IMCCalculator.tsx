import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

const IMCCalculator = () => {
    const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [resultado, setResultado] = useState<string>("");

  function validarIMC() {
    if (isNaN(Number(altura)) || isNaN(Number(peso))) return;

    const alt = Number(altura);
    const imc = Number(peso) / (alt * alt);

    if (imc < 18.6) {
      alert('Você está abaixo do seu peso! Seu IMC: ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! Seu IMC: ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Você está levemente acima do seu peso! Seu IMC: ' + imc.toFixed(2));
    } else {
      alert('Você está levemente acima do seu peso! Seu IMC: ' + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleWelcome}>CALCULADORA DE IMC!</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Digite sua Altura em Metros (EX. 1.70):'
        onChangeText={(txtAltura) => setAltura(parseFloat(txtAltura))}
        keyboardType='numeric'
      />
      <Text style={styles.label}>Sua altura é: {altura} Metros</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Digite seu Peso em KG (EX. 70KG)'
        onChangeText={(txtPeso) => setPeso(parseFloat(txtPeso))}
        keyboardType='numeric'
      />
      <Text style={styles.label}>Seu peso é: {peso} KG</Text>
      <TouchableOpacity style={styles.button} onPress={validarIMC}>
        <Text style={styles.textButton}>CALCULAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCF3F0', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWelcome: {
    fontSize: 30,
    fontFamily: 'Georgia', 
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default IMCCalculator;