<script setup>
import OverviewHeader from './OverviewHeader.vue';
import OrdersOverview from './OrdersOverview.vue';
import SalesDetail from './Sales/SalesDetail.vue';
import InventoryDetails from './Inventory/InventoryDetails.vue';
</script>

<template>
  <div class="container-fluid py-4 dashboard-container">
    <OverviewHeader />
    <OrdersOverview />
    <SalesDetail />
    <InventoryDetails />
  </div>
</template>

<style>
.dashboard-container {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
