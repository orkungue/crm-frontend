<template>
  <div>
    <form ref="form">
      <v-tabs
      slot="extension"
      v-model="tabs"
      fixed-tabs
      icons-and-text
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-filter">
          Filter
          <v-icon>filter</v-icon>
        </v-tab>
        <v-tab href="#tab-calc">
          Calculations
          <v-icon>favorite</v-icon>
        </v-tab>
        <v-tab href="#tab-group">
          Group
          <v-icon>group_work</v-icon>
        </v-tab>
        <v-tab-item
        id="tab-filter"
        key="filter"
        >
          <v-card flat>
            <v-card-text>
              <filter-parital @event="handler" v-bind:bd="this.$attrs.bd"></filter-parital>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item
        id="tab-calc"
        key="calc"
        >
          <v-card flat>
            <v-card-text>
              <list-calc-parital v-bind:item="this.$store.state.list_calc_definitions" v-bind:bd="this.$attrs.bd"></list-calc-parital>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item
        id="tab-group"
        key="group"
        >
          <v-card flat>
            <v-card-text>
              <list-group-parital @event="handler" v-bind:item="this.$store.state.objects[this.$attrs.bd.uuid]['block_options']['list_group_definitions']" v-bind:bd="this.$attrs.bd"></list-group-parital>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </form>
  </div>
</template>
  <script>
  import axios from 'axios';
  export default {
    name: 'ListSettings',
    methods: {
      handler(value) {

        debugger
        var qs = require('qs');
        axios.get('http://127.0.0.1:3001/list/list_setting_generator', {
            'params': {list_setting_attributes: {filter_attributes: this.$store.state.objects[this.$attrs.bd.uuid]["block_options"]["filter_definitions"], list_group_attributes: this.$store.state.objects[this.$attrs.bd.uuid]["block_options"]["list_group_definitions"]}, bduuid:this.$attrs.bd["uuid"]},
            'paramsSerializer': function(params) {
               return qs.stringify(params, {arrayFormat: 'brackets'})  /// USE arrayFormat'brackets' for multiarray other options: https://github.com/ljharb/qs strg+F => arrayFormat
            },
        }).then( (response) => {
          this.$store.commit('UpdateBlockData', [{ bduuid: this.$attrs.bd["uuid"], block_data: response.data}])
        })
        .catch(e => {
        })
      }
  }
  }
  </script>
