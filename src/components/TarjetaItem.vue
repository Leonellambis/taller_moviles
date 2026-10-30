<!-- 1. SCRIPT: Componente reutilizable mediante props -->
<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  entidad: {
    type: String,
    required: true
  },
  periodo: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    default: ''
  },
  descripcion: {
    type: String,
    default: ''
  }
})
</script>

<!-- 2. TEMPLATE: Estructura visual de cada registro académico o laboral -->
<template>
  <div class="item-reutilizable">
    <div class="item-cabecera">
      <div>
        <h3 class="item-titulo">{{ titulo }}</h3>
        <p class="item-entidad">{{ entidad }}</p>
      </div>
      <div class="item-badges">
        <span v-if="tipo" class="badge-tipo">{{ tipo }}</span>
        <span class="badge-periodo">{{ periodo }}</span>
      </div>
    </div>
    <p v-if="descripcion" class="item-descripcion">{{ descripcion }}</p>
  </div>
</template>

<!-- 3. STYLE: Estilos aislados para el ítem -->
<style scoped>
.item-reutilizable {
  background-color: #f8fafc;
  border-left: 4px solid #3880ff;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 12px;
}

.item-reutilizable:last-child {
  margin-bottom: 0;
}

.item-cabecera {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
}

.item-titulo {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
}

.item-entidad {
  margin: 2px 0 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #3880ff;
}

.item-badges {
  display: flex;
  gap: 6px;
  align-items: center;
}

.badge-tipo {
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
}

.badge-periodo {
  background-color: #e2e8f0;
  color: #334155;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
}

.item-descripcion {
  margin: 8px 0 0;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.45;
}
</style>

