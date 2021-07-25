import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const RootComponent = defineComponent({
    data() {
        return {
            index: 0,
        }
    },
})

const app = createApp(RootComponent);
const vm = app.mount('#app');