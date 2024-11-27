<template>
    <footer class="footer">
      <p>&copy; 2024 Tadamart. All rights reserved.</p>
    </footer>
  </template>

  <script>
  export default {
    name: "Footer",
  };
  </script>

  <style>
  .footer {
    position: absolute;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    left: -620px;
    top: 440px;
    background-color: grey;
  }
  p {
    position: absolute;
    display: flex;
    left: 540px;
  }
  </style>
