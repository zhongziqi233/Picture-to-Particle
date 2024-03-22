import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import ColorPicker from 'colorpicker-v3';
import 'colorpicker-v3/style.css' 

const app = createApp(App);
app.use(store);
app.use(ColorPicker);
app.mount('#app');
