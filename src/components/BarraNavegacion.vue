<template>
  <!-- <HelloWorld /> -->
  <div class="barra-navegacion">
    <div class="contenedor">
      <img class="logo" src="../assets/logo.png" alt="Logo de Vue">
      <div class="opciones">
        <div class="opcion">Conócenos</div>
        <div class="opcion">Galería</div>
        <div class="opcion">Home</div>
      </div>
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.barra-navegacion {
  align-items: center;
  background-color: #00688b;
  border: 0.2rem solid white;
}

.contenedor {
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 0 auto;
  padding: .5rem;
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