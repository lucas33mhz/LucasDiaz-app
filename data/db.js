// db.js
import * as SQLite from 'expo-sqlite';


const db =  SQLite.openDatabaseAsync('usuarios.db');
console.log('SQLite:', SQLite);
export default db;

export const crearTablaUsuarios = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT);'
    );
  });
};

export const insertarUsuario = (username, password, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO usuarios (username, password) VALUES (?, ?);',
      [username, password],
      (_, result) => callback(true),
      (_, error) => {
        console.log('Error al registrar:', error);
        callback(false);
      }
    );
  });
};

export const validarUsuario = (username, password, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM usuarios WHERE username = ? AND password = ?;',
      [username, password],
      (_, { rows }) => {
        callback(rows.length > 0);
      }
    );
  });
};
