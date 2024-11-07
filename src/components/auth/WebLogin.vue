<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div
      style="background-color: #ffffff; width: 400px; min-height: 100vh"
      class="p-5 m-auto login-form"
    >
      <div class="text-center">
        <img
          src="../../assets/images/ezgif.com-gif-maker-66.jpg"
          alt="Logo"
          width="100px"
        />
        <h2 class="mt-4">Log in to your account</h2>
        <p>Enter your details below.</p>
      </div>
      <form @submit.prevent="login">
        <div class="my-4">
          <!-- Email -->
          <BaseInput
            type="email"
            identity="email"
            placeholder="Enter your email "
            label="Email"
            v-model="loginData.email"
          />
        </div>
        <div class="my-4">
          <!-- Password -->
          <BaseInput
            type="password"
            identity="password"
            placeholder="Enter your password"
            label="Password"
            v-model="loginData.password"
          />
        </div>
        <BaseButton
          class="login w-100 my-3"
          style="background-color: #790918; color: white"
        >
          Login
        </BaseButton>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Don’t have an account?
          <span style="color: #4c4ddc">
            <router-link to="/signup" class="text-decoration-none">
              Signup
            </router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const loginData = reactive({
  email: "",
  password: "",
});

const login = async () => {
  await store.dispatch("auth/getLoginData", loginData);
  router.push("/");
};
</script>

<style scoped>
.login-form {
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
