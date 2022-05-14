<template>
  <div class="col-sm-2 sales-profit">
    <span class="total-profit-header">Total Profit</span>
    <span class="total-profit-data">$12,545.00</span>
    <div class="trend">
      <img src="../../../assets/upside-trend.svg" width="20" height="12" />
      <span>+23% from last week</span>
    </div>
    <div class="products-sold">
      <span>Total Producst Sold</span>
      <span>329</span>
    </div>
  </div>
</template>

<style scoped>
.sales-profit {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.total-profit-header {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #8c8ca1;
  margin-top: 24px;
}

.total-profit-data {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #811434;
  margin-top: 8px;
}

.trend {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #2fca72;
}

.products-sold {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 32px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
}

.products-sold span:first-of-type {
  font-size: 16px;
  line-height: 24px;
  color: #8c8ca1;
}

.products-sold span:last-of-type {
  font-size: 32px;
  line-height: 40px;
  color: #262730;
}
</style>
