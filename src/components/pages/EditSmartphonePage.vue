<template>
  <form @submit.prevent="editSmartphone" class="py-5 my-5 mx-5">
    <div class="mb-3">
      <div>
        <img
          :src="smartphoneData.image"
          :alt="smartphoneData.name"
          class="image w-25 rounded"
          style="object-fit: cover; position: sticky; top: 100px"
        />
      </div>
      <div class="mb-3">
        <label for="productPicture" class="form-label">Product Picture</label>
        <input
          class="form-control"
          type="file"
          id="productPicture"
          @input="checkImage"
        />
      </div>
      <label for="category" class="form-label">Category</label>
      <input
        type="text"
        class="form-control"
        id="category"
        value="Smartphone"
        disabled
      />
    </div>
    <div class="mb-3">
      <label for="color" class="form-label">Color</label>
      <input
        type="text"
        class="form-control"
        id="color"
        v-model="smartphoneData.color"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        v-model="smartphoneData.description"
      />
    </div>
    <!-- <div class="mb-3">
      <label for="formFile" class="form-label">Image</label>
      <input
        class="form-control"
        type="file"
        id="formFile"
        @input="checkImage"
      />
    </div> -->
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="smartphoneData.name"
      />
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">Price</label>
      <input
        type="number"
        class="form-control"
        id="price"
        v-model="smartphoneData.price"
      />
    </div>
    <div class="mb-3">
      <label for="shipping" class="form-label">Shipping</label>
      <input
        type="number"
        class="form-control"
        id="shipping"
        v-model="smartphoneData.shipping"
      />
    </div>
    <div class="mb-3">
      <label for="size" class="form-label">Size</label>
      <select class="form-select" v-model="smartphoneData.size">
        <option value="32GB">32GB</option>
        <option value="64GB">64GB</option>
        <option value="128GB">128GB</option>
        <option value="256GB">256GB</option>
        <option value="512GB">512GB</option>
        <option value="1TB">1TB</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </form>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();

const props = defineProps({
  isAdmin: { type: Boolean, default: false },
  detailData: { type: Object, default: () => ({}) },
});

const smartphoneData = ref({
  category: "Smartphone",
  color: "",
  description: "",
  image: "",
  name: "",
  price: 0,
  shipping: 0,
  size: "",
});

// const checkImage = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       smartphoneData.value.image = reader.result;
//     };
//     reader.readAsDataURL(file);
//   }
// };

const editSmartphone = async () => {
  await store.dispatch("smartphone/updateSmartphone", {
    id: route.params.id,
    newSmartphone: smartphoneData.value,
  });
  router.push("/user/smartphone");
};

// Mengambil detail smartphone saat komponen di-mount
onMounted(async () => {
  // Cek apakah data smartphone ada di state
  try {
    await store.dispatch("smartphone/getSmartphoneDetail", route.params.id);
    // Setel data smartphoneData dengan data yang diambil dari store
    console.log(store.state.smartphone.smartphoneDetail);
    smartphoneData.value = { ...store.state.smartphone.smartphonesDetail };
    console.log(smartphoneData.value);
  } catch (err) {
    console.log(err);
  }
});

const checkImage = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.addEventListener("load", () => {
    smartphoneData.value.image = reader.result;
  });
};
</script>
