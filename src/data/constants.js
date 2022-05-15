import { useImage, deepFreeze } from './utils';

// data is also stored here since there is no API, normally this would be constants file

export const DASHBOARD_MENU = deepFreeze([
  {
    router: '/',
    label: 'Dashboard',
    imgPath: 'dashboard.svg',
  },
  {
    router: '/inventory',
    label: 'Inventory',
    imgPath: 'catalog.svg',
  },
  {
    router: '/orders',
    label: 'Orders',
    imgPath: 'orders.svg',
  },
  {
    router: '/customers',
    label: 'Customers',
    imgPath: 'customers.svg',
  },
  {
    router: '/reports',
    label: 'Reports',
    imgPath: 'reports.svg',
  },
  {
    router: '/settings',
    label: 'Settings',
    imgPath: 'settings.svg',
  },
]);

export const ORDER_TYPES = deepFreeze([
  {
    key: 'openOrders',
    label: 'Open orders',
    value: 239,
    img: useImage('unfullfilled-orders.svg'),
    color: '#FFAA2C',
  },
  {
    key: 'transitOrders',
    label: 'Orders in transit',
    value: 126,
    img: useImage('transit-orders.svg'),
    color: '#2C67FF',
  },
  {
    key: 'fulfilledOrders',
    label: 'Fulfilled orders',
    value: 1254,
    img: useImage('fullfilled-order.svg'),
    color: '#00CF3A',
  },
  {
    key: 'cancelledOrders',
    label: 'Cancelled orders',
    value: 35,
    img: useImage('cancelled-order.svg'),
    color: '#FF1C1C',
  },
]);

export const TABLE_DATA_COLUMNS = Object.freeze({
  product: 'PRODUCT',
  rating: 'RATING',
  vintage: 'VINTAGE',
  quantity: 'QTY',
  volume: 'VOLUME',
  cost: 'COST',
  price: 'PRICE',
});
