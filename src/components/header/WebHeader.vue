<template>
  <header
    class="header-container d-flex justify-content-center shadow-sm bg-white py-2 border-bottom fixed-top"
  >
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <router-link
        to="/"
        class="d-flex align-items-center text-decoration-none"
      >
        <img
          src="../../assets/images/ezgif.com-gif-maker-66.jpg"
          alt="Smartphone Logo"
          width="65"
          class="me-2 rounded"
        />
        <span class="text-red fw-bold">Smartphone</span>
      </router-link>

      <!-- Navigation Bar -->
      <NavigationBar />
    </div>
  </header>
</template>

<script setup>
import NavigationBar from "./NavigationBar.vue";
</script>

<style scoped>
.header-container {
  padding-right: 0;
  width: 100%;
}

.text-red {
  color: red;
  font-size: 1rem; /* Adjust font size if needed */
}

/* Additional styles for better responsiveness and spacing */
.container-fluid {
  max-width: 1200px; /* Adjust the max-width to control overall header width */
}

.me-2 {
  margin-right: 8px;
}
</style>
