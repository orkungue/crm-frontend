<template>
  <div>
  <label>{{ field.name }}</label>
        <v-menu
          :close-on-content-click="false"
          v-model="menu2"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="computedDateFormatted"
            label=""
            persistent-hint
            append-icon="event"
          ></v-text-field>
          <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
      </div>
</template>

<script src="./InputDateLogic.js"></script>
