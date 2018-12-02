# Vue iziToast

Elegant, responsive, flexible and lightweight notification plugin implemented for Vue 2 of [iziToast](https://github.com/dolce/iziToast)

[![dependencies Status](https://david-dm.org/arthurvasconcelos/vue-izitoast/status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-izitoast) 
[![devDependencies Status](https://david-dm.org/arthurvasconcelos/vue-izitoast/dev-status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-izitoast?type=dev) 
[![peerDependencies Status](https://david-dm.org/arthurvasconcelos/vue-izitoast/peer-status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-izitoast?type=peer)

[![Latest GH Latest Release](https://img.shields.io/github/release/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/releases/latest)
[![Total GH Latest Release Downloads](https://img.shields.io/github/downloads/arthurvasconcelos/vue-izitoast/latest/total.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/releases/latest)
[![Commits since latest GH release](https://img.shields.io/github/commits-since/arthurvasconcelos/vue-izitoast/latest.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/commits/master)
[![GH Forks](https://img.shields.io/github/forks/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/network)
[![GH Starts](https://img.shields.io/github/stars/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/stargazers)
[![GH Watchers](https://img.shields.io/github/watchers/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/watchers)

[![NPM Latest Package Release](https://img.shields.io/npm/v/vue-izitoast.svg?style=flat-square)](https://www.npmjs.com/package/vue-izitoast)
[![NPM Package Downloads](https://img.shields.io/npm/dt/vue-izitoast.svg?style=flat-square)](https://www.npmjs.com/package/vue-izitoast)
[![License](https://img.shields.io/github/license/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/blob/master/LICENSE)
[![Compatible Node Version](https://img.shields.io/node/v/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/blob/master/package.json#L36)

![cover](http://i.imgur.com/NKk7Rxm.png)

## Requirements

- **Vue:** _^2.0.0_
- **iziToast:** _lastest_

## Install
```sh
$ npm install vue-izitoast --save

$ yarn add vue-izitoast
```

## Configuration

```javascript
import Vue from 'vue';
import VueIziToast from 'vue-izitoast';

import 'izitoast/dist/css/iziToast.css';
or
import 'izitoast/dist/css/iziToast.min.css';

Vue.use(VueIziToast);
or
Vue.use(VueIziToast, defaultOptionsObject);
```

## Usage [![Edit Vue-Izitoast Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8l1y3mn8rl)

```javascript
new Vue({
    el: '#app',
    data() {
        return {
            notificationSystem: {
                options: {
                    show: {
                        theme: 'dark',
                        icon: 'icon-person',
                        position: 'topCenter',
                        progressBarColor: 'rgb(0, 255, 184)',
                        buttons: [
                            ['<button>Ok</button>', function (instance, toast) {
                                alert("Hello world!");
                            }, true],
                            ['<button>Close</button>', function (instance, toast) {
                                instance.hide({
                                    transitionOut: 'fadeOutUp',
                                    onClosing: function(instance, toast, closedBy){
                                        console.info('closedBy: ' + closedBy);
                                    }
                                }, toast, 'buttonName');
                            }]
                        ],
                        onOpening: function(instance, toast){
                            console.info('callback abriu!');
                        },
                        onClosing: function(instance, toast, closedBy){
                            console.info('closedBy: ' + closedBy);
                        }
                    },
                    ballon: {
                        balloon: true,
                        position: 'bottomCenter'
                    },
                    info: {
                        position: 'bottomLeft'
                    },
                    success: {
                        position: 'bottomRight'
                    },
                    warning: {
                        position: 'topLeft'
                    },
                    error: {
                        position: 'topRight'
                    },
                    question: {
                        timeout: 20000,
                        close: false,
                        overlay: true,
                        toastOnce: true,
                        id: 'question',
                        zindex: 999,
                        position: 'center',
                        buttons: [
                            ['<button><b>YES</b></button>', function (instance, toast) {
                                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                            }, true],
                            ['<button>NO</button>', function (instance, toast) {
                                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                            }]
                        ],
                        onClosing: function(instance, toast, closedBy){
                            console.info('Closing | closedBy: ' + closedBy);
                        },
                        onClosed: function(instance, toast, closedBy){
                            console.info('Closed | closedBy: ' + closedBy);
                        }
                    }
                }
            }
        };
    },
    mounted: function() {
        this.$toast.show('Welcome!', 'Hey', notificationSystem.options.show);
        this.$toast.show('Welcome!', 'Hey', notificationSystem.options.ballon);
        this.$toast.info('Welcome!', 'Hello', notificationSystem.options.info);
        this.$toast.success('Successfully inserted record!', 'OK', notificationSystem.options.success);
        this.$toast.warning('You forgot important data', 'Caution', notificationSystem.options.warning);
        this.$toast.error('Illegal operation', 'Error', notificationSystem.options.error);
        this.$toast.question('Are you sure about that?', 'Hey', notificationSystem.options.question);
    }
})
```

## Contributing
- Vue-Izitoast Issues: https://github.com/arthurvasconcelos/vue-izitoast/issues
- IziToast Issues: https://github.com/dolce/iziToast/issues

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

![Live Long and Prosper](http://i.imgur.com/wtGmSKO.png)