<template>
    <div id="calc-app">
      <draggable-list v-bind:item="this.item"></draggable-list>
      <v-btn type="submit">Calculate</v-btn><v-btn>Reset</v-btn><v-btn>Berechnung speichern</v-btn><!-- :loading="loading"-->
    </div>
</template>
<script>
export default {
  name: 'CalcList',
  props: ['item'],
  methods: {
    CalcList: function() {
      axios.get('http://127.0.0.1:3001/application/list_calc_generator', {attributes: "doc_type"} ).then(response => {
        this.$store.state.objects["block_data"] = response.data;
        this.$parent.$parent.isHiddenFilter = true;
      })
      .catch(e => {
      })
    }
  }
}
</script>
