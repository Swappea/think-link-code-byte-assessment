<script setup>
import SalesData from './SalesData.vue';
</script>

<template>
  <div class="sales-overview-container">
    <div class="sales-overview-header d-flex justify-content-between">
      <div class="overview">
        Total Sales overview
        <span>7 - 13 Aug, 2020</span>
      </div>
      <div class="right-side">
        <div class="refresh">
          <img src="../../../assets/refresh.svg" height="16" width="16" />
          Refresh Metrics
        </div>
        <div class="filter">
          <span>Filter by</span>
          <img src="../../../assets/vertical-line.svg" height="18" />
          <span>This week</span>
          <img src="../../../assets/down-arrow.svg" height="20" width="20" />
        </div>
      </div>
    </div>
    <div class="horizontal-line"></div>
    <SalesData />
  </div>
</template>

<style scoped>
.sales-overview-container {
  width: 100%;
  height: 512px;
  padding: 15px 15px 0 15px;

  background: #ffffff;
  border: 1px solid #fff2ee;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.overview {
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #262730;
}

.overview span {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: #868686;
}

.refresh {
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #485572;
}

.right-side {
  display: flex;
  column-gap: 30px;
}

.filter {
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.filter span:first-of-type {
  color: #8c8ca1;
}
.filter span:last-of-type {
  color: #262730;
}

.filter img,
.refresh img {
  cursor: pointer;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  border: 1px solid #fff2ee;
  margin-top: 20px;
}
</style>
