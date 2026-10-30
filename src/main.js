import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'

/* Estilos base requeridos por Ionic Framework */
import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Utilidades opcionales de CSS de Ionic */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

// Inicializamos la instancia de Vue con el componente raíz App.vue
const app = createApp(App)

// Registramos el plugin de Ionic Vue
app.use(IonicVue)

// Montamos la aplicación en el <div id="app"> de index.html
app.mount('#app')

