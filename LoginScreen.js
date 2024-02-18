import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  
  const checkLoginAndPassword = () => {
    if(email.toLowerCase() == 'marloscesar6@gmail.com' && password == `5577`){
        navigation.navigate('Weather')    
    }  else {
        Alert.alert('Erro', 'Email ou senha incorretos');
      }


  }
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./src/Perfil.png')} style={styles.imagem} />

      <Text style={styles.titulo}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="#F5FFFA"
        color="#FFFFFF"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="#F5FFFA"
        color="#FFFFFF"
      />

      <TouchableOpacity style={styles.botao} onPress={checkLoginAndPassword}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    color: '#FFFFFF',
  },
  botao: {
    backgroundColor: '#228B22',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
  },
  resultado: {
    fontSize: 30,
    marginVertical: 5,
    color: '#FFFFFF',
  },
});
