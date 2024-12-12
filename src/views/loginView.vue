<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    handleLogin() {
      if (this.validate()) {
        const loginData = {
          email: this.email,
          password: this.password,
        };
        this.loginUser(loginData);
        this.$router.push('/');
      }
    },
    validate() {
      this.emailError = '';
      this.passwordError = '';

      if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.emailError = 'Invalid email format.';
      }

      if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters.';
      }

      return !this.emailError && !this.passwordError;
    },
  },
};
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="input-container">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          :class="email"
        />
        <p v-if="emailError" class="error">{{ emailError }}</p>


        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          :class="{ invalid: passwordError }"
        />
        <p v-if="passwordError" class="error">{{ passwordError }}</p>

      <button type="submit">Login</button>
    </div>
    </form>
  </div>
</template>

<style scoped>
.login {
  position: relative;
  height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10rem;
}
h1 {
  position: relative;
  color: white;
  font-size: 8rex;
  display: flex;
  justify-content: center;
  bottom: 7rem;
  margin: 1rem;
}
form {
  position: relative;
  height: 70vh;
  width: 50vw;
  left: 17rem;
  bottom: 5rem;
}
.input-container {
  position: relative;
  width: 30vw;
  height: 70vh;
  left: 7rem;
}
label {
  display: block;
  color: brown;
  font-size: 3rex;

}
input {
  width: 56rex;
  height: 5rex;
}
.error {
  color: red;
  font-size: 0.9em;
}
button {
  position: relative;
  font-size: 3rex;
  width: 8rem;
  display: flex;
  justify-content: center;
  height: 5rex;
}
</style>
