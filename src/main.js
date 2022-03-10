import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Expand } from '@element-plus/icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.productionTip = false;
app.use(ElementPlus)
app.component('expand',Expand)

app.mount('#app')
