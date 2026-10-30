# Guía Teórica Completa: Vue.js, Ionic y Capacitor

> **Nota importante:** En el enunciado aparece escrito *"view"* o *"view.js"* por pronunciación en inglés (`/vjuː/`), pero el nombre correcto de la tecnología es **Vue.js** (y su integración con Ionic es **Ionic Vue**).

---

## 1. ¿Qué es Vue.js?

**Vue.js** (comúnmente llamado simplemente **Vue**) es un **framework progresivo de JavaScript** de código abierto, creado por Evan You, utilizado para construir interfaces de usuario (UI) interactivas y aplicaciones de una sola página (**SPA** - *Single Page Applications*).

Sus características principales son:
- **Progresivo:** Se puede usar desde algo tan simple como darle interactividad a una pequeña parte de una página HTML hasta construir aplicaciones empresariales grandes y complejas.
- **Basado en componentes:** Permite dividir la interfaz en piezas pequeñas, independientes y reutilizables (archivos `.vue`).
- **Reactivo y declarativo:** Cuando una variable cambia en JavaScript, Vue actualiza automáticamente la pantalla (el DOM) sin tener que manipular el HTML manualmente.

---

## 2. ¿Qué es Ionic?

**Ionic Framework** es un **kit de herramientas de interfaz de usuario (UI Toolkit)** de código abierto para construir aplicaciones móviles (Android e iOS), de escritorio y aplicaciones web progresivas (PWA) de alto rendimiento utilizando tecnologías web estándar (**HTML, CSS y JavaScript/TypeScript**).

- Proporciona un catálogo de **componentes visuales listos para usar** (botones, tarjetas, barras de navegación, listas, modales, pestañas, iconos) que se adaptan automáticamente al diseño nativo de cada sistema operativo: **Material Design** en Android y **Cupertino** en iOS.

---

## 3. ¿Qué es Capacitor?

**Capacitor** es un **runtime nativo multiplataforma** (el sucesor moderno de Apache Cordova) creado por el mismo equipo de Ionic.

Su función es:
1. **Empaquetar la aplicación web** dentro de un contenedor nativo (*WebView*) para poder compilarla como una aplicación real de **Android (`.apk` / `.aab`)** o **iOS (`.ipa`)** y subirla a Google Play Store o App Store.
2. **Servir de puente con el hardware del teléfono:** Proporciona APIs y plugins en JavaScript para acceder a funciones nativas del dispositivo como la **cámara, GPS/geolocalización, sistema de archivos, vibración, notificaciones push, huella dactilar**, etc.

---

## 4. ¿Qué relación hay entre Capacitor e Ionic?

**Ionic y Capacitor son tecnologías complementarias que trabajan juntas:**

| Tecnología | Rol que cumple en la aplicación móvil |
| :--- | :--- |
| **Ionic Framework** | Se encarga de la **parte visual (Interfaz de Usuario / UI)**: que la aplicación se vea, se sienta y tenga animaciones como una app móvil nativa por dentro. |
| **Capacitor** | Se encarga de la **capa nativa (Sistema Operativo y Hardware)**: toma el proyecto web de Ionic, lo convierte en un proyecto nativo de Android Studio / Xcode y le da acceso a la cámara, sensores y almacenamiento del celular. |

> **En resumen:** Con **Ionic** diseñas la pantalla móvil y con **Capacitor** la conviertes en una app instalable en el teléfono con acceso al hardware.

---

## 5. ¿Qué es Ionic Vue (`@ionic/vue`)?

**Ionic Vue** (paquete oficial `@ionic/vue`) es la versión de Ionic Framework diseñada específicamente para integrarse con **Vue.js 3**.

Permite utilizar todos los componentes móviles de Ionic (`<ion-page>`, `<ion-header>`, `<ion-content>`, `<ion-card>`, `<ion-button>`, `<ion-icon>`, etc.) directamente como componentes nativos de Vue, integrando además:
- El sistema de rutas de Vue (`@ionic/vue-router`) con animaciones de transición móvil.
- Los eventos del ciclo de vida móvil de Ionic (`onIonViewWillEnter`, `onIonViewDidEnter`, `onIonViewWillLeave`, `onIonViewDidLeave`).

---

## 6. ¿Qué relación hay entre Vue e Ionic?

