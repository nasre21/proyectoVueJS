<template>
  <HelloWorld />
  <div class="barra-navegacion">
    <img class="logo" src="../assets/logo.png" alt="Logo de Vue">
    <div class="opciones">
      <div class="opcion">Conócenos</div>
      <div class="opcion">Galería</div>
      <div class="opcion">Home</div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
    name: "BarraNavegacion",
    components: { HelloWorld }
}
</script>

<style>
.barra-navegacion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00688b;
  padding: 1%;
  border: 0.2rem solid white;
}

.logo {
  height: 3rem;
  width: 3rem;
}

.opciones {
  display: flex;
  gap: 3%;
  font-size: 1.2rem;
}

.opcion {
  color: white;
  margin-right: 2%;
  border: 0.1rem solid white;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.opcion-borde:last-child {
  margin-right: 0;
}

.opcion:hover {
  background-color: white;
  color: #7fffd4;
}
</style>