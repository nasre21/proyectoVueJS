<template>
  <div>
    <h3 class="h3">Imagenes de prueba para hacer test con jest</h3>
    <div class="contenedor-imagenes">
      <img
        v-for="image in images"
        :key="image.id"
        :src="image.url"
        :alt="image.name"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const images = ref([
      {
        id: 1,
        url: require("@/assets/gato.jpeg"),
        name: "image 1",
      },
      {
        id: 2,
        url: require("@/assets/cerdito.jpeg"),
        name: "image 2",
      },
      {
        id: 3,
        url: require("@/assets/perro.jpg"),
        name: "image 3",
      },
    ]);
    return { images };
  },
};
</script>

<style scoped>
.contenedor-imagenes {
  width: 80vw;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-content: space-around;
}

.contenedor-imagenes img {
  width: 70%;
}
.h3 {
  text-align: center;
  color: #00688b;
}
</style>
