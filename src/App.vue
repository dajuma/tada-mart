<script>
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import HeaderSect from './components/HeaderSect.vue'
import FooterSect from './components/FooterSect.vue'
import Product from './views/ProductView.vue';

export default defineComponent({
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    HeaderSect,
    FooterSect,
    Product
  },
  data() {
    return {

    }
  }
});
</script>

<template>
  <div id="app" class="body">
    <HeaderSect />
    <h1>Welcome to Tadamart</h1>
    <RouterView />
    <FooterSect />
  </div>
</template>

<style scoped>
.body {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  align-items: start;
  justify-content: left;
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

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
