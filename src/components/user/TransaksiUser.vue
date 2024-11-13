<template>
  <div class="col-md-8 mb-5">
    <div class="card mt-5">
      <div class="card-body">
        <h5 class="mb-3" style="color: darkgrey">My Order</h5>

        <div
          v-if="orders.length === 0"
          class="no-orders-placeholder text-center"
        >
          <img
            src="https://media.tenor.com/rCAHg2T1wDwAAAAM/ecomity-tusi-bag.gif"
            alt="No orders"
            class="mb-3"
            style="width: 200px"
          />
          <h5>No orders yet</h5>
          <p>When you buy an item, your order about it will appear here.</p>
          <router-link
            to="/"
            class="btn text-light"
            style="background-color: teal; width: 50%"
          >
            Shop now</router-link
          >
        </div>

        <div
          v-else
          v-for="order in orders"
          :key="order.id"
          class="order-card p-3 mb-4"
        >
          <div
            class="order-header d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <i class="fa-solid fa-bag-shopping text-success mx-2"></i>
              <span>Shopping | {{ formatDate(order.orderDate) }}</span>
              <span
                class="status-done ms-3 px-2 py-1 bg-success text-light rounded-pill"
                >Done</span
              >
              <span class="ms-3">ORD{{ order.id }}</span>
            </div>
          </div>

          <div
            v-for="(item, index) in order.items"
            :key="index"
            class="order-details d-flex mt-2"
          >
            <img
              :src="item.image"
              alt="Product Image"
              class="img-thumbnail me-3"
              style="width: 100px; height: 120px"
            />
            <div class="d-flex justify-content-between w-100">
              <div>
                <p class="mb-1">
                  <strong>{{ item.name }}</strong>
                </p>
              </div>
              <div class="text-end">
                <p class="mb-0">Total price</p>
                <p class="fw-bold">Rp. {{ item.price }}</p>
                <!-- <p class="fw-bold">Rp. {{ ((Number(item.quantity) || 0) * (Number(item.price) || 0)).toLocaleString() }}</p> -->
              </div>
            </div>
          </div>

          <p v-if="order.length > 1" class="text-muted mt-2">
            + {{ order.length - 1 }} more products
          </p>
          <hr />
          <div class="d-flex justify-content-end mt-3">
            <button
              @click="buyAgain"
              class="btn text-light"
              style="background-color: teal"
            >
              Buy Again
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

// Fetch order history when the component mounts
onMounted(() => {
  store.dispatch("smartphone/getOrderHistory");
});

// Retrieve orders from the Vuex store
const orders = computed(() => store.state.smartphone.orders || []);

// Format date helper
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};

const buyAgain = () => {
  router.push("/");
};
</script>

<style>
.order-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.status-done {
  font-size: 0.75rem;
}
</style>
