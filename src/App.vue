<template>
  <!-- <HelloWorld />
  <PrimerComponente /> -->
  <BarraNavegacion />
  <FormularioContacto />
  <ImagenesComponente />
  <FooterComponente />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PrimerComponente from "./components/PrimerComponente.vue";
import BarraNavegacion from "./components/BarraNavegacion.vue";
import FormularioContacto from "./components/FormularioContacto.vue";
import ImagenesComponente from "./components/ImagenesComponente.vue";
import FooterComponente from "./components/Footer.Componente.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PrimerComponente,
    BarraNavegacion,
    FormularioContacto,
    ImagenesComponente,
    FooterComponente,
  },
};
</script>

<style></style>
