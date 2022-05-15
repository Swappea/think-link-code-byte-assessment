<script setup>
import { ref } from 'vue';
import numeral from 'numeral';
import { TABLE_DATA_COLUMNS } from '../../../data/constants';

const data = ref({
  rows: [
    {
      id: 1,
      name: 'Staglin Family Vineyard',
      region: 'France · Sauternes',
      rating: { rp: 95, value: '+3' },
      extraRating: {
        js: 95,
        rp: 80,
        ag: 80,
        ws: 79,
      },
      stocks: {
        possimus: 43,
        dc: 95,
      },
      vintage: 1950,
      qty: '04',
      volume: 'Standard (750ml)',
      cost: 56.95,
      price: 59.95,
      checked: true,
      opened: true,
    },
    {
      id: 2,
      name: 'Bibi Graetz Testamatta',
      region: 'Chianti · Blends and Other',
      rating: { rp: 95, value: '+3' },
      extraRating: {
        js: 95,
        rp: 80,
        ag: 80,
        ws: 79,
      },
      stocks: {
        possimus: 43,
        dc: 95,
      },
      vintage: 2015,
      qty: '04',
      volume: 'Standard (750ml)',
      cost: 72.95,
      price: 19.95,
      checked: false,
      opened: false,
    },
    {
      id: 3,
      name: 'Staglin Family Vineyard - 2',
      region: 'France · Sauternes',
      rating: { rp: 95, value: '+3' },
      extraRating: {
        js: 95,
        rp: 80,
        ag: 80,
        ws: 79,
      },
      stocks: {
        possimus: 43,
        dc: 95,
      },
      vintage: 1950,
      qty: '04',
      volume: 'Standard (750ml)',
      cost: 67.95,
      price: 69.95,
      checked: true,
      opened: false,
    },
  ],
});

const toggle = (id) => {
  data.value.rows = data.value.rows.map((obj) => {
    return {
      ...obj,
      opened: obj.id === id ? !obj.opened : false,
    };
  });
};

const toggleAllSelection = ({ target }) => {
  data.value.rows = data.value.rows.map((obj) => {
    return {
      ...obj,
      checked: target.checked,
    };
  });
};
</script>

