/**
 * Extends interfaces in Vue.js
 */

import Vue, { ComponentOptions } from 'vue';
import IziToast from 'izitoast';

declare module 'vue/types/vue' {
  interface Vue {
    $toast: typeof IziToast;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    toast?: typeof IziToast;
  }
}
