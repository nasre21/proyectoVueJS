<template>
  <HelloWorld />
  <PrimerComponente />
  <FormularioContacto />
  <ImagenesComponente />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PrimerComponente from "./components/PrimerComponente.vue";
import FormularioContacto from "./components/FormularioContacto.vue";
import ImagenesComponente from "./components/ImagenesComponente.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PrimerComponente,
    FormularioContacto,
    ImagenesComponente,
  },
};
</script>

<style></style>
