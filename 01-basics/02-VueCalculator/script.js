import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  data() {
    return {
      value1: 0,
      value2: 0,
      result: 0,
      radio: 'sum',
    };
  },

  computed: {
    calcResult() {
      switch(this.radio) {
        case 'sum': 
          return (this.result = Number(this.value1) + Number(this.value2))
        case 'subtract': 
          return (this.result = this.value1 - this.value2)
        case 'multiply': 
          return (this.result = this.value1 * this.value2)
        case 'divide': 
          return (this.result = this.value1 / this.value2)
        default: 
          return (this.result = Number(this.value1) + Number(this.value2))
      }
    },
  },
})

const app = createApp(RootComponent);
const vm = app.mount('#app');