import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IMCCalculator from './src/components/IMCCalculator'; 
import theme from './src/styles/theme';


function App() {
  return (
    <View>
      <IMCCalculator />
    </View>
  );
}

export default App;
