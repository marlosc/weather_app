import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from 'react-native';

export default function Weather() {
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [date, setDate] = useState('');
    const [cityFromApi, setCityFromApi] = useState('');


    const getWeather = async () => {
        if(city.length < 3) return
        const httpResponse = await axios.get('https://api.hgbrasil.com/weather', { params: { key: 'e098942c', city_name: city} })

        const cityValue = httpResponse.data.results.city;
        const temperatureValue = httpResponse.data.results.temp;
        const dateValue = httpResponse.data.results.date;

        setCityFromApi(cityValue)
        setTemperature(temperatureValue)
        setDate(dateValue)
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Image source={require('./src/Clima.png')} style={styles.imagem} />
      
          <View style={styles.resultadosContainer}>
            {cityFromApi ? (
              <>
                <Text style={styles.resultadoCidade}>{cityFromApi}</Text>
                <Text style={styles.resultadoData}>{date}</Text>
                <Text style={styles.titulo}>Clima:</Text>
                <Text style={styles.resultadoTemperatura}>{temperature}°</Text>
              </>
            ) : null}
          </View>
      
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            keyboardType="default"
            value={city}
            onChangeText={(text) => setCity(text)}
            placeholderTextColor="#F5FFFA"
            color="#FFFFFF"
          />
      
          <TouchableOpacity style={styles.botao} onPress={getWeather}>
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
        backgroundColor: '#1E90FF',
    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 5,
    },
    titulo: {
        fontSize: 30,
        marginBottom: 5,
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
        borderRadius: 90,
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
    },
    resultado: {
        fontSize: 40,
        marginVertical: 5,
        color: '#FFFFFF',
    },
    resultadosContainer: {
        alignItems: 'center',
        marginVertical: 20,
      },
      resultadoCidade: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 5,
      },
      resultadoData: {
        fontSize: 34,
        color: '#FFFFFF',
        marginBottom: 5,
      },
      resultadoTemperatura: {
        fontSize: 36,
        color: '#FFFFFF',
      },
      resultadosContainer: {
        alignItems: 'center',
        marginVertical: 20,
      },
      resultadoCidade: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 5,
      },
      resultadoData: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 5,
      },
      resultadoTemperatura: {
        fontSize: 36,
        color: '#FFFFFF',
      },

      resultadosContainer: {
        alignItems: 'center',
        marginVertical: 10,
      },
      resultadoCidade: {
        fontSize: 24,
        color: '#FFD700', 
        marginBottom: 5,
      },
      resultadoData: {
        fontSize: 28,
        color: '#FFD700',
        marginBottom: 5,
      },
      resultadoTemperatura: {
        fontSize: 36,
        color: '#FFFFFF',
      },
    });
    
    
