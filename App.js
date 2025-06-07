import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './assets/redux/store';
import RootNavigator from './navigation/RootNavigator';
import { SQLiteProvider } from "expo-sqlite";


export const initializeDB = async (db) => {

  try {
    await db.execAsync('CREATE TABLE IF NOT EXISTS sessions(id INTERGER PRIMARY KEY NOT NULL, email TEXT NOT NULL,localId TEXT NOT NULL );')
    console.log("inicialaidada")
  } catch (error) {
    console.log("No iniciaal")

  }
}

export default function App() {
  return (
    <SQLiteProvider databaseName="usuarios" onInit={initializeDB}>
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
    </SQLiteProvider>
  );
}