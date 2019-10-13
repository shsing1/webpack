import Vue from 'vue';
import App from './app';

new Vue({
  el: '#index',
  components: {
    App
  }
});

if (module.hot) {
  module.hot.accept('./app.vue', function() {
  })
}