En el desarrollo de una aplicación móvil híbrida:
- **Vue.js** pone el **"cerebro" de la interfaz**: la estructura de componentes (`.vue`), el manejo de datos, los eventos (clics, formularios) y la **reactividad**.
- **Ionic** pone el **"cuerpo y diseño móvil"**: los componentes visuales adaptados a pantallas táctiles, barras de navegación, iconos (`ionicons`) y estilos de Android/iOS.

Ionic originalmente solo funcionaba con Angular, pero hoy es *agnóstico al framework* y soporta oficialmente **Vue**, **React** y **Angular**.

---

## 7. ¿Cómo instalar Ionic en Node.js?

Para trabajar con Ionic y Vue en tu computador necesitas tener instalado **Node.js** (que incluye el gestor de paquetes `npm`).

### Paso a paso de instalación:

1. **Instalar Node.js:**
   Descarga e instala la versión **LTS** desde [https://nodejs.org](https://nodejs.org).
   Verifica en la terminal (PowerShell o CMD) que quedó instalado:
   ```bash
   node -v
   npm -v
   ```

2. **Instalar el CLI (Interfaz de Línea de Comandos) de Ionic globalmente:**
   ```bash
   npm install -g @ionic/cli
   ```

3. **Crear un nuevo proyecto con Ionic y Vue:**
   ```bash
   ionic start mi-hoja-de-vida blank --type=vue
   ```
   *(Donde `blank` es la plantilla en blanco y `--type=vue` indica que usaremos Vue.js).*

4. **Entrar a la carpeta del proyecto e iniciar el servidor en el navegador:**
   ```bash
   cd mi-hoja-de-vida
   ionic serve
   ```
   *(También puedes usar `npm run dev` para abrir la aplicación en `http://localhost:5173` o `http://localhost:8100`).*

---

## 8. ¿Cuál es el flujo de ejecución de una aplicación Vue (`index.html`, `main` y `App.vue`)?

Cuando ejecutas una aplicación Vue, los tres archivos principales se cargan y conectan en el siguiente orden:

```
[ 1. index.html ]  --->  [ 2. src/main.ts (o main.js) ]  --->  [ 3. src/App.vue ]  --->  [ 4. Componentes Hijos ]
```

### Detalle de cada paso:

1. **`index.html` (Contenedor HTML inicial):**
   Es el primer archivo que lee el navegador web. Contiene un elemento vacío `<div id="app"></div>` (donde vivirá toda nuestra aplicación) y una etiqueta `<script type="module" src="/src/main.ts"></script>` que llama al archivo `main`.

2. **`src/main.ts` o `src/main.js` (Punto de entrada / Inicializador de JavaScript):**
   Es el puente entre el HTML y Vue:
   - Importa la función `createApp` de `'vue'`.
   - Importa el componente raíz `App` desde `'./App.vue'`.
   - Importa y activa librerías como `IonicVue`, el `router` y los estilos CSS de Ionic.
   - Ejecuta `createApp(App).mount('#app')`, lo cual **inyecta (monta)** el componente `App.vue` dentro del `<div id="app">` del `index.html`.

3. **`src/App.vue` (Componente Raíz):**
   Es el componente padre principal de toda la aplicación. Envuelve la interfaz general (en Ionic suele contener `<ion-app>` y `<ion-router-outlet>`) y desde él se cargan las páginas y demás componentes hijos.

---

## 9. ¿Cuál es la estructura básica de un archivo Vue (`.vue`)?

En Vue se utilizan los **SFC (*Single-File Components* o Componentes de un Solo Archivo)** con extensión `.vue`. Un archivo `.vue` se divide en **3 bloques principales**:

```vue
<!-- 1. SCRIPT: Lógica en JavaScript/TypeScript, datos reactivos, funciones e importaciones -->
<script setup>
import { ref } from 'vue'

const nombre = ref('Leonel')
const saludar = () => {
  alert(`Hola, ${nombre.value}`)
}
</script>

<!-- 2. TEMPLATE: Estructura visual en HTML y componentes -->
<template>
  <div class="tarjeta">
    <h1>Hola {{ nombre }}</h1>
    <button @click="saludar">Saludar</button>
  </div>
</template>

<!-- 3. STYLE: Estilos CSS propios del componente -->
<style scoped>
.tarjeta {
  padding: 16px;
  border-radius: 8px;
  background-color: #f4f5f8;
}
</style>
```

- **`<script setup>`:** Contiene las variables, funciones, propiedades (`props`) e importaciones de otros componentes.
- **`<template>`:** Contiene el código HTML enriquecido con la sintaxis de Vue (`{{ variable }}`, `@click`, `v-for`, `v-if`).
- **`<style scoped>`:** Contiene el diseño en CSS. La palabra `scoped` asegura que esos estilos solo afecten a este archivo `.vue` y no dañen el diseño de otros componentes.

---

## 10. ¿Qué es un componente en Vue, cómo se invocan y cómo se reutilizan?

### ¿Qué es un componente?
Un **componente** es un bloque de interfaz independiente, aislado y reutilizable (como una pieza de LEGO). Por ejemplo, en una hoja de vida podemos tener un componente `EncabezadoPerfil.vue`, un componente `TarjetaExperiencia.vue` y un componente `ContadorReacciones.vue`.

### ¿Cómo se invoca un componente?
Para usar un componente hijo dentro de otro componente padre se hacen 2 pasos:
1. **Importarlo** dentro de `<script setup>`.
2. **Usarlo como etiqueta HTML** dentro de `<template>`.

```vue
<script setup>
// 1. Importamos el componente
import ContadorReacciones from './components/ContadorReacciones.vue'
</script>

<template>
  <!-- 2. Lo invocamos como una etiqueta HTML -->
  <ContadorReacciones />
</template>
```

### ¿Cómo se reutiliza un componente?
Un componente se reutiliza pasándole **datos dinámicos a través de `props` (propiedades)** o repitiéndolo automáticamente con la directiva `v-for`.

- **En el componente hijo (`TarjetaItem.vue`):** recibe los datos usando `defineProps`:
  ```vue
  <script setup>
  defineProps({
    titulo: String,
    institucion: String,
    periodo: String
  })
  </script>
  <template>
    <div class="item">
      <h3>{{ titulo }}</h3>
      <p>{{ institucion }} ({{ periodo }})</p>
    </div>
  </template>
  ```
- **En el componente padre (`App.vue`):** lo reutilizamos varias veces con diferente información:
  ```vue
  <template>
    <TarjetaItem titulo="Ingeniería de Sistemas" institucion="Universidad" periodo="2022 - 2026" />
    <TarjetaItem titulo="Curso de Vue.js e Ionic" institucion="Platzi / Udemy" periodo="2025" />
  </template>
  ```

---

## 11. ¿Qué es la reactividad y cómo se implementa en Vue?

### ¿Qué es la reactividad?
La **reactividad** es la capacidad que tiene Vue de **"escuchar" los cambios en las variables de JavaScript y actualizar automáticamente el HTML en pantalla** en el mismo instante en que el dato cambia.

Por ejemplo, en nuestro contador de 👍 *Me gusta* y 👎 *No me gusta*, cuando el usuario hace clic y la variable `meGusta` pasa de `0` a `1`, Vue redibuja automáticamente el número en la pantalla sin recargar la página.

### ¿Cómo se implementa en Vue 3?
En Vue 3 (usando la *Composition API*), la reactividad se implementa principalmente con dos funciones que se importan desde `'vue'`:

1. **`ref()` (Referencia Reactiva):**
   Ideal para valores simples como números, textos o booleanos.
   - En el `<script setup>` se modifica accediendo a `.value` (`likes.value++`).
   - En el `<template>` se muestra directamente con `{{ likes }}` (sin escribir `.value`).

   ```vue
   <script setup>
   import { ref } from 'vue'

   // Declaramos estados reactivos inicializados en 0
   const likes = ref(0)
   const dislikes = ref(0)

   // Funciones que modifican el estado reactivo
   const darLike = () => {
     likes.value++
   }
   const darDislike = () => {
     dislikes.value++
   }
   </script>

   <template>
     <div>
       <button @click="darLike">👍 Me gusta ({{ likes }})</button>
       <button @click="darDislike">👎 No me gusta ({{ dislikes }})</button>
     </div>
   </template>
   ```

2. **`reactive()` (Objeto Reactivo):**
   Ideal para agrupar varios datos en un objeto (por ejemplo, los datos personales de una persona):
   ```js
   import { reactive } from 'vue'

   const persona = reactive({
     nombre: 'Leonel',
     apellido: 'Pérez',
     correo: 'leonel@ejemplo.com'
   })
   ```

