<template>
  <div>
    {{field.name}}
    <!--
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      color="white"
      hide-no-data
      hide-selected
      item-text="Description"
      item-value="API"
      prepend-icon="mdi-database-search"
      return-object
      :js_function="field.js_function"
      v-on:click="callFunction"
      ></v-autocomplete>
-->
<v-autocomplete
     :items="items"
     :loading="isLoading"
     :search-input.sync="search"
     refs="autocompleteinput"
     clearable
     hide-details
     hide-selected
     item-text="Description"
     item-value="API"
     :label="'search '+ field.name"
     :js_function="field.js_function"
     v-on:click="callFunction"
     :name="field.field_name"
     v-model="object[field.field_name]"
   >
     <template slot="no-data" v-if="field.js_function">
       <v-list-tile>
         <v-list-tile-title>
         <strong>Recent Items</strong>
             {{this.recent_items}}
         </v-list-tile-title>
       </v-list-tile>
     </template>
   </v-autocomplete>

    </div>
</template>
<script>
import axios from 'axios'
      export default {
        name: 'InputAutoComplete',
        props: ['field','object'],
        data: () => ({
          descriptionLimit: 60,
          entries: [],
          isLoading: false,
          model: null,
          search: null,
          recent_items: ""
        }),

        computed: {
          fields () {
            if (!this.model) return []

            return Object.keys(this.model).map(key => {
              return {
                key: key,
                value: this.model[key] || 'n/a'
              }
            })
          },
          items () {
            var test = "name";
            return this.entries.map(entry => {
              const Description = entry[this.$props.field["field_name"]]
              return Object.assign({}, entry, { Description })
            })
          }
        },
        watch: {
          search (val) {
            if (val.length > 1){
              this.isLoading = true
              debugger
                axios.get('http://127.0.0.1:3001/autocomplete?controllername='+this.$props.field.model+'&value='+val+'&field_name='+this.$props.field.field_name).then(response => {
                this.entries = response.data
              })
              .catch(err => {
                console.log(err)
              })
              .finally(() => (this.isLoading = false))
            }
          }
        },  methods: {
            getRecentItemFunction: function (params){
              axios.get('http://127.0.0.1:3001/application/get_recent_items/'+this.$props.field.controller_name).then(response => {
              //axios.get('http://127.0.0.1:3001/application/get_recent_items/').then(response => {
                this.recent_items = response.data;

              })
              .catch(e => {
              })

            },callFunction: function (event){
              console.log(event.currentTarget.getAttribute("js_function"));
              var params = event;
              var fnName = "this." + event.currentTarget.getAttribute("js_function") + "(params)";
              eval(fnName);
            }
          }
      }

  </script>
