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
    <div class="form-container">
    <form @submit.prevent="handleRegister">
      <div class="name">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="email">
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
      <div class="password">
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
  </div>
</template>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:black;
  align-items: center;
  flex-direction: column;
}


.form-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 1rem;
  font-weight: bold;
  color: white;
}
h1 {
  position: relative;
  color: white;
  font-size: 3rem;
  text-align: center;
  margin: 0;
  justify-content: center;
  display: flex;
}
input {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* Error message styling */
.error {
  color: red;
  font-size: 0.875rem;
}

.invalid {
  border-color: red;
}
</style>
