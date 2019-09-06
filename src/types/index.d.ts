import Vue, { PluginFunction } from 'vue';

export class VueIzitoast {
    constructor(options?: VueIzitoastOptions);

    static install(): PluginFunction<any>;

    static init(Vue: Vue): void;

    public show(message: string, title: string, options: VueIzitoastOptions): void;

    public hide(toast: string | HTMLDivElement | null, options: VueIzitoastOptions): void;

    public progress(toast: string | HTMLDivElement | null, options: VueIzitoastOptions, callback: () => void): void;

    public destroy(): void;

    public info(message: string, title: string, options: VueIzitoastOptions): void;

    public success(message: string, title: string, options: VueIzitoastOptions): void;

    public warning(message: string, title: string, options: VueIzitoastOptions): void;

    public error(message: string, title: string, options: VueIzitoastOptions): void;

    public question(message: string, title: string, options: VueIzitoastOptions): void;

    public on<CB>(eventName: string, callback: CB): void;

    public off<CB>(eventName: string, callback: CB): void;
}

export interface VueIzitoastOptions {
    zindex: number;
    layout: number;
    balloon: boolean;
    close: boolean;
    closeOnEscape: boolean;
    rtl: boolean;
    position: string;
    timeout: number;
    animateInside: boolean;
    drag: boolean;
    pauseOnHover: boolean;
    resetOnHover: boolean;
    transitionIn: string;
    transitionOut: string;
    transitionInMobile: string;
    transitionOutMobile: string;
    buttons: unknown;
    inputs: unknown;
    onOpening: () => void;
    onOpened: () => void;
    onClosing: () => void;
    onClosed: () => void;
}

// https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
declare module 'vue/types/vue' {
    interface Vue {
        $toast: VueIzitoast;
        __$VueIzitoastInstance: VueIzitoast;
    }

    interface VueConstructor {
        toast: VueIzitoast;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        vueIzitoastSettings?: VueIzitoastOptions | VueIzitoast
    }
}
