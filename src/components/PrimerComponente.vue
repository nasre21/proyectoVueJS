<template>
  <div>
    <h1>Mi primer componente</h1>
    <p>{{ names[0] }}</p>
    <p>{{ names[1] }}</p>
    <p>{{ names[2] }}</p>
  </div>

  <div>
    <p>{{ mensaje.text }}</p>
    <p>{{ mensaje.title }}</p>
  </div>

  <div>
    <p v-for="(names, index) in names" :key="index">{{ names }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    const names = ["Jone", "May", "Nasser"];
    const mensaje = {
      title: "lalalalala",
      text: "nananananna",
    };

    return {
      names,
      mensaje,
    };
  },
};
</script>

<style></style>
