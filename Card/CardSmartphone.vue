<template>
  <div class="container my-5">
    <div v-if="cartItems.length === 0" class="d-flex mb-3 align-items-center">
      <h3>Card</h3>
      <p style="margin-left: 43%">You don't have any smartphone yet</p>
    </div>
    <div v-else class="d-flex mb-3 align-items-center">
      <h3>Card</h3>
      <p style="margin-left: 54%">{{ cartItems.length }} Items</p>
    </div>

    <div class="d-flex justify-content-between">
      <!-- Cart Items Section -->
      <div class="col-lg-8">
        <div
          class="d-flex align-items-center mb-3 p-3 bg-light-gray"
          style="width: 95%; height: 50px"
        >
          <span><i class="fa-solid fa-location-dot"></i></span>
          <span class="mx-3">Shipping to Kuta, Badung</span>
        </div>
        <div
          v-if="cartItems.length === 0"
          class="d-flex flex-column align-items-center p-5"
        >
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.RkfD2jvqZjlRi1SNJcxoPAHaHa&pid=Api&P=0&h=180"
            alt="cart"
            width="150"
          />
          <h2>Your cart is empty</h2>
          <router-link
            to="/"
            class="btn text-light text-decoration-none fs-5"
            style="background-color: teal; width: 50%"
            >Find Products</router-link
          >
        </div>
        <div v-for="(item, index) in cartItems" :key="index" class="mb-3 mt-5">
          <div class="row g-0 align-items-center">
            <div class="col-md-2">
              <img
                :src="item.image"
                :alt="item.name"
                class="img-fluid rounded-start"
              />
            </div>
            <div class="col-md-8 mx-5 fs-3">
              <div class="card-body">
                <h4 class="card-title">{{ item.color }}</h4>
                <p class="card-text">{{ item.name }}</p>
                <p class="card-text">Rp. {{ item.price }}</p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center p-3">
            <p
              @click="removeFromCart(index)"
              class="cursor-pointer text-danger p-0 text-decoration-none fs-4"
              style="cursor: pointer"
            >
              Remove
            </p>
            <div class="input-group" style="max-width: 130px">
              <button
                class="btn btn-outline-secondary"
                @click="decreaseQuantity(index)"
              >
                -
              </button>
              <input
                type="text"
                class="form-control text-center"
                :value="item.quantity"
                readonly
                style="max-width: 40px"
              />
              <button
                class="btn btn-outline-secondary"
                @click="increaseQuantity(index)"
              >
                +
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <!-- Order Summary -->
      <div class="col-lg-4">
        <div class="card p-3">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
              <h5>Order Summary</h5>
              <p>{{ cartItems.length }} Items</p>
            </div>
            <div class="d-flex flex-column">
              <h4 class="text-end">Rp{{ totalCartPrice }}</h4>
              <p class="text-muted text-end">Not including shipping fee</p>
            </div>
          </div>
          <button
            type="button"
            class="btn w-100 text-light mt-5"
            @click="goToCheckout"
            style="background-color: teal"
          >
            Checkout ({{ cartItems.length }})
          </button>
        </div>
      </div>
    </div>

    <!-- Other Products Section -->
    <div>
      <h2>Other Product</h2>
      <div class="product__list row">
        <div
          v-for="(item, index) in Smartphoneslistcart"
          :key="index"
          class="col-12 col-lg-2 col-sm-4"
          style="padding-top: 12px; padding-bottom: 12px"
        >
          <div class="card position-relative" style="height: 398px">
            <img
              :src="item.image"
              class="card-img-top"
              alt="Smartphone Item"
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
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const Smartphoneslistcart = computed(() => store.state.smartphone.smartphones);
const cartItems = computed(() => store.state.smartphone.card);

const totalCartPrice = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
});

const removeFromCart = (index) => {
  store.commit("smartphone/removeFromCart", index);
};

const goToCheckout = () => {
  router.push("/user/Smartphone");
};

const increaseQuantity = (index) => {
  store.commit("smartphone/increaseQuantity", index);
};

const decreaseQuantity = (index) => {
  store.commit("smartphone/decreaseQuantity", index);
};
</script>

<style scoped>
.bg-light-gray {
  background-color: #d3d3d3;
}
</style>
