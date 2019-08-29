import Vue from 'vue';
import VueIziToast from '../instrumented/vue-izitoast';
import App from './App.vue';
import 'izitoast/dist/css/iziToast.css';

Vue.use(VueIziToast);

new Vue({
    el: '#app',
    render: createElement => createElement(App)
});
