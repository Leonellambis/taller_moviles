<!-- 1. SCRIPT: Recibe el estado actual y la URL del sitio propio -->
<script setup>
import { IonFooter, IonToolbar, IonButton } from '@ionic/vue'

defineProps({
  estadoTexto: {
    type: String,
    default: 'Disponible para proyectos y ofertas laborales'
  },
  urlSitioPropio: {
    type: String,
    required: true
  },
  nombreSitio: {
    type: String,
    default: 'Ir a mi Sitio Web / Portafolio'
  }
})
</script>

<!-- 2. TEMPLATE: Barrita de estado inferior con enlace a sitio propio -->
<template>
  <ion-footer class="barra-estado-footer">
    <ion-toolbar class="barra-estado-toolbar">
      <div class="barra-estado-contenedor">
        <div class="indicador-estado">
          <span class="punto-verde"></span>
          <span class="texto-estado"><strong>Estado:</strong> {{ estadoTexto }}</span>
        </div>

        <ion-button
          color="primary"
          size="small"
          shape="round"
          :href="urlSitioPropio"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 {{ nombreSitio }} ↗
        </ion-button>
      </div>
    </ion-toolbar>
  </ion-footer>
</template>

<!-- 3. STYLE: Estilos de la barrita de estado inferior -->
<style scoped>
.barra-estado-toolbar {
  --background: #0f172a;
  --color: #f8fafc;
  padding: 4px 12px;
}

.barra-estado-contenedor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 900px;
  margin: 0 auto;
  padding: 4px 8px;
}

.indicador-estado {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #e2e8f0;
}

.punto-verde {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  display: inline-block;
}
</style>

