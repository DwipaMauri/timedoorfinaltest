<template>
  <div
    class="d-flex align-items-center justify-content-end gap-3 text-decoration-none"
    style="width: 100%"
  >
    <!-- Cart Icon with Badge -->
    <div class="position-relative d-flex align-items-center">
      <i class="bi bi-cart" style="font-size: 1.5rem"></i>
      <span
        class="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle"
        style="
          width: 18px;
          height: 18px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        0
      </span>
    </div>

    <!-- Heart Icon with Badge -->
    <div class="position-relative d-flex align-items-center">
      <i class="bi bi-heart" style="font-size: 1.5rem"></i>
      <span
        class="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle"
        style="
          width: 18px;
          height: 18px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        0
      </span>
    </div>

    <!-- Profile Icon and Dropdown -->
    <div class="d-flex align-items-center gap-2">
      <!-- <i class="fa-solid fa-user" style="color: #790918; font-size: 1.5rem"></i> -->
      <a
        class="nav-link dropdown-toggle d-flex align-items-center"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        <img
          src="https://i.pinimg.com/originals/c0/cb/e0/c0cbe00ee18b369573fc3b69f07500c1.jpg"
          alt="Profile Image"
          class="rounded-circle"
          width="35"
          height="35"
          style="object-fit: cover"
        />
        <span style="font-size: 1.2rem; margin-left: 3px">Profile</span>
      </a>

      <div class="dropdown">
        <button
          class="btn btn-outline-danger dropdown-toggle custom-btn"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          EN
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li><a class="dropdown-item" href="#">EN</a></li>
          <li><a class="dropdown-item" href="#">ID</a></li>
        </ul>
      </div>
      <ul class="dropdown-menu">
        <router-link to="/user/personal-info" class="dropdown-item">
          <i class="bi bi-person"></i> Profile
        </router-link>
        <router-link to="/user/favorite-smartphones" class="dropdown-item">
          <i class="bi bi-bag-plus"></i> Order
        </router-link>
        <router-link to="/user/smartphones" class="dropdown-item">
          <i class="bi bi-phone"></i> My Smartphone
        </router-link>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li class="dropdown-item text-danger" @click="logout">
          <i class="bi bi-box-arrow-right"></i> Logout
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const userData = computed(() => {
  return store.state.auth.userLogin;
});

const logout = () => {
  store.commit("auth/setUserLogout");
  router.push("/");
};

const goToSmartphones = () => {
    router.push("/user/smartphone/card");
};
</script>
