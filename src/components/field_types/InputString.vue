<template>
  <div class="input-container">
    <label>{{ field.name }}</label>
    <v-text-field type="string" :name="field.field_name" v-model="object[field.field_name]"/>
  </div>
</template>

<script src="./InputStringLogic.js"></script>
