<script>
import { mapActions, mapGetters } from 'vuex';

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
      this.loginUser(loginData).then(resp => {
        console.log('Yeey, we got a response ', resp);
        // this.$router.back();
      }).catch(error => {
        if (error.errors){
          const { errors } = error;
          if(errors.email){
            this.emailError = errors.email.reduce((errorMsg, error) => errorMsg + error + " ,"  );
          }
          if(errors.password){
            this.passwordError = errors.password.reduce((errorMsg, error) => errorMsg + error + " ,"  );
          }
        }
      });
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
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  created(){
    if(this.isAuthenticated){
      console.log('You are already logged in! log out to access this page');
      this.$router.back();
    }
  }
};
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
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
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}
.invalid {
  border: 1px solid red;
}
</style>
