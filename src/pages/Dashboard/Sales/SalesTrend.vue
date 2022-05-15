<script setup>
import SalesTrendChart from './SalesTrendChart.vue';
</script>

<template>
  <div class="col-sm-10 sales-trend">
    <div class="d-flex align-items-center justify-content-between sales-trend-header">
      <span>$74,729.00</span>
      <span>
        <img src="../../../assets/growth.svg" width="28" height="28" />
        <span>Highest revenue since 2 weeks ago</span>
      </span>
    </div>
    <div class="sales-trend-figure">
      <img src="../../../assets/upside-trend.svg" width="20" height="12" />
      <span>+21% from last week</span>
    </div>
    <div>
      <SalesTrendChart />
    </div>
  </div>
</template>

<style scoped>
.sales-trend {
  padding: 16px 37px 0 0;
  border-right: 1px solid #fff2ee;
  height: 100%;
}

.sales-trend-header {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
}

.sales-trend-header span:first-of-type {
  font-size: 48px;
  line-height: 56px;
  color: #262730;
}

.sales-trend-header span:last-of-type {
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 16px;
  line-height: 24px;
  color: #262730;
}

.sales-trend-figure {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #2fca72;
  margin-top: 8px;
}
</style>
