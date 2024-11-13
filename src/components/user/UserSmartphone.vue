<template>
  <ul class="list-group">
    <li class="list-group-item p-4">
      <p class="my-0 fs-4 fw-semibold">My Smartphone</p>
      <p>These smartphone are currently online.</p>
      <div class="row row-cols-4 g-2 py-3 justify-content-start">
        <div>
          <router-link
            to="/user/my-smartphone/add"
            class="d-flex justify-content-center align-items-center h-100 card product-card"
            style="min-height: 351px"
          >
            <span class="mb-3">Add Smartphone</span>
            <i class="fa-solid fa-plus text-success"></i>
          </router-link>
        </div>
        <smartphone-card
          v-for="smartphone in smartphones"
          :key="smartphone.id"
          :smartphone="smartphone"
          :is-admin="true"
        ></smartphone-card>
      </div>
    </li>
  </ul>
</template>

<script setup>
import smartphone from "@/store/smartphone";
import SmartphoneCard from "../ui/SmartphoneCard.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const smartphones = computed(() => {
  const allSmartphone = store.state.smartphone.smartphones;
  const userId = store.state.auth.userLogin.userId;
  return allSmartphone.filter((smartphone) => smartphone.userId === userId);
});
// const smartphones = computed(() => {
//   // const localId = store.state.auth?.userLogin?.localId;
//   // return smartphone.filter((smartphone) => smartphone.userId === userId);

//   return smartphone
// });

console.log(smartphones.value, {
  2: store.state.smartphone,
  3: store.state.auth?.userLogin?.localId,
});
</script>
