import { createApp } from 'vue'
import './css/style.css';
import App from './App.vue'
import { $router } from './router';

/**
 * Vue Application
 */
const app = createApp(App);
/**
 * Vue Router
 */
app.use($router);

app.mount('#app');
