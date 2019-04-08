<template>
  <div class="field">
    <input-string
      v-bind:field="field"
      v-bind:object="object"
      v-if="field.field_type === 'string'"
    ></input-string>
    <input-numeric
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'numeric'"
      v-model="field.name"
    ></input-numeric>
    <input-switch
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'switch'"
      v-model="field.name"
    ></input-switch>
    <input-text
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'text'"
    ></input-text>
    <headline
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'headline'"
    ></headline>
    <paragraph
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'paragraph'"
    ></paragraph>
    <normal
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'normal'"
    ></normal>
    <radio-image
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'radioimage'"
    ></radio-image>
    <radio
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'radio'"
    ></radio>
    <select
      v-else-if="field.field_type === 'select'"
    ></select>
    <input-date
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'date'"
    ></input-date>
    <input-address
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'address'"
    ></input-address>
    <input-autocomplete
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'autocomplete'"
    ></input-autocomplete>
    <input-progressbar
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'progress'"
    ></input-progressbar>
    <input-combobox
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'combobox'"
    ></input-combobox>
    <input-switch
      v-bind:field="field"
      v-bind:object="object"
      v-else-if="field.field_type === 'switch'"
    ></input-switch>
  </div>
</template>
<script src="./FieldLogic.js"></script>
