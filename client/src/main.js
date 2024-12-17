import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import router from "./router"


const app = createApp(App)
app.use(router)
app.use(VueSmoothScroll)
app.mount('#app')
