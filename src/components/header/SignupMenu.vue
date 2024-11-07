<template>
  <div class="d-flex align-items-center gap-3" style="width: 100px">
    <!-- Login Button -->
    <router-link to="/login" class="text-decoration-none">
      <button
        class="btn btn-outline-danger fw-semibold d-flex align-items-center custom-btn"
      >
        <i class="fa-solid fa-user"></i>
        <span class="ms-2 mb-0" style="white-space: nowrap">Login</span>
      </button>
    </router-link>

    <!-- Sign Up Button -->
    <router-link to="/signup" class="text-decoration-none">
      <button
        class="btn btn-outline-danger fw-semibold d-flex align-items-center custom-btn"
      >
        <i class="fa-solid fa-user"></i>
        <span class="ms-2 mb-0" style="white-space: nowrap">Sign Up</span>
      </button>
    </router-link>

    <!-- Language Dropdown -->
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
  </div>
</template>
