<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="container row mt-5" style="max-width: 1200px">
      <!-- Main Content -->
      <div class="col-lg-8">
        <!-- Order Section -->
        <div v-for="(item, index) in cartItems" :key="index" class="card mb-3">
          <div class="card-body">
            <h5 style="color: darkgrey">Order</h5>
            <!-- Repeat for each order item -->
            <div class="d-flex align-items-center mb-2">
              <img
                :src="item.image"
                :alt="item.name"
                class="img-thumbnail"
                style="width: 100px"
              />

              <div class="ml-3 mx-4">
                <p>{{ item.name }}</p>
                <p>{{ item.size }}</p>
                <p>Rp. {{ item.price }}</p>
              </div>
              <p style="margin-left: 400px">{{ cartItems.length }}</p>
            </div>
          </div>
        </div>

        <!-- Address Section -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 style="color: darkgrey">Address</h5>
            <div class="card card-body">
              <div class="d-flex align-items-center">
                <img
                  src="https://cdn-icons-png.freepik.com/512/7380/7380630.png"
                  alt="location"
                  style="width: 50px; height: 50px"
                />
                <div class="d-flex flex-column mx-3">
                  <p>PT. Timedoor Indonesia</p>
                  <p style="color: grey">
                    Jl. Tukad Yeh Aya IX No.46, Renon, Denpasar Selatan, Kota
                    Denpasar, Bali 80226
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Delivery Details Section -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 style="color: darkgrey">Delivery Details</h5>
            <div class="card card-body">
              <div class="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGHFGe6RJE73jPMryCWM_p_t43IYWx6R-YTco6ACopRu5XADsb"
                  alt="location"
                  style="width: 50px; height: 50px"
                />
                <div class="d-flex flex-column mx-3">
                  <p>Fedex Express Shipping</p>
                  <p style="color: grey">Rp. 20.000</p>
                  <p style="color: grey">Home delivery in 1-3 working days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Method Section -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 style="color: darkgrey">Payment Method</h5>
            <div class="card card-body">
              <div class="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHer4r7G4AColPfDKUFYoOj5ijN1eIBOMsJl3Mp-NqQ4UR4gY4"
                  alt="location"
                  style="width: 50px; height: 50px"
                />
                <div class="d-flex flex-column mx-3">
                  <p>0819283210323</p>
                  <p style="color: grey">23/12 <span class="mx-3">123</span></p>
                  <p style="color: grey">Jack Daniel Arya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary Sidebar -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5>Order Summary</h5>
            <div class="d-flex justify-content-between">
              <p>Order</p>
              <p>Rp. {{ totalCartPrice }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Protection Fee</p>
              <p>Rp. 20000</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Shipping</p>
              <p>Rp. {{ totalShippingCost }}</p>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <h5>Total to pay</h5>
              <h5>Rp. {{ totalToPay }}</h5>
            </div>
            <button
              @click="confirmOrder"
              class="btn text-light btn-block mt-4"
              style="background-color: teal; width: 100%"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Confirm Order Modal -->
  <div v-if="showModal" class="custom-modal-overlay">
    <div class="custom-modal">
      <div class="p-3 text-center">
        <!-- Modal content goes here -->
        <img
          src="https://kardit.africa/wp-content/uploads/2022/11/79187-card-payment-success1.gif"
          alt="Success"
          style="width: 350px; height: 350px"
        />
        <h4>Order #ORD-{{ ordersId }} placed successfully</h4>
        <p>
          Thank you for shopping at Vintage. You can track your order on the
          transaction history menu.
        </p>
      </div>
      <div
        class="custom-modal-footer d-flex flex-column justify-content-center"
      >
        <button
          type="button"
          class="teal-btn-outline w-75"
          @click="goToSmartphones"
        >
          Continue Shopping
        </button>
        <button type="button" class="teal-btn w-75" @click="goToHistory">
          Go to History Transaction
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const showModal = ref(false);

// Computed property to get the cart data from Vuex state
const cartItems = computed(() => store.state.smartphone.card);

const confirmOrder = async () => {
  await store.dispatch("smartphone/confirmOrder");
  showModal.value = true;
};

const goToSmartphones = () => {
  router.push("/");
};

const goToHistory = () => {
  router.push("/user/transaction-history");
};

const totalCartPrice = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
});

const totalShippingCost = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + parseInt(item.shipping),
    0
  );
});

const totalToPay = computed(() => {
  return totalCartPrice.value + 20000 + totalShippingCost.value;
});
</script>

<style scoped>
.checkout-item {
  border-bottom: 1px solid #ddd;
}

.checkout-item img {
  max-height: 200px;
  object-fit: cover;
}

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
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #099497;
  color: #fff;
}

.teal-btn:hover {
  background-color: #fff;
  border: 1px solid #099497;
  color: #099497;
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
