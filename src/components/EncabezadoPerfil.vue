<!-- 1. SCRIPT: Recibe como propiedades (props) el nombre, identidad y profesión -->
<script setup>
defineProps({
  nombreCompleto: {
    type: String,
    required: true
  },
  identidad: {
    type: String,
    required: true
  },
  profesion: {
    type: String,
    default: 'Desarrollador de Software & Aplicaciones Móviles'
  }
})
</script>

<!-- 2. TEMPLATE: Muestra arriba el nombre, la identidad y debajo la línea separadora -->
<template>
  <div class="encabezado-contenedor">
    <div class="avatar-circulo">
      {{ nombreCompleto.charAt(0) }}
    </div>
    <h1 class="nombre-principal">{{ nombreCompleto }}</h1>
    <p class="identidad-badge">
      <strong>Documento de Identidad (C.C.):</strong> {{ identidad }}
    </p>
    <p class="profesion-texto">{{ profesion }}</p>

    <!-- Línea separadora solicitada debajo del nombre e identidad -->
    <hr class="linea-separadora" />
  </div>
</template>

<!-- 3. STYLE: Estilos CSS propios de este componente (scoped) -->
<style scoped>
.encabezado-contenedor {
  text-align: center;
  padding: 24px 16px 8px;
}

.avatar-circulo {
  width: 76px;
  height: 76px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3880ff, #5260ff);
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(56, 128, 255, 0.35);
}

.nombre-principal {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
}

.identidad-badge {
  display: inline-block;
  margin: 8px 0 6px;
  padding: 6px 14px;
  background-color: #e0ecff;
  color: #1d4ed8;
  border-radius: 999px;
  font-size: 0.95rem;
}

.profesion-texto {
  margin: 4px 0 18px;
  color: #64748b;
  font-size: 1rem;
  font-weight: 500;
}

.linea-separadora {
  border: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #3880ff, #5260ff, transparent);
  margin: 16px auto 8px;
  width: 92%;
  border-radius: 2px;
}
</style>

