<template>
  <section class="container py-5 my-5">
    <div class="row">
      <!-- <user-menu @changeComponent="$router.push($event)"></user-menu> -->
      <div class="col-lg-9">
        <component :is="component[getRoute]"></component>
      </div>
    </div>
  </section>
</template>

<script setup>
// import UserMenu from "@/components/user/UserMenu.vue";

import UserProducts from "../user/UserSmartphone.vue";

import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";

const route = useRoute();

// onMounted(() => {
//   console.log("budi");
// });

const component = {
  smartphones: UserProducts,
};

const getRoute = computed(() => {
  return route.params.component;
});
</script>
