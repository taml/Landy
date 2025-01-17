import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faImage, faICursor, faChevronUp, faChevronDown, faClone, faTrashCan } from "@fortawesome/free-solid-svg-icons"
library.add(faImage, faICursor, faChevronUp, faChevronDown, faClone, faTrashCan)

const app = createApp(App)

app.use(createPinia())
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
