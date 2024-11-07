<template>
  <div class="row">
    <div
      class="col-12 col-sm-4 col-lg-2 position-relative"
      style="padding-top: 12px; padding-bottom: 12px"
      v-for="(smartphone, index) in smartphones"
      :key="index"
    >
      <div class="card text-decoration-none" style="height: 398px">
        <img
          :src="smartphone.image"
          class="card-img-top"
          :alt="smartphone.name"
          height="240"
          width="285"
          style="object-fit: cover"
        />
        <div class="card-body" style="color: #0a0a0a">
          <p class="mb-0">{{ smartphone.name }}</p>
          <div class="h-50">
            <h4 class="fs-5 mb-0">{{ smartphone.name }}</h4>
          </div>
          <p>Brand: {{ smartphone.category }}</p>
          <!-- Asumsikan kategori merujuk pada merek -->
        </div>
      </div>
      <div
        class="position-absolute text-secondary bg-light px-2 py-1 rounded-circle top-0 end-0 m-4 like-icon"
      >
        <i class="fas fa-heart"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  smartphones: Array,
});
</script>

<!-- <style scoped>
.like-icon {
  cursor: pointer;
}
</style> -->
