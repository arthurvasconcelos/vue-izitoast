import Vue, { PluginFunction } from 'vue';

export class VueIzitoast {
    constructor(options?: VueIzitoastOptions);

    static install(): PluginFunction<any>;

    static init(Vue: Vue): void;

    public show(message: string, title?: string, options?: VueIzitoastOptions): void;

    public hide(toast: string | HTMLDivElement | null, options?: VueIzitoastOptions): void;

    public progress(toast: string | HTMLDivElement | null, options?: VueIzitoastOptions, callback?: () => void): void;

    public destroy(): void;

    public info(message: string, title?: string, options?: VueIzitoastOptions): void;

    public success(message: string, title?: string, options?: VueIzitoastOptions): void;

    public warning(message: string, title?: string, options?: VueIzitoastOptions): void;

    public error(message: string, title?: string, options?: VueIzitoastOptions): void;

    public question(message: string, title?: string, options?: VueIzitoastOptions): void;

    public on<CB>(eventName: string, callback: CB): void;

    public off<CB>(eventName: string, callback: CB): void;
}

export interface VueIzitoastOptions {
    animateInside?: boolean;
    backgroundColor?: string;
    balloon?: boolean;
    buttons?: object;
    class?: string;
    close?: boolean;
    closeOnClick?: boolean;
    closeOnEscape?: boolean;
    color?: string;
    displayMode?: string;
    drag?: boolean;
    icon?: string;
    iconColor?: string;
    iconText?: string;
    iconUrl?: string;
    id?: string;
    image?: string;
    imageWidth?: number;
    inputs?: object;
    layout?: number;
    maxWidth?: number;
    message?: string;
    messageColor?: string;
    messageLineHeight?: number;
    messageSize?: string;
    overlay?: boolean;
    overlayClose?: boolean;
    overlayColor?: boolean;
    pauseOnHover?: boolean;
    position?: string;
    progressBar?: boolean;
    progressBarColor?: string;
    progressBarEasing?: string;
    resetOnHover?: boolean;
    rtl?: boolean;
    target?: string;
    targetFirst?: boolean;
    theme?: string;
    timeout?: number;
    titleColor?: string;
    titleLineHeight?: string;
    titleSize?: string;
    transitionIn?: string;
    transitionInMobile?: string;
    transitionOut?: string;
    transitionOutMobile?: string;
    zindex?: number;

    onOpening?: () => void;
    onOpened?: () => void;
    onClosing?: () => void;
    onClosed?: () => void;
}

export const install: PluginFunction<{}>;

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
