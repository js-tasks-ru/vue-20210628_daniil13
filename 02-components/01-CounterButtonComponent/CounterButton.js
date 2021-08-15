import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: () => 0,
      required: true,
    },
  },
  emits: ['update:count'],

  methods: {
    buttonClick(value) {
      this.$emit('update:count', value + 1);
    },
  },
  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="buttonClick(count)">{{ count }}</button>`,
});
