<template>
  <div class="category-box">
    <img :src="category.image" :alt="category.name" class="category-image" />
    <h3 class="category-title">{{ category.name }}</h3>
    <p class="category-description">{{ category.description }}</p>
    <button @click="viewCategory" class="view-category-button">View More</button>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: {
    category: {
      type: Object,
      required: true,
      default: () => ({
        name: "Unknown Category",
        image: "https://via.placeholder.com/150", // Placeholder image
        description: "No description available."
      }),
    },
    products: {
      type: Array,
      required: false,
      default: () => [
      {
          id: 1,
          name: "Brake Pads",
          price: 29.99,
          image: "/images/brake-pads.jpg",
          description: "High-performance brake pads for smooth braking.",
        },
        {
          id: 2,
          name: "Car Battery",
          price: 99.99,
          image: "/images/car-battery.png",
          description: "Reliable and durable car battery with long life.",
        },
        {
          id: 3,
          name: "Oil Filter",
          price: 19.99,
          image: "/images/oil-filter.jpg",
          description: "durable",
        },
        {
          id: 4,
          name: "Spark Plug",
          price: 14.99,
          image: "/images/spark-plug.jpg",
          description: "Affordable",
        },
        {
          id: 5,
          name: "Benz wheel rim",
          price: 300.99,
          image: "/images/Benz-wheel-rim.jpg",
          description: "What your brand needs",
        },
        {
          id: 6,
          name: "Bmw steering wheel",
          price: 50.99,
          image: "/images/bmw-steering-wheel.jpg",
          description: "Flexible",
        },
        {
          id: 7,
          name: "Car tires",
          price: 100.99,
          image: "/images/tires.jpg",
          description: "What drives you on?"
        },
        {
          id: 8,
          name: "Vintage steering wheel",
          price: 300.99,
          image: "/images/car-Mustang-Vintage.jpg",
          description: "Classy",
        },
        {
          id: 9,
          name: "Tyres",
          price: 300.99,
          image: "/images/car-tyres-63928.jpg",
          description: "flexibility counts",
        },
      ]
    },
  },
  methods: {
    viewCategory() {
      // Trigger an action when the category is clicked
      // For example, navigate to a category-specific page
      this.$emit("view-category", this.category);
    },
  },
};
</script>

<style scoped>
.category-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.category-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.category-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.category-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.category-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.view-category-button {
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
}

.view-category-button:hover {
  background-color: #1e8449;
}
</style>
