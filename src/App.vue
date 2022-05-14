<script setup>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
</script>

<template>
  <NavBar />

  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2 p-0">
          <SideBar />
        </div>
        <div class="col-sm-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@font-face {
  font-family: 'Open Sans';
  src: url(./assets/fonts/OpenSans-Regular.ttf) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(./assets/fonts/OpenSans-Bold.ttf) format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(./assets/fonts/OpenSans-SemiBold.ttf) format('truetype');
  font-weight: 600;
  font-style: normal;
}
</style>
