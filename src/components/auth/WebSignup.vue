<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div
      class="p-5 m-auto form-container"
      style="background-color: #ffffff; width: 400px; min-height: 100vh"
    >
      <div class="text-center">
        <img
          src="../../assets/images/ezgif.com-gif-maker-66.jpg"
          alt="Logo"
          width="100px"
        />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details below.</p>
      </div>
      <form @submit.prevent="signup">
        <!-- Full Name -->
        <div class="my-4">
          <base-input
            type="text"
            identity="fullname"
            placeholder="Enter your full name"
            label="Full Name"
            v-model="signupData.fullname"
          ></base-input>
        </div>
        <!-- Username -->
        <div class="my-4">
          <base-input
            type="text"
            identity="username"
            placeholder="Enter your username"
            label="Username"
            v-model="signupData.username"
          ></base-input>
        </div>
        <!-- Email -->
        <div class="my-4">
          <base-input
            type="email"
            identity="email"
            placeholder="Enter your email"
            label="Email"
            v-model="signupData.email"
          ></base-input>
        </div>
        <!-- Password -->
        <div class="my-4 position-relative">
          <base-input
            type="password"
            identity="password"
            placeholder="Enter your password"
            label="Password"
            v-model="signupData.password"
            @input="checkPasswordLength"
          ></base-input>
          <!-- <i
            class="bi bi-eye-fill position-absolute"
            :class="{
              'text-muted': !showPassword,
              'text-primary': showPassword,
            }"
            style="cursor: pointer; right: 10px; top: 35px"
            @click="togglePasswordVisibility"
          ></i> -->
          <p
            class="text-danger mt-1"
            :style="{ display: passwordStatus }"
            style="font-size: 11px"
          >
            The password must be at least 8 characters
          </p>
        </div>
        <!-- Confirm Password -->
        <div class="my-4 position-relative">
          <base-input
            type="password"
            identity="confirmationPassword"
            placeholder="Confirm your password"
            label="Confirm Password"
            v-model="signupData.confirmationPassword"
            @input="checkPasswordMatch"
          ></base-input>
          <!-- <i
            class="bi bi-eye-fill position-absolute"
            :class="{
              'text-muted': !showConfirmPassword,
              'text-primary': showConfirmPassword,
            }"
            style="cursor: pointer; right: 10px; top: 35px"
            @click="toggleConfirmPasswordVisibility"
          ></i> -->
          <p
            class="text-danger mt-1"
            :style="{ display: showConfirmPassword }"
            style="font-size: 11px"
          >
            Passwords do not match
          </p>
          <!-- <p
            class="text-success mt-1"
            v-show="isPasswordConfirmed"
            style="font-size: 11px"
          >
            Passwords match
          </p> -->
        </div>
        <div class="d-flex">
          <input
            style="align-self: self-start; margin-top: 5px; margin-right: 5px"
            type="checkbox"
          />
          <p>
            By clicking sign up, I hereby agree and consent to Terms &
            Conditions; I confirm that I have read the Privacy Policy.
          </p>
        </div>
        <base-button
          class="login w-100 my-3"
          style="background-color: #790918; color: white"
        >
          Sign Up
        </base-button>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have an account?
          <router-link
            to="/login"
            class="text-decoration-none"
            style="color: #4c4ddc"
            >Login</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SignupMenu from "../header/SignupMenu.vue";

const store = useStore();
const router = useRouter();

const signupData = reactive({
  fullname: "",
  username: "",
  email: "",
  password: "",
  confirmationPassword: "",
});

// const isPasswordConfirmed = ref(false);
// const showPassword = ref(false);
const passwordStatus = ref(false);
const showConfirmPassword = ref(false);

// const togglePasswordVisibility = () => {
//   showPassword.value = !showPassword.value;
// };

// const toggleConfirmPasswordVisibility = () => {
//   showConfirmPassword.value = !showConfirmPassword.value;
// };

const checkPasswordLength = () => {
  passwordStatus.value = signupData.password.length < 8 ? "block" : "none";
};

const checkPasswordMatch = () => {
  showConfirmPassword.value =
    signupData.password !== signupData.confirmationPassword ? "block" : "none";
  // isPasswordConfirmed.value =
  //   signupData.password === signupData.confirmationPassword;
};

const signup = async () => {
  checkPasswordLength();
  checkPasswordMatch();

  if (
    signupData.password.length >= 8 &&
    signupData.password === signupData.confirmationPassword
  ) {
    const response = await store.dispatch("auth/getRegisterData", signupData);
    console.log("yyyyyyyyyyyy");
    if (!response) return alert("Oops, registration failed");

    alert("Registration successful!");
    router.push("/");
  } else {
    signupData.password = "";
    signupData.confirmationPassword = "";
  }
};
</script>

<style scoped>
.form-container {
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>

<!-- // if (signupData.password.length < 8 || !isPasswordConfirmed.value) {
  //   console.log("Password is too short or does not match");
  //   return;
  // }

  // try {
  //   await store.dispatch("auth/getRegisterData", signupData);
  //   router.push("/");
  // } catch (error) {
  //   console.error("Signup failed", error);
  // } -->
