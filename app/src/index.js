import Vue from 'vue';
import App from './app';

// eslint-disable-next-line
new Vue({
  el: '#index',
  components: {
    App,
  },
});

if (module.hot) {
  module.hot.accept('./app.vue');
}
