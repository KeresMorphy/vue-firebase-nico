<template>
  <div id="app">
    <h1>Información de los Usuarios</h1>
    
    <!-- Bucle para cada usuario -->
    <div v-for="user in usuarios" :key="user.NumControl">
      <!-- Mostrar imagen del usuario si 'imagenUrl' está presente -->
      <img v-if="user.imagenUrl" :src="user.imagenUrl" alt="Imagen del usuario">
      
      <!-- Mostrar el nombre del usuario -->
      <h1>{{ user.Nombre }}</h1>
      
      <!-- Mostrar carrera si está presente -->
      <h2 v-if="user.Carrera">Carrera: {{ user.Carrera }}</h2>
      
      <!-- Mostrar número de control si está presente -->
      <h2 v-if="user.NumControl">Número de Control: {{ user.NumControl }}</h2>
      
      <!-- Mostrar fecha de cumpleaños si está presente -->
      <h2 v-if="user.cumpleaños">Cumpleaños: {{ user.cumpleaños }}</h2>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
  name: 'App',
  setup() {
    // Variable reactiva para almacenar la información de los usuarios
    const usuarios = ref([]);

    // Función para obtener la información de los usuarios desde Firestore
    const obtenerInformacionUsuarios = async () => {
      const db = getFirestore();
      const usuariosRef = collection(db, 'usuarios');
      const usuariosSnapshot = await getDocs(usuariosRef);

      const usuariosArray = [];
      usuariosSnapshot.forEach((doc) => {
        usuariosArray.push(doc.data());
      });

      // Actualizar la variable 'usuarios' con la información recuperada
      usuarios.value = usuariosArray;
    };

    // En el ciclo de vida 'onMounted', llamar a 'obtenerInformacionUsuarios' para cargar la información al montar el componente
    onMounted(() => {
      obtenerInformacionUsuarios();
    });

    // Devolver las variables y funciones necesarias para el componente
    return {
      usuarios,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-size: 2em;
  margin-bottom: 20px;
}
</style>
