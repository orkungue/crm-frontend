<template>
 <div class="inputswitch-container">
   <v-switch
            :name="field.field_name"
            v-model="object[field.field_name]"
            :label="field.name"
            color="primary"
            value=""
            
          ></v-switch>
  </div>
</template>
<script src="./InputSwitchLogic.js"></script>
