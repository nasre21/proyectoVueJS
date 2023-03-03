<template>
  <div class="contact-form">
    <h2>Contacta con nosotros</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="surname">Apellido:</label>
        <input type="text" id="surname" v-model="surname" required />
      </div>
      <div class="form-group">
        <label for="city">Ciudad:</label>
        <input type="text" id="city" v-model="city" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      city: "",
      phone: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      alert("El formulario se ha enviado con éxito");
      this.name = "";
      this.surname = "";
      this.city = "";
      this.phone = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.contact-form {
  background-color: #cfdad6;
  color: #00688b;
  text-align: center;
  padding: 3rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

form {
  width: 70vw;
  margin: 0 auto;
}

label {
  font-weight: bold;
  margin-bottom: 0.4rem;
  margin-right: 1rem;
}

input {
  padding: 0.7rem;
  border-radius: 5px;
  border: none;
  width: 50vw;
  box-sizing: border-box;
}
button {
  background-color: #00688b;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.7rem 1.25rem;
  cursor: pointer;
}
</style>
