<script>
import {  RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import HeaderSect from './components/HeaderSect.vue';
import FooterSect from './components/FooterSect.vue';

import { mapGetters, mapActions } from "vuex";
import LoadingSpinner from './components/LoadingSpinner.vue';

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    HeaderSect,
    FooterSect,
    LoadingSpinner
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    ...mapActions('auth', ['checkAuthStatus'])
  },
  created(){
    this.checkAuthStatus().then((resp) => {
      console.log('Welcome back ', resp.data);
    }).catch(error => {
      console.log('Sorry, ', error);
    });
  }
});
</script>

<template>
  <div class="container">
    <HeaderSect />
    <RouterView />
    <FooterSect />
  </div>
  <Teleport to="body">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
  </Teleport>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;

}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
router-view {
  flex: 1;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
