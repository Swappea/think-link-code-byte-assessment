<script setup>
import SalesOverview from './SalesOverview.vue';
</script>

<template>
  <div class="d-flex flex-column sales-container">
    <div class="sales-header">Sales detail</div>
    <SalesOverview />
  </div>
</template>

<style scoped>
.sales-container {
  row-gap: 16px;
}

.sales-header {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #262730;
}
</style>
