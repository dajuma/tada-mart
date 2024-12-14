<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      nameErrors: [],
      emailErrors: [],
      passwordErrors: [],
      passwordConfirmErrors: []
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['registerUser']),
    handleRegister() {
      if (this.validate()) {
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        };
        this.registerUser(userData).then(resp => {
          console.log('Yeey, we got a response ', resp);
          // this.$router.push('/');
        }).catch(error => {
          if (error.errors){
          const { errors } = error;
          if(errors.name){
            this.nameErrors = errors.name;
          }
          if(errors.email){
            this.emailErrors = errors.email;
          }
          if(errors.password){
            this.passwordErrors = errors.password;
          }
          if(errors.password_confirmation){
            this.passwordConfirmErrors = errors.password_confirmation;
          }
        }
        });
      }
    },
    validate() {
      this.nameErrors = [],
      this.emailErrors = [];
      this.passwordErrors = [];
      this.passwordConfirmErrors = [];

      if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.emailErrors.push('Invalid email format.');
      }

      if (this.password.length < 6) {
        this.passwordErrors.push('Password must be at least 6 characters.');
      }
      if(this.password_confirmation !== this.password) {
        this.passwordErrors.push('Confirm Password does not match Password');
        this.passwordConfirmErrors.push('Confirm Password does not match Password');
      }

      return !this.nameErrors.length && !this.emailErrors.length && !this.passwordErrors.length && !this.passwordConfirmErrors.length;
    },
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
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          :class="{invalid: nameErrors.length}"
        />
        <ul>
          <li v-for="(error,idx) in nameErrors" class="error" :key="`emk`+idx">{{ error }}</li>
        </ul>

      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          :class="{ invalid: emailErrors.length }"
        />
        <ul>
          <li v-for="(error,idx) in emailErrors" class="error" :key="`emk`+idx">{{ error }}</li>
        </ul>
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          :class="{ invalid: passwordErrors.length }"
          autocomplete="new-password"
        />
        <ul>
          <li v-for="(error,idx) in passwordErrors" class="error" :key="`psk`+idx">{{ error }}</li>
        </ul>
      </div>
      <div>
        <label for="password-confirm">Confirm Password</label>
        <input
          type="password"
          id="password-confirm"
          v-model="password_confirmation"
          required
          :class="{ invalid: passwordConfirmErrors.length }"
          autocomplete="new-password"
        />
        <ul>
          <li v-for="(error,idx) in passwordConfirmErrors" class="error" :key="`pck`+idx">{{ error }}</li>
        </ul>
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
