<script>
export default {
  name: "AboutView",
};
</script>

<template>
  <div class="about-view">
    <div class="hero-section">
      <div class="hero-content">
        <h1>About Tadamart</h1>
        <p>Your trusted partner in car and motor spare parts dropshipping.</p>
      </div>
    </div>

    <div class="about-content">
      <section class="intro">
        <h2>Who We Are</h2>
        <p>
          Tadamart is a premier dropshipping company dedicated to providing high-quality car and motor spare parts to customers worldwide. With a focus on reliability, efficiency, and affordability, we aim to make your shopping experience seamless and satisfactory.
        </p>
      </section>

      <section class="mission">
        <h2>Our Mission</h2>
        <p>
          To revolutionize the spare parts industry by delivering exceptional products and services through a hassle-free online platform. We strive to meet the demands of car enthusiasts and professionals alike.
        </p>
      </section>

      <section class="values">
        <h2>Our Values</h2>
        <ul>
          <li>Customer First: Your satisfaction is our priority.</li>
          <li>Reliability: Delivering quality parts you can count on.</li>
          <li>Innovation: Embracing modern technology for efficiency.</li>
        </ul>
      </section>
    </div>

    <div class="call-to-action">
      <h2>Partner with Tadamart Today!</h2>
      <p>Experience unparalleled convenience in accessing top-notch spare parts.</p>
      <router-link to="/contact" class="btn">Contact Us</router-link>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero-section {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 8px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero-content p {
  font-size: 1.2rem;
}

.about-content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.about-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about-content p {
  margin-bottom: 1.5rem;
}

.values ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.values li {
  margin-bottom: 0.5rem;
}

.call-to-action {
  text-align: center;
  background-color: #f4f4f4;
  padding: 2rem 1rem;
  margin-top: 2rem;
}

.call-to-action h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.call-to-action .btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.call-to-action .btn:hover {
  background-color: #0056b3;
}
</style>

