<template>
  <div id="app">
    <table style="width: 100%;">
      <tr v-for="field in this.$store.state.objects[this.$attrs.bd.uuid]['block_options']['filter_definitions']">
        <td>
          <v-text-field
          :key="field.uuid"
          v-bind:field="field"
          :label="field.field_name"
          v-model="field.value"
          ></v-text-field>
        </td>
        <td style="width: 10px;"></td>
        <td>
          <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-text="state"
          item-value="abbr"
          return-object
          single-line
          ></v-select>
        </td>
      </tr>
    </table>
                <!--
        <field
          v-for="filter in this.$store.state.filter_definitions"
          :key="filter.uuid"
          v-bind:field="filter"
        ></field>
      -->
      <v-flex xs12>
        <v-btn  @click="submitListSettings()">Filtern</v-btn><v-btn>Zurücksetzen</v-btn><v-btn>Filter speichern</v-btn><!-- :loading="loading"-->
      </v-flex>
    </v-container>
  </div>
</template>

<script src="./FilterLogic.js"></script>
