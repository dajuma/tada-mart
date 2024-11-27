<template>
    <footer class="footer">
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <p>&copy; 2024 Tadamart. All rights reserved.</p>

      <div class="social-icons">
      <a href="https://www.facebook.com" target="_blank">
        <img src="@/components/icons/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <img src="@/components/icons/X-twitter.svg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img src="@/components/icons/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank">
        <img src="@/components/icons/whatsapp.svg" alt="Whatsapp" />
        </a>
      <a href="https://www.google.com" target="_blank">
        <img src="@/components/icons/google.svg" alt="Google" />
      </a>
    </div>
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
    left: 0;
    top: 540px;
    background-color: grey;
  }
  p {
    position: absolute;
    display: flex;
    left: 540px;
  }

  .footer .social-icons {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer .social-icons img,
.footer .social-icons svg {
  width: 30px;
  height: 30px;
  transition: transform 0.3s, color 0.3s;
}

.footer .social-icons a:hover img,
.footer .social-icons a:hover svg {
  transform: scale(1.1);
}
</style>
