<template>
  <div>
  <label>{{ field.name }}</label>
  <v-combobox
    v-model="chips"
    :items="items"
    chips
    :search.sync="search"
    clearable
    multiple
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        :selected="data.selected"
        close
        @input="remove(data.item)"
      >
        <strong>{{ data.item }}</strong>&nbsp;
        <span>(interest)</span>
      </v-chip>
    </template>
  </v-combobox>
</div>
</template>

<script>
  export default {
    name: 'InputCombobox',
    props: ['field','object'],
    data () {
      return {
        chips: [],
        items: []
      }
    },        watch: {
              search (val) {
                if (val.length > 1){
                  this.isLoading = true
                    axios.post('http://127.0.0.1:3001/autocomplete/'+this.$props.field.controller_name, {attributes: val, field_name:this.$props.field["field_name"] } ).then(response => {
                    this.entries = response.data
                  })
                  .catch(err => {
                    console.log(err)
                  })
                  .finally(() => (this.isLoading = false))
                }
              }
            },

    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }
</script>
