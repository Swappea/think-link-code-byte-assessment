<!-- <script setup></script> -->

<template>
  <nav class="navbar navbar-expand-lg app-navbar">
    <div class="container-fluid navbar-container">
      <a class="navbar-brand app-navbar-brand" href="#">
        <img src="../assets/logo.svg" alt="" width="140" height="20" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex input-form me-auto">
          <img class="input-search" src="../assets/search.svg" alt="" width="16" height="16" />
          <input
            class="form-control me-2 input-field"
            type="search"
            placeholder="Search wines, customers here..."
            aria-label="Search"
          />
        </form>
        <div class="d-flex align-items-center user-section">
          <img class="input-search" src="../assets/bell.svg" alt="" width="24" height="24" />
          <div class="d-flex align-items-center user-inner-section">
            <span class="user-name">Nicholas D.</span>
            <img class="input-search" src="../assets/avatar.svg" alt="" width="32" height="32" />
            <img class="input-search" src="../assets/arrow-down.svg" alt="" width="10" height="5" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.app-navbar {
  height: 56px;
  background-color: #811434;
}

.app-navbar .navbar-container {
  margin: 0px 36px 0px 24px;
  padding: 0px;
}

.app-navbar .input-form {
  margin-left: 150px;
  width: 354px;
  height: 32px;
  border-radius: 4px;
  position: relative;
}

.input-form .input-field {
  padding-left: 36px;
}

.input-form .input-field::placeholder {
  font-family: 'Open Sans';
  color: #8c8ca1;
  font-size: 14px;
  line-height: 20px;
}

.input-form .input-search {
  position: absolute;
  left: 8px;
  top: 8px;
}

.user-name {
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

.user-section {
  column-gap: 37px;
}

.user-inner-section {
  column-gap: 11px;
}
</style>
