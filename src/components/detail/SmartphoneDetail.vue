<template>
  <div class="col-md-6 mx-auto">
    <img
      :src="smartphoneDetail.image"
      class="img-fluid mb-3"
      alt="Large Shirt "
      style="height: 400px"
    />
  </div>

  <div class="col-md-4 mx-auto">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h3 class="card-title">Rp{{ smartphoneDetail.price }}</h3>
          <i class="fas fa-heart text-secondary"></i>
        </div>

        <div class="d-flex justify-content-between">
          <p class="card-text">Item Description</p>
          <p class="card-text">{{ smartphoneDetail.description }}</p>
        </div>

        <div class="d-flex justify-content-between">
          <p class="card-text">Category</p>
          <p class="card-text">{{ smartphoneDetail.category }}</p>
        </div>

        <div class="d-flex justify-content-between">
          <p class="card-text">Size</p>
          <p class="card-text">{{ smartphoneDetail.size }}</p>
        </div>

        <div class="d-flex justify-content-between">
          <p class="card-text">Color</p>
          <p class="card-text">{{ smartphoneDetail.color }}</p>
        </div>

        <div class="d-flex justify-content-between">
          <p class="card-text">Shipping</p>
          <p class="card-text">Rp{{ smartphoneDetail.shipping }}</p>
        </div>

        <a
          href="#"
          class="btn mt-3 w-100 text-light fw-bold"
          style="background-color: #009c9e"
          >Buy Now</a
        >
        <button
          @click="handleAddToCart"
          class="btn mt-2 w-100 fw-bold"
          style="border: 1px solid #009c9e; color: #009c9e"
        >
          Add to Cart
        </button>
        <hr />
        <div class="card">
          <div class="card-body" height="80">
            <div class="d-flex align-items-center">
              <i
                class="fa-solid fa-user rounded-circle"
                width="60"
                height="60"
                style="object-fit: cover; float: left"
                v-if="!smartphoneDetail.image"
              ></i>
              <img
                :src="smartphoneDetail.image"
                v-else
                class="rounded-circle"
                width="60"
                height="60"
                style="object-fit: cover; float: left"
              />
              <div class="d-flex flex-column mx-5">
                <h5>{{ smartphoneDetail.username }}</h5>
                <div class="text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div>
      <h2>Other Smartphone</h2>
      <div class="product__list row">
        <div
          v-for="(item, index) in smartphoneList"
          :key="index"
          class="col-12 col-lg-2 col-sm-4"
          style="padding-top: 12px; padding-bottom: 12px"
        >
          <div class="card position-relative" style="height: 398px">
            <img
              :src="item.image"
              class="card-img-top"
              :alt="item.name"
              height="240"
              width="285"
            />
            <div class="card-body">
              <p class="mb-0 fs-5 fw-bold" style="color: #009c9e">
                Rp{{ item.price }}
              </p>
              <p class="mb-0">{{ item.name }}</p>
              <div class="d-flex justify-content-between">
                <p class="position-absolute bottom-0">{{ item.size }}</p>
                <i
                  class="fas fa-heart d-flex text-secondary position-absolute bottom-0 end-0 me-2 p-1"
                >
                  <p class="ms-2">12</p>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="showModal" class="custom-modal-overlay">
    <div class="custom-modal">
      <div class="p-3 text-center">
        <!-- Modal content goes here -->
        <img
          src="https://cdn-icons-gif.flaticon.com/15576/15576195.gif"
          alt="Success"
          style="width: 250px; height: 250px"
        />
        <h4>You have successfully added this item to cart</h4>
        <p style="color: darkgrey" class="fs-4">
          "{{ smartphoneDetail.name }}" successfully added to cart. Check now on
          the cart or continue shopping.
        </p>
      </div>
      <div
        class="custom-modal-footer d-flex flex-column justify-content-center"
      >
        <button type="button" class="teal-btn-outline w-75" @click="goToHome">
          Continue Shopping
        </button>
        <button type="button" class="teal-btn w-75" @click="goToCart">
          Go to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const smartphoneList = computed(() => store.state.smartphone.smartphones);

const smartphoneDetail = computed(() => {
  return store.state.smartphone.smartphoneDetail; // []
});

const userData = computed(() => {
  return store.state.auth.userLogin;
});

const showModal = ref(false);
const handleAddToCart = () => {
  if (userData.value) {
    store.dispatch("smartphone/addToCard", smartphoneDetail.value);
    showModal.value = true;
    console.log(smartphoneDetail.value);
  } else {
    alert("Data failed to add to card");
  }
};

const goToHome = () => {
  router.push("/");
};

const goToCart = () => {
  router.push("/user/CardSmartphone/card");
};

defineProps({
  smartphones: Array,
});
// console.log(smartphoneDetail.value.name);

function ambilData() {}

// ON MOUNTED BERFUNGSI SEBAGAI FUNGSI YANG MENJALANKAN KODE DI DALAM NYA KETIKA HALAMAN WEB PERTAMA KALI DI AKSES / LOAD
onMounted(async () => {
  try {
    // KODE GET SMARTPHONE DETAIL AKAN DI PANGGIL KETIKA HALAMAN PERTAMA KALI DI LOAD.
    await store.dispatch(
      "smartphone/getSmartphoneDetail", // GET SMARTPHONE detail BERASAL DARI FILE smartphone.js di dalam folder STORE.
      route.params.id // ROUTE PARAMS ID BERFUNGSI UNTUK MENGAMBIL ID DARI URL http://localhost:5173/user/Smartphone/-OB0dfdtYFWivM6mL90a (`-OB0dfdtYFWivM6mL90a` INI ADALAH ID YANG DIMAKSUD YANG DI DAPAT DARI URL)
    );

    // kode await store.dispatch di balik layar menjalankan fungsi
    // getSmartPhoneDetail dari file smartphone

    // CONTOH KODE YANG SEBENARNYA DIJALANKAN
    // async getSmartphoneDetail({ commit }, payload) {
    //   try {
    //     const { data } = await axios.get(
    //       `https://smartphone-project-7ac05-default-rtdb.firebaseio.com/smartphones/${payload}.json`
    //     );
    //     commit("setSmartphoneDetail", data);

    //     return data;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

    // Setel data smartphoneData dengan data yang diambil dari store
    // console.log({ result });
  } catch (err) {
    console.log(err);
  }
});
</script>

<style scoped>
/* Overlay to darken the background */
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Modal box styling */
.custom-modal {
  width: 90%;
  max-width: 500px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease;
}

.custom-modal-footer {
  padding: 16px;
  display: flex;
  align-items: center;
}

.custom-modal-footer {
  border-top: 1px solid #ddd;
}

/* Button styles */
.teal-btn {
  padding: 8px 16px;
  margin: 4px;
  border: 1px solid #099497;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fff;
  color: #099497;
}

.teal-btn:hover {
  background-color: #099497;
  color: #fff;
}

.teal-btn-outline {
  padding: 8px 16px;
  margin: 4px;
  border: 1px solid #099497;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fff;
  color: #099497;
}

.teal-btn-outline:hover {
  background-color: #099497;
  color: #fff;
}

/* Animation for modal */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
