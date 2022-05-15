<script setup>
import numeral from 'numeral';

const chartOptions = {
  markers: {
    size: 5,
    strokeColor: '#2FCA72',
    colors: ['#2FCA72'],
  },
  colors: ['#2FCA72'],
  chart: {
    height: 250,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  grid: {
    show: true,
    strokeDashArray: 2,
    borderColor: '#E8E8E8',
    xaxis: {
      lines: {
        show: true,
      },
    },
    row: {
      colors: ['transparent'],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    labels: {
      style: {
        cssClass: 'x-axis-label',
      },
    },
  },
  yaxis: {
    min: 1000,
    max: 500000,
    tickAmount: 4,
    logarithmic: true,
    labels: {
      formatter: (value) => {
        return numeral(value).format('$0 a');
      },
      style: {
        fontSize: '12px',
        fontWeight: 700,
        fontFamily: 'Open Sans',
        colors: ['#8c8ca1'],
      },
    },
  },
  tooltip: {
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
      return `<div class="abcd">${numeral(data).format('$0.0')}</div>`;
    },
  },
};
const series = [
  {
    name: 'Trend',
    data: [1000, 7500, 5000, 9000, 8300, 10000, 50000],
  },
];
</script>

<template>
  <div class="container-fluid px-0" id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<style>
#chart .apexcharts-tooltip div {
  background-color: #485572;
  border-color: #485572;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 5px 10px;
}

#chart .x-axis-label tspan {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  fill: #485572;
}
</style>
