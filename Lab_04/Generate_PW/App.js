import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';

export default function App() {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let characterPool = '';
    if (includeLowerCase) characterPool += lowerCaseLetters;
    if (includeUpperCase) characterPool += upperCaseLetters;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (!characterPool) return;

    let password = '';
    const length = parseInt(passwordLength) || 0;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <Text style={styles.generatedPassword}>{generatedPassword || 'Generated Password'}</Text>

      <View style={styles.inputContainer}>
        <Text style={{color:'white',fontSize:20}}>Password length</Text>
        <TextInput
          style={styles.input}
          value={passwordLength}
          onChangeText={setPasswordLength}
          keyboardType="numeric"
          placeholder="Enter length"
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={{color:'white',fontSize:20}}>Include lower case letters</Text>
        <Switch
          value={includeLowerCase}
          onValueChange={(value) => setIncludeLowerCase(value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={{color:'white',fontSize:20}}>Include uppercase letters</Text>
        <Switch
          value={includeUpperCase}
          onValueChange={(value) => setIncludeUpperCase(value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={{color:'white',fontSize:20}}>Include numbers</Text>
        <Switch
          value={includeNumbers}
          onValueChange={(value) => setIncludeNumbers(value)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={{color:'white',fontSize:20}}>Include special symbols</Text>
        <Switch
          value={includeSymbols}
          onValueChange={(value) => setIncludeSymbols(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23235B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  generatedPassword: {
    backgroundColor: '#3e3e5c',
    color: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
    minWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3e3e5c',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
