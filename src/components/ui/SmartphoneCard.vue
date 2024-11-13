<template>
  <div>
    <router-link
      :to="
        isAdmin
          ? `/user/EditSmartphone/${smartphone.id}`
          : `/smartphone/${smartphone.id}`
      "
      class="card position-relative h-100"
    >
      <img
        :src="
          smartphone.image ||
          'https://easyphone.lv/wp-content/uploads/2022/01/silver00.jpg'
        "
        class="card-img-top"
        :alt="smartphone.name"
      />
      <div class="card-body">
        <h5 class="card-title">Rp. {{ Number(smartphone.price) }}</h5>
        <p class="card-text">{{ smartphone.name }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-body-secondary"
            >{{ smartphone.color }} / {{ smartphone.size }}</small
          >
          <button
            class="btn btn-heart rounded-circle"
            v-if="isAdmin"
            @click.stop="(event) => handleDelete(event, smartphone.id)"
          >
            <i class="fa-regular fa-trash-can"></i>
          </button>
          <button class="btn btn-heart rounded-circle" v-else>
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  smartphone: { type: Object, require: true },
  isAdmin: { type: Boolean, default: false },
});

// import smartphone from "../../store/smartphone";
import { useStore } from "vuex";
const store = useStore();

const handleDelete = async (event, id) => {
  event.preventDefault();
  event.stopPropagation();
  const confirmDelete = confirm("Are you sure want to delete this smartphone?");
  if (confirmDelete) {
    try {
      await store.dispatch("smartphone/deleteSmartphone", id);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("delete not run");
  }
};
</script>
