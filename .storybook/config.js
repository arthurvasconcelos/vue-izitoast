import { addParameters, configure } from '@storybook/vue';

addParameters({
  options: {
    panelPosition: 'right',
  }
});

function loadStories() {
  require('./stories.js');
}

configure(loadStories, module);
