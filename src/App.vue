<!-- 1. SCRIPT: Componente Raíz App.vue donde se importan y reutilizan los componentes -->
<script setup>
import { reactive, ref } from 'vue'
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'

// Importación de nuestros componentes propios de Vue
import EncabezadoPerfil from './components/EncabezadoPerfil.vue'
import ContadorReacciones from './components/ContadorReacciones.vue'
import DatosPersonales from './components/DatosPersonales.vue'
import TarjetaItem from './components/TarjetaItem.vue'
import BarraEstado from './components/BarraEstado.vue'

// Datos personales reactivos (fáciles de editar)
const persona = reactive({
  nombre: 'Leonel',
  apellido: 'Lambis',
  identidad: '1.098.765.432',
  profesion: 'Desarrollador de Aplicaciones Móviles & Web (Vue.js / Ionic)',
  genero: 'Masculino',
  direccion: 'Calle 45 # 23 - 10, Barrio Centro',
  correo: 'lambisxd@gmail.com',
  telefono: '+57 300 123 4567',
  ciudad: 'Colombia',
  urlSitioPropio: 'https://github.com/Leonellambis'
})

// Lista reactiva de Experiencia Académica y Cursos
const estudiosYCursos = ref([
  {
    id: 1,
    titulo: 'Ingeniería de Sistemas / Tecnología en Desarrollo de Software',
    entidad: 'Universidad / Institución Universitaria',
    periodo: '2022 - Actualidad',
    tipo: 'Pregrado',
    descripcion: 'Formación en desarrollo móvil híbrido, arquitectura de software, bases de datos y programación orientada a objetos.'
  },
  {
    id: 2,
    titulo: 'Curso Profesional de Desarrollo Móvil con Ionic, Capacitor y Vue 3',
    entidad: 'Academia Online (Udemy / Platzi)',
    periodo: '2025 (60 horas)',
    tipo: 'Curso Certificado',
    descripcion: 'Creación de componentes reactivos en Vue.js, integración con Capacitor y despliegue en dispositivos Android.'
  },
  {
    id: 3,
    titulo: 'Diplomado en Desarrollo Web Frontend Moderno (JavaScript ES6+, HTML5 y CSS3)',
    entidad: 'SENA / Ministerio TIC',
    periodo: '2024 (120 horas)',
    tipo: 'Diplomado',
    descripcion: 'Diseño de interfaces responsivas, consumo de APIs REST y control de versiones con Git y GitHub.'
  }
])

// Lista reactiva de Experiencia Laboral
const experienciasLaborales = ref([
  {
    id: 1,
    titulo: 'Desarrollador Frontend & Móvil Junior',
    entidad: 'Soluciones Digitales S.A.S.',
    periodo: 'Enero 2025 - Actualidad',
    tipo: 'Tiempo Completo',
    descripcion: 'Desarrollo y mantenimiento de aplicaciones móviles híbridas utilizando Vue.js, Ionic Framework y Capacitor, optimizando tiempos de carga y experiencia de usuario.'
  },
  {
    id: 2,
    titulo: 'Practicante / Auxiliar de Desarrollo Web',
    entidad: 'InnovaTech Colombia',
    periodo: 'Febrero 2024 - Diciembre 2024',
    tipo: 'Práctica Profesional',
    descripcion: 'Maquetación de módulos web interactivos, creación de componentes reutilizables en Vue y soporte técnico a plataformas internas.'
  }
])
</script>

<!-- 2. TEMPLATE: Estructura de la página siguiendo exactamente el orden solicitado -->
<template>
  <ion-app>
    <!-- Barra superior de la aplicación Ionic -->
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Hoja de Vida — Ionic + Vue.js</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido principal desplazable -->
    <ion-content class="fondo-pagina">
      <div class="contenedor-principal">
        <!-- 1. ARRIBA: Nombre e Identidad + DEBAJO: Separador de línea -->
        <EncabezadoPerfil
          :nombreCompleto="`${persona.nombre} ${persona.apellido}`"
          :identidad="persona.identidad"
          :profesion="persona.profesion"
        />

        <!-- CONTADOR DE ME GUSTA 👍 Y NO ME GUSTA 👎 (Reactividad en Vue) -->
        <ContadorReacciones />

        <!-- 2. DEBAJO: Datos de una persona (Nombre, Apellido, Dirección, Correo, Género, etc.) -->
        <DatosPersonales :persona="persona" />

        <!-- 3. DEBAJO: Sección de Experiencia Académica, Cursos, etc. (Reutilizando TarjetaItem) -->
        <ion-card class="seccion-card">
          <ion-card-header>
            <ion-card-title class="titulo-seccion">
              🎓 Experiencia Académica y Cursos
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <TarjetaItem
              v-for="estudio in estudiosYCursos"
              :key="estudio.id"
              :titulo="estudio.titulo"
              :entidad="estudio.entidad"
              :periodo="estudio.periodo"
              :tipo="estudio.tipo"
              :descripcion="estudio.descripcion"
            />
          </ion-card-content>
        </ion-card>

        <!-- 4. DEBAJO: Sección de Experiencias Laborales (Reutilizando el mismo componente TarjetaItem) -->
        <ion-card class="seccion-card">
          <ion-card-header>
            <ion-card-title class="titulo-seccion">
              💼 Experiencia Laboral
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <TarjetaItem
              v-for="trabajo in experienciasLaborales"
              :key="trabajo.id"
              :titulo="trabajo.titulo"
              :entidad="trabajo.entidad"
              :periodo="trabajo.periodo"
              :tipo="trabajo.tipo"
              :descripcion="trabajo.descripcion"
            />
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>

    <!-- 5. POR ÚLTIMO: Barrita de estado inferior que lleva a un sitio propio -->
    <BarraEstado
      estadoTexto="En línea — Disponible para nuevos proyectos"
      :urlSitioPropio="persona.urlSitioPropio"
      nombreSitio="Visitar mi Sitio Propio / Portafolio"
    />
  </ion-app>
</template>

<!-- 3. STYLE: Estilos globales de distribución de la vista -->
<style scoped>
.fondo-pagina {
  --background: #f1f5f9;
}

.contenedor-principal {
  max-width: 880px;
  margin: 0 auto;
  padding-bottom: 32px;
}

.seccion-card {
  margin: 14px 16px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
}

.titulo-seccion {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
}
</style>

