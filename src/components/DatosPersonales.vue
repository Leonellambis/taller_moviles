<!-- 1. SCRIPT: Recibe el objeto reactivo con los datos personales -->
<script setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue'

defineProps({
  persona: {
    type: Object,
    required: true
  }
})
</script>

<!-- 2. TEMPLATE: Tarjeta con Nombre, Apellido, Dirección, Correo, Género, etc. -->
<template>
  <ion-card class="seccion-card">
    <ion-card-header>
      <ion-card-title class="titulo-seccion">
        👤 Datos Personales
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <div class="grid-datos">
        <div class="dato-item">
          <span class="dato-etiqueta">Nombres</span>
          <span class="dato-valor">{{ persona.nombre }}</span>
        </div>

        <div class="dato-item">
          <span class="dato-etiqueta">Apellidos</span>
          <span class="dato-valor">{{ persona.apellido }}</span>
        </div>

        <div class="dato-item">
          <span class="dato-etiqueta">Identificación</span>
          <span class="dato-valor">{{ persona.identidad }}</span>
        </div>

        <div class="dato-item">
          <span class="dato-etiqueta">Género</span>
          <span class="dato-valor">{{ persona.genero }}</span>
        </div>

        <div class="dato-item">
          <span class="dato-etiqueta">Dirección</span>
          <span class="dato-valor">{{ persona.direccion }}</span>
        </div>

        <div class="dato-item">
          <span class="dato-etiqueta">Correo Electrónico</span>
          <span class="dato-valor">{{ persona.correo }}</span>
        </div>

        <div class="dato-item">
          <span class="dato-etiqueta">Teléfono / Celular</span>
          <span class="dato-valor">{{ persona.telefono }}</span>
        </div>

        <div class="dato-item">
          <span class="dato-etiqueta">Ciudad / País</span>
          <span class="dato-valor">{{ persona.ciudad }}</span>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<!-- 3. STYLE: Diseño en cuadrícula adaptable -->
<style scoped>
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

.grid-datos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-top: 4px;
}

.dato-item {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
}

.dato-etiqueta {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 2px;
}

.dato-valor {
  font-size: 0.98rem;
  color: #0f172a;
  font-weight: 600;
}
</style>

