<script setup lang="ts">

</script>

<template>
  <div class="home">
    <div class="hero">
      <div class="hero-background"></div>
      <h1 class="hero-header">Welcome to tadamart</h1>
    </div>
  </div>
</template>
<style scoped>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  .hero-background{
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    background-image: url('/assets/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;

  }
  .hero-header {

  }
</style>
