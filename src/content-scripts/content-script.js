import Vue from 'vue';
import App from './App.vue';

const elem = document.createElement('div');
document.body.appendChild(elem);

/* eslint-disable no-new */
new Vue({
  el: elem,
  render: (h) => h(App),
});
