# Vue iziToast

Elegant, responsive, flexible and lightweight notification plugin implemented for Vue 2 of [iziToast](https://github.com/dolce/iziToast)

[![Build Status](https://travis-ci.org/arthurvasconcelos/vue-izitoast.svg?branch=master&style=flat-square)](https://travis-ci.org/arthurvasconcelos/vue-izitoast)

[![dependencies Status](https://david-dm.org/arthurvasconcelos/vue-izitoast/status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-izitoast)
[![devDependencies Status](https://david-dm.org/arthurvasconcelos/vue-izitoast/dev-status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-izitoast?type=dev)
[![peerDependencies Status](https://david-dm.org/arthurvasconcelos/vue-izitoast/peer-status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-izitoast?type=peer)

[![Latest GH Latest Release](https://img.shields.io/github/release/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/releases/latest)
[![Commits since latest GH release](https://img.shields.io/github/commits-since/arthurvasconcelos/vue-izitoast/latest.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/commits/master)
[![GH Forks](https://img.shields.io/github/forks/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/network)
[![GH Starts](https://img.shields.io/github/stars/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/stargazers)
[![GH Watchers](https://img.shields.io/github/watchers/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/watchers)

[![NPM Latest Package Release](https://img.shields.io/npm/v/vue-izitoast.svg?style=flat-square)](https://www.npmjs.com/package/vue-izitoast)
[![NPM Package Downloads](https://img.shields.io/npm/dt/vue-izitoast.svg?style=flat-square)](https://www.npmjs.com/package/vue-izitoast)
[![License](https://img.shields.io/github/license/arthurvasconcelos/vue-izitoast.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-izitoast/blob/master/LICENSE)

![cover](http://i.imgur.com/NKk7Rxm.png)

## Table of Contents

- [Vue iziToast](#vue-izitoast)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Install](#install)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [Contributors](#contributors)

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

## Usage

See examples in our [<img src="resources/storybook-logo.png" alt="Storybook" width="30">](https://arthurvasconcelos.com.br/vue-izitoast)

or Try on [![Edit Vue-Izitoast Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8l1y3mn8rl)

## Testing

Vue Izitoast is using Github Actions as CD/CI. As it still in beta, it may not appear to everyone but you still can inspect the last run clicking in this badge [![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Farthurvasconcelos%2Fvue-izitoast%2Fbadge&style=flat-square)](https://actions-badge.atrox.dev/arthurvasconcelos/vue-izitoast/goto) and/or inspect the workflow files [here](https://github.com/arthurvasconcelos/vue-izitoast/tree/master/.github/workflows).

## Contributing

- Vue-Izitoast Issues: https://github.com/arthurvasconcelos/vue-izitoast/issues
- IziToast Issues: https://github.com/dolce/iziToast/issues

## Contributors

<!-- Contributors start -->
[<img alt="arthurvasconcelos" src="https://avatars3.githubusercontent.com/u/1286768?v=4&s=117" width="117">](https://github.com/arthurvasconcelos) |[<img alt="lgguzman" src="https://avatars3.githubusercontent.com/u/7071825?v=4&s=117" width="117">](https://github.com/lgguzman) |[<img alt="webmcheck" src="https://avatars2.githubusercontent.com/u/1275723?v=4&s=117" width="117">](https://github.com/webmcheck) |
:---: |:---: |:---: |
[arthurvasconcelos](https://github.com/arthurvasconcelos) |[lgguzman](https://github.com/lgguzman) |[webmcheck](https://github.com/webmcheck) |
<!-- Contributors end -->

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

![Live Long and Prosper](http://i.imgur.com/wtGmSKO.png)
