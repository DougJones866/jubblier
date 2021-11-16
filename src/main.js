import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheNav from './components/ui/TheNav.vue'
import BaseButton from './components/ui/BaseButton.vue'
import ContactButton from './components/ui/ContactButton.vue'


const app = createApp(App)



app.use(router);

app.component('the-nav', TheNav);
app.component('base-button', BaseButton);
app.component('contact-button', ContactButton);



app.mount('#app');