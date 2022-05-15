<script setup>
import { DASHBOARD_MENU } from '../data/constants';
</script>

<template>
  <div class="d-flex flex-column align-items-center align-items-sm-start side-bar-container h-100">
    <ul
      class="nav nav-pills w-100 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start side-bar-menu"
      id="menu"
    >
      <li v-for="{ label, imgPath, router } in DASHBOARD_MENU" v-bind:key="label" class="nav-item">
        <router-link :to="router" class="d-flex nav-link align-middle px-0">
          <img :src="imgPath" alt="dashboard" height="24" width="24" />
          <span class="ms-1 d-none d-sm-inline">{{ label }}</span>
        </router-link>
      </li>
    </ul>
    <hr />
    <div class="pb-5 side-bar-footer">
      <h5 class="brand">CorkOwl</h5>
      <p class="copy-right">© 2020 CorkOwl, All Rights Reserved.</p>
      <img
        class="slide-arrow-right"
        src="../assets/slider-arrow-right.svg"
        alt="slide-arrow-right"
        height="24"
        width="24"
      />
    </div>
  </div>
</template>

<style scoped>
.side-bar-container {
  border-right: 1px solid #ecf1f4;
}

.side-bar-footer {
  position: relative;
  width: 100%;
  padding: 0 1rem;
}

.side-bar-menu li {
  width: 100%;
  height: 56px;
  background: #fff;
  padding: 8px 25px;
}

.side-bar-menu li:first-of-type {
  background: #f7f1f3;
}

.side-bar-menu li a {
  column-gap: 20px;
  align-items: center;
}

.side-bar-menu li:first-of-type a span {
  color: #811434;
}

.side-bar-menu li a span {
  display: inline-block;
  margin-left: 20px;
  color: #485572;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}

.slide-arrow-right {
  position: absolute;
  right: -10px;
  top: 15%;
}

.brand {
  color: #8c8ca1;
}

.copy-right {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8c8ca1;
}
</style>
