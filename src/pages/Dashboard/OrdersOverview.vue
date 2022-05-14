<script setup>
import { ORDER_TYPES } from '../../data/constants';
</script>

<template>
  <div class="order-row d-flex justify-content-between">
    <div
      v-for="{ key, label, value, img, color } in ORDER_TYPES"
      v-bind:key="key"
      :style="{ 'box-shadow': `0px -2px 0px ${color}, 0px 2px 11px rgba(242, 242, 242, 0.5)` }"
      class="order-card-container d-flex flex-column"
    >
      <div class="order-card-header d-flex justify-content-between">
        <span>{{ label }}</span>
        <img :src="img" height="24" width="24" />
      </div>
      <div class="order-card-data">{{ value }}</div>
    </div>
  </div>
</template>

<style scoped>
.order-card-container {
  width: 258px;
  height: 88px;
  background: #ffffff;
  border-radius: 4px;
  padding: 15px;

  row-gap: 5px;
}

.order-card-header span {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #8c8ca1;
}

.order-card-data {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
}
</style>
