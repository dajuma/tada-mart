<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    ...mapActions('auth', ['registerUser']),
    handleRegister() {
      if (this.validate()) {
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.registerUser(userData);
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
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          :class="{ invalid: emailError }"
        />
        <p v-if="emailError" class="error">{{ emailError }}</p>
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          :class="{ invalid: passwordError }"
        />
        <p v-if="passwordError" class="error">{{ passwordError }}</p>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style>
.error {
  color: red;
  font-size: 0.9em;
}
.invalid {
  border: 1px solid red;
}
</style>
