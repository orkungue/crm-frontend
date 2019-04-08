<template>
  <div class="input-container">
    <label>{{ field.name }}</label>
    <v-textarea rows="3"
          multi-line :name="field.field_name" v-model="object[field.field_name]"></v-textarea>
  </div>
</template>

<script src="./InputTextLogic.js"></script>
