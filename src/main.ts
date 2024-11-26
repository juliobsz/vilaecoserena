import '@/assets/css/index.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './utils/router';

const app = createApp(App);
import Button from 'primevue/button'

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('Button', Button);
app.mount('#app');