<template>
  <table class="table wine-table">
    <thead>
      <tr>
        <th>
          <span class="form-checkbox-control-table">
            <input type="checkbox" value="" id="table-checkbox" @change="toggleAllSelection($event)" />
            <label for="table-checkbox"><span>Checkbox</span></label>
          </span>
        </th>
        <template v-for="[key, value] in Object.entries(TABLE_DATA_COLUMNS)" v-bind:key="key">
          <th>{{ value }}</th>
        </template>
        <th />
      </tr>
    </thead>
    <tbody>
      <template v-for="row in data.rows" v-bind:key="row.id">
        <tr :class="{ opened: row.opened }">
          <td>
            <span class="form-checkbox-control-table">
              <input type="checkbox" :checked="row.checked" :id="`table-checkbox-${row.id}`" />
              <label :for="`table-checkbox-${row.id}`"><span>Checkbox</span></label>
            </span>
          </td>
          <td class="text-color alternate">
            <div class="d-flex align-items-center">
              <img src="../../../assets/wine-01.svg" height="48" width="48" />
              <div class="d-flex flex-column mx-3">
                <span>{{ row.name }}</span>
                <span class="text-color">{{ row.region }}</span>
              </div>
            </div>
          </td>
          <td class="rating">
            <span>{{ `RP ${row.rating.rp}` }}</span>
            <span>{{ row.rating.value }}</span>
          </td>
          <td class="text-color">{{ row.vintage }}</td>
          <td class="text-color">{{ row.qty }}</td>
          <td class="text-color">{{ row.volume }}</td>
          <td class="text-color">{{ numeral(row.cost).format('$0.00') }}</td>
          <td class="text-color alternate">{{ numeral(row.price).format('$0.00') }}</td>
          <td @click="toggle(row.id)" role="button">
            <img src="../../../assets/down-arrow-table.svg" width="10" height="10" />
          </td>
        </tr>
        <tr :class="{ opened: row.opened }" v-if="row.opened">
          <td></td>
          <td :colspan="Object.keys(TABLE_DATA_COLUMNS).length">
            <div class="container-fluid px-0">
              <div class="d-flex flex-column">
                <div class="header d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-column">
                    <div>{{ row.name }}</div>
                    <div class="d-flex my-2">
                      <span
                        >Region: <span class="text-color"> {{ row.region }}</span></span
                      >
                      <span class="px-5"
                        >Vintage: <span class="text-color">{{ row.vintage }}</span></span
                      >
                    </div>
                  </div>
                  <div>
                    <a href="" class="view-wine">View wine</a>
                    <img class="mx-3" src="../../../assets/edit.svg" height="24" width="24" />
                    <img src="../../../assets/delete.svg" height="24" width="24" />
                  </div>
                </div>
                <hr />
                <div class="content row">
                  <div class="col-sm-6">
                    <div class="content-header">RATING</div>
                    <div class="row my-2">
                      <div class="col-sm-4 extra-rating">
                        <label for="">James Suckling's</label>
                        <div>JS {{ row.extraRating.js }}</div>
                      </div>
                      <div class="col-sm-4 extra-rating">
                        <label for="">Robert Parker</label>
                        <div>JS {{ row.extraRating.rp }}</div>
                      </div>
                      <div class="col-sm-4 extra-rating">
                        <label for="">Antonio Gallloni's</label>
                        <div>JS {{ row.extraRating.ag }}</div>
                      </div>
                      <div class="col-sm-4 extra-rating">
                        <label for="">Wine Spectator Tasting</label>
                        <div>JS {{ row.extraRating.ws }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="content-header">STOCK</div>
                    <div class="row my-2">
                      <div class="col-sm-4 stocks">
                        <label for="">Possimus</label>
                        <div>JS {{ row.stocks.possimus }}</div>
                      </div>
                      <div class="col-sm-4 stocks">
                        <label for="">Downtown Condo</label>
                        <div>JS {{ row.stocks.dc }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped>
.form-checkbox-control-table input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.form-checkbox-control-table label {
  line-height: 16px;
  border-radius: 1px;
}

.form-checkbox-control-table input[type='checkbox'] + label:before {
  border: 1px solid #333;
  content: '\00a0';
  display: inline-block;
  font: 16px/1em sans-serif;
  height: 16px;
  padding: 0;
  vertical-align: top;
  width: 16px;
}

.form-checkbox-control-table input[type='checkbox']:checked + label:before {
  background: #ef4859;
  border-color: #ef4859;
  color: #fff;
  content: '\2713';
  text-align: center;
}

.form-checkbox-control-table input + label > span {
  display: none;
}

.rating span {
  background: #f4f7ff;
  border-radius: 4px;
  color: #485572;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
}

.text-color {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #8c8ca1;
}

.alternate {
  color: #262730;
}

.wine-table {
  margin-bottom: 100px;
}

.wine-table tr th:first-child,
.wine-table tr td:first-child {
  padding: 5px 0 5px 10px;
  vertical-align: middle;
}
.wine-table thead tr th {
  padding: 15px 10px;
}

.wine-table td {
  padding: 15px 10px;
  vertical-align: middle;
}

.wine-table > * {
  border-top: 1px solid #ecf1f4 !important;
}

.wine-table > :last-child {
  border-bottom: 1px solid #ecf1f4 !important;
}

.view-wine {
  color: #ef4859;
}

.content-header {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8c8ca1;
}

.extra-rating label,
.stocks label {
  margin: 10px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #262730;
}
.extra-rating div,
.stocks div {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #485572;
  background: #f4f7ff;
  border-radius: 4px;
}

.stocks div {
  background: #fff2ee;
}

.opened {
  border: 1px solid #ecf1f4 !important;
}
</style>
