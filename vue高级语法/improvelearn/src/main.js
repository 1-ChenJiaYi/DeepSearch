import { createApp } from 'vue'
import App from './App.vue'

import useDirectives from './directives'

const app = createApp(App)
useDirectives(app) 


// 挂载
app.mount('#app')
