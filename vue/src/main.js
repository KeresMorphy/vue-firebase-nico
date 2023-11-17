// main.js

// Importa las funciones necesarias de los SDKs que necesitas
import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';

import App from './App.vue';
// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAbOQfljiCpu-4If8QpdqpgpygHbwDnRnc',
  authDomain: 'vue-proyect-b3d69.firebaseapp.com',
  projectId: 'vue-proyect-b3d69',
  storageBucket: 'vue-proyect-b3d69.appspot.com',
  messagingSenderId: '32511714566',
  appId: '1:32511714566:web:87407668b0bc024c1fea87',
  measurementId: 'G-0Q14P33KD5' // opcional, solo si usas Firebase JS SDK v7.20.0 y posterior
};

// Inicializa Firebase
initializeApp(firebaseConfig);

// Obtén la instancia de Analytics (puedes eliminar esto si no usas Analytics)

// Crea la aplicación Vue y monta tu componente principal
const app = createApp(App);
app.mount('#app');
