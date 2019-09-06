import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import VueIzitoast from '../src/vue-izitoast';
import App from '../examples/App.vue';
import notes from '../examples/README.md';
import 'izitoast/dist/css/iziToast.css';

Vue.use(VueIzitoast);
Vue.component('App', App);

const withSettings = component => ({
  ...component
});

const stories = storiesOf('Vue IziToast', module);

stories
  .add(
    'Options',
    () => withSettings({
      template: `
        <div>
          <App />
        </div>
      `
    }),
    { notes }
  );
