<template>
    <div>
        <h1>Welcome to Vue-Izitoast examples page.</h1>

        <h2>Toast Types</h2>
        <button class="test-info" @click="info">Info Toast</button>
        <button class="test-success" @click="success">Success Toast</button>
        <button class="test-warning" @click="warning">Warning Toast</button>
        <button class="test-error" @click="error">Error Toast</button>
        <button class="test-question" @click="question">Question Toast</button>

        <h2>Toast Positions</h2>
        <button class="test-bottomRight" @click="() => show('bottomRight')">Toast in bottomRight</button>
        <button class="test-bottomLeft" @click="() => show('bottomLeft')">Toast in bottomLeft</button>
        <button class="test-topRight" @click="() => show('topRight')">Toast in topRight</button>
        <button class="test-topLeft" @click="() => show('topLeft')">Toast in topLeft</button>
        <button class="test-topCenter" @click="() => show('topCenter')">Toast in topCenter</button>
        <button class="test-bottomCenter" @click="() => show('bottomCenter')">Toast in bottomCenter</button>
        <button class="test-center" @click="() => show('center')">Toast in center</button>

        <h2>Custom Toast</h2>
        <form>
            <fieldset>
                <legend>Options</legend>
                <div>
                    <label for="which-title">Title</label>
                    <input type="text" id="which-title" :value="title"
                           @change="(event) => updateCustom('title', event.target.value)">
                </div>
                <div>
                    <label for="which-message">Message</label>
                    <input type="text" id="which-message" :value="message"
                           @change="(event) => updateCustom('message', event.target.value)">
                </div>
                <div>
                    <label for="is-balloon">Show as Balloon?</label>
                    <input type="checkbox" id="is-balloon" :checked="balloon"
                           @change="() => updateCustom('balloon', !balloon)">
                </div>
                <div>
                    <label for="can-close">Can Close?</label>
                    <input type="checkbox" id="can-close" :checked="close"
                           @change="() => updateCustom('close', !close)">
                </div>
                <div>
                    <label for="should-close-on-escape">Should close on escape?</label>
                    <input type="checkbox" id="should-close-on-escape" :checked="closeOnEscape"
                           @change="() => updateCustom('closeOnEscape', !closeOnEscape)">
                </div>
                <div>
                    <label for="which-position">Position</label>
                    <select id="which-position" @change="(event) => updateCustom('position', event.target.value)">
                        <option value="bottomRight">bottomRight</option>
                        <option value="bottomLeft">bottomLeft</option>
                        <option value="topRight">topRight</option>
                        <option value="topLeft">topLeft</option>
                        <option value="topCenter">topCenter</option>
                        <option value="bottomCenter">bottomCenter</option>
                        <option value="center">center</option>
                    </select>
                </div>
                <div>
                    <label for="how-much-timeout">Timeout</label>
                    <input type="number" id="how-much-timeout" min="0" :value="timeout"
                           @change="(event) => updateCustom('timeout', event.target.value)">
                </div>
                <div>
                    <label for="should-animate-inside">Should animate inside?</label>
                    <input type="checkbox" id="should-animate-inside" :checked="animateInside"
                           @change="() => updateCustom('animateInside', !animateInside)">
                </div>
                <div>
                    <label for="can-drag">Can drag?</label>
                    <input type="checkbox" id="can-drag" :checked="drag" @change="() => updateCustom('drag', !drag)">
                </div>
                <div>
                    <label for="pause-on-hover">Should pause on hover?</label>
                    <input type="checkbox" id="pause-on-hover" :checked="pauseOnHover"
                           @change="() => updateCustom('pauseOnHover', !pauseOnHover)">
                </div>
                <div>
                    <label for="reset-on-hover">Should reset on hover?</label>
                    <input type="checkbox" id="reset-on-hover" :checked="resetOnHover"
                           @change="() => updateCustom('resetOnHover', !resetOnHover)">
                </div>
            </fieldset>
        </form>
        <br/>
        <button class="test-custom" @click="custom">Custom Toast</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Custom Toast',
                message: 'this is a custom toast message',
                balloon: false,
                close: true,
                closeOnEscape: false,
                position: 'bottomRight',
                timeout: 5000,
                animateInside: true,
                drag: true,
                pauseOnHover: true,
                resetOnHover: false
            };
        },
        methods: {
            info() {
                this.$toast.info('Info Toast');
            },
            success() {
                this.$toast.success('Success Toast');
            },
            warning() {
                this.$toast.warning('Warning Toast');
            },
            error() {
                this.$toast.error('Error Toast');
            },
            question() {
                this.$toast.question('Question Toast');
            },
            show(position) {
                this.$toast.show(`Toast positioned to: ${ position }`, '', { position });
            },
            custom() {
                this.$toast.show(this.message, this.title, {
                    balloon: this.balloon,
                    close: this.close,
                    closeOnEscape: this.closeOnEscape,
                    position: this.position,
                    timeout: this.timeout,
                    animateInside: this.animateInside,
                    drag: this.drag,
                    pauseOnHover: this.pauseOnHover,
                    resetOnHover: this.resetOnHover
                });
            },
            updateCustom(key, value) {
                this[key] = value;
            }
        }
    };
</script>
