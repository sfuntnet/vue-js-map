import  {createApp} from 'vue'
import App from './App.vue'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from './router'
import 'vuesax/dist/vuesax.css'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
createApp(App).use(router).mount('#app')



