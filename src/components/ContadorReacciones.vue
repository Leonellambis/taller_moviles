<!-- 1. SCRIPT: Implementación de la Reactividad en Vue con ref() y computed() -->
<script setup>
import { ref, computed } from 'vue'
import { IonButton, IonCard, IonCardContent } from '@ionic/vue'

// Variables reactivas para el contador de Me gusta (👍) y No me gusta (👎)
const meGusta = ref(12)
const noMeGusta = ref(2)

// Funciones que incrementan o reinician los contadores reactivos
const incrementarMeGusta = () => {
  meGusta.value++
}

const incrementarNoMeGusta = () => {
  noMeGusta.value++
}

// Propiedad calculada (computed) que se actualiza sola cuando cambian los votos
const porcentajeAprobacion = computed(() => {
  const total = meGusta.value + noMeGusta.value
  if (total === 0) return 0
  return Math.round((meGusta.value / total) * 100)
})
</script>

<!-- 2. TEMPLATE: Botones de manito arriba y manito abajo con contadores en vivo -->
<template>
  <ion-card class="reacciones-card">
    <ion-card-content class="reacciones-contenido">
      <div class="reacciones-info">
        <span class="reacciones-titulo">¿Qué te parece este perfil profesional?</span>
        <span class="reacciones-subtitulo">
          Aprobación: <strong>{{ porcentajeAprobacion }}%</strong> ({{ meGusta + noMeGusta }} votos)
        </span>
      </div>

      <div class="botones-reaccion">
        <ion-button color="success" shape="round" @click="incrementarMeGusta">
          <span class="icono-mano">👍</span>
          <span>Me gusta ({{ meGusta }})</span>
        </ion-button>

        <ion-button color="danger" fill="outline" shape="round" @click="incrementarNoMeGusta">
          <span class="icono-mano">👎</span>
          <span>No me gusta ({{ noMeGusta }})</span>
        </ion-button>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<!-- 3. STYLE: Estilos del contador de reacciones -->
<style scoped>
.reacciones-card {
  margin: 12px 16px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
}

.reacciones-contenido {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.reacciones-info {
  display: flex;
  flex-direction: column;
}

.reacciones-titulo {
  font-weight: 700;
  color: #1e293b;
  font-size: 1rem;
}

.reacciones-subtitulo {
  font-size: 0.85rem;
  color: #64748b;
}

.botones-reaccion {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.icono-mano {
  font-size: 1.2rem;
  margin-right: 6px;
}
</style>

