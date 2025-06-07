import React, { use, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSignupMutation } from '../assets/redux/Services/authServices';



export default function Register({ navigation }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const [triggerSingUp, result] = useSignupMutation()

  const handleRegister = () => {
    if (email && password) {
      triggerSingUp({ email, password })

      alert('Registro exitoso, por favor inicia sesión');
      navigation.navigate('Login');
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput style={styles.input} placeholder="Usuario" onChangeText={(text) => setemail(text)} />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Registrar" onPress={handleRegister} />
      <Button title="¿Ya tienes cuenta? Inicia sesión" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
