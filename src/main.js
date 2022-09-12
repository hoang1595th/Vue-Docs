import { createApp } from 'vue'
import App from './App.vue'
import FormInputBindings from './components/FormInputBindings.vue'

import './assets/main.css'

const app = createApp(App);

app.config.errorHandler = (err) => {
  console.log("*****", err);
}

app.component(
  'FormInputBindings', FormInputBindings
)

app.mount('#app')
