<template>
  <!-- <HelloWorld />
  <PrimerComponente /> -->
  <BarraNavegacion />
  <FormularioContacto />
  <TodoApp />
  <ImagenesComponente />
  <FooterComponente />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PrimerComponente from "./components/PrimerComponente.vue";
import BarraNavegacion from "./components/BarraNavegacion.vue";
import FormularioContacto from "./components/FormularioContacto.vue";
import TodoApp from "./components/TodoApp.vue";

import ImagenesComponente from "./components/ImagenesComponente.vue";
import FooterComponente from "./components/FooterComponente.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PrimerComponente,
    BarraNavegacion,
    FormularioContacto,
    TodoApp,
    ImagenesComponente,
    FooterComponente,
  },
};
</script>

<style></style>
