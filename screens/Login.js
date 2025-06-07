import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../assets/redux/Services/authServices';
import { setUser } from '../assets/redux/Services/authSlices'

export default function Login({ navigation }) {
  const db = useSQLiteContext()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch()

  const [triggerLogin, result] = useLoginMutation()
  console.log(result)

  useEffect(() => {

    async function setup() {

      const result = await db.getFirstAsync('SELECT * FROM usuarios')
      console.log("usuarion en db", result)
      if (result.email) {
        dispatch(setUser({ email: result.email, localId: result.localId }))
      }

    } setup()


  }, [])

  useEffect(() => {
    if (result.status == "fulfilled") {
      dispatch(setUser(result.data))
    } else if (result.status == "rejected") {
      console.log("Se produjo un error al iniciar sesión")
    }
  }, [result])

  const handleLogin = () => {
    if (email && password) {
      triggerLogin({ email, password });
    } else {
      console.log("Usuario y contraseña son requeridos");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Ingresar" onPress={handleLogin} />
      <Button
        title="¿No tienes cuenta? Regístrate"
        onPress={() => navigation.navigate('Register')}
      />
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
