<template>
  <div class="input-container">
    <label>{{ field.name }}</label>
    <v-text-field type="number" :name="field.field_name" v-model="object[field.field_name]" :values="object[field.values]" />
  </div>
</template>

<script src="./InputNumericLogic.js"></script>
