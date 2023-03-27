import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const vm = createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      operand: '',
    };
  },
  computed: {
    result() {
      switch (this.operand) {
        case 'sum':
          return this.num1 + this.num2;
        case 'subtract':
          return this.num1 - this.num2;
        case 'multiply':
          return this.num1 * this.num2;
        case 'divide':
          return this.num1 / this.num2;
      }
    },
  },
}).mount('#app');
