/*
 * vue-izitoast | v1.0.0
 * http://arthurvasconcelos.com.br
 * by Arthur Vasconcelos.
 */

import iziToast from 'izitoast';

export default function plugin (Vue, options = {}) {
    if (options && options.constructor !== Object) throw 'Options must be a object';

    const version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;

    /* istanbul ignore if */
    // Exit if the plugin has already been installed.
    if (process.env.NODE_ENV !== 'production' && plugin.installed) {
        console.warn('already installed.');
        return;
    }

    plugin.installed = true;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && version < 2) {
        console.warn(`vue-izitoast (${plugin.version}) need to use Vue 2.0 or later (Vue: ${Vue.version}).`);
        return;
    }

    // http://izitoast.marcelodolce.com/#Options
    const defaultOptions = {
        zindex: 99999,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        rtl: false,
        position: 'bottomRight',
        timeout: 5000,
        animateInside: true,
        drag: true,
        pauseOnHover: true,
        resetOnHover: false,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {}
    };

    iziToast.settings(Object.assign({}, defaultOptions, options));

    const toasts = new Vue({
        _izi: iziToast,
        _checkParams(message, title, options) {
            if (!message || message.constructor !== String) throw 'Message must be a string';
            if (title && title.constructor !== String) throw 'Title must be a string';
            if (options && options.constructor !== Object) throw 'Options must be a object';
        },
        _checkEventNames(eventName) {
            if (!eventName || eventName.constructor !== String) throw 'Event Name must be a string';
            if (eventName !== 'iziToast-open' && eventName !== 'iziToast-close') throw 'Event Name has only two possible values: iziToast-open or iziToast-close';
        },
        methods: {
            show(message, title = '', options = {}) {
                this.$options._checkParams(message, title, options);
                this.$options._izi.show(Object.assign({}, options, { message, title }));
            },
            hide(toast = null, options = {}) {
                if (toast && toast.constructor !== String) toast = document.querySelector(toast);
                if (!toast || toast.constructor !== HTMLDivElement) toast = document.querySelector('.iziToast');
                if (options && options.constructor !== Object) throw 'Options must be a object';
                this.$options._izi.hide(options, toast);
            },
            progress(toast, options = {}, callback = () => {}) {
                if (toast && toast.constructor !== String) toast = document.querySelector(toast);
                if (!toast || toast.constructor !== HTMLDivElement) toast = document.querySelector('.iziToast');
                if (options && options.constructor !== Object) throw 'Options must be a object';
                if (callback && callback.constructor !== Function) throw 'Callback must be a function';

                return this.$options._izi.progress(toast, options, callback);
            },
            destroy() {
                this.$options._izi.destroy();
            },
            info(message, title = '', options = {}) {
                this.$options._checkParams(message, title, options);
                this.$options._izi.info(Object.assign({}, options, { message, title }));
            },
            success(message, title = '', options = {}) {
                this.$options._checkParams(message, title, options);
                this.$options._izi.success(Object.assign({}, options, { message, title }));
            },
            warning(message, title = '', options = {}) {
                this.$options._checkParams(message, title, options);
                this.$options._izi.warning(Object.assign({}, options, { message, title }));
            },
            error(message, title = '', options = {}) {
                this.$options._checkParams(message, title, options);
                this.$options._izi.error(Object.assign({}, options, { message, title }));
            },
            question(message, title = '', options = {}) {
                this.$options._checkParams(message, title, options);
                this.$options._izi.question(Object.assign({}, options, { message, title }));
            },
            on(eventName, callback) {
                this.$options._checkEventNames(eventName);
                if (!callback || callback.constructor !== Function) throw 'Callback must be a function';
                document.addEventListener(eventName, callback);
            },
            off(eventName) {
                this.$options._checkEventNames(eventName);
                document.removeEventListener(eventName);
            }
        }
    });

    Object.defineProperty(Vue.prototype, '$toast', {
        get() { return toasts; }
    });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}
