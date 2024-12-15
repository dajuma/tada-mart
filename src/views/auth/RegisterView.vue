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
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div class="register">
    <h1>Register</h1>
    <div class="form-container">
    <form @submit.prevent="handleRegister">
      <div class="name">
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
      <div class="email">
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
      <div class="password">
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
