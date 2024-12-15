<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      emailErrors: [],
      passwordErrors: [],
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
      this.loginUser(loginData).then(resp => {

        this.$swal({
          title: `Welcome, ${resp?.name}`,
          timer: 2000,
          type: 'success',
          width: '20rem',
          iconColor: 'white',
          position: 'top-right',
          showConfirmButton: false,
          customClass: {
            popup: 'colored-toast'
          }
        });
        this.$router.push('/');

      }).catch(error => {

        if (error.errors){
          const { errors } = error;
          if(errors.email){
            this.emailErrors = errors.email;
          }
          if(errors.password){
            this.passwordErrors = errors.password;
          }
        }
      });
      }
    },
    validate() {
      this.emailErrors = [];
      this.passwordErrors = [];

      if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.emailErrors.push('Invalid email format.');
      }

      if (this.password.length < 6) {
        this.passwordErrors.push('Password must be at least 6 characters.');
      }

      return !this.emailErrors.length && !this.passwordErrors.length;
    },
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  created(){
    if(this.isAuthenticated){
      console.log('You are already logged in! log out to access this page');
      this.$router.push('/');
    }
  }
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
          :class="{ invalid: emailErrors.length }"
        />
        <ul>
          <li v-for="(error,idx) in emailErrors" class="error" :key="idx">{{ error }}</li>
        </ul>

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          :class="{ invalid: passwordErrors.length }"
        />
        <ul>
          <li v-for="(error,idx) in passwordErrors" class="error" :key="idx">{{ error }}</li>
        </ul>

      <button type="submit">Login</button>
    </div>
    </form>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  background-color: black;
  bottom: 15rem;
}

h1 {
  position: relative;
  font-size: 3rem;
  text-align: center;
  bottom: 6rem;
  margin-bottom: -6.5rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30vw;
  height: 4vh;
}

button {
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1.5rem;
  width: 30vw;
  height: 6vh;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.9rem;
}

.invalid {
  border-color: red;
}

</style>
