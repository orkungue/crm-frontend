<template>
  <div class="input-container">
    <label>{{ field.name }}</label>
    <div>
    <v-progress-circular
      :rotate="-90"
      :size="250"
      :width="20"
      value="55"
      color="primary"
    >
      <span style="color: black;"><v-text-field type="number" :name="field.field_name" v-model="object[field.field_name]" append-icon="euro_symbol" />  </span>

    </v-progress-circular>
  </div>
  </div>
</template>
<style>
progress{
background-color: black;
 border: 0;
 height: 18px;
 border-radius: 9px;
}
 </style>

<script src="./InputNumericLogic.js"></script>
