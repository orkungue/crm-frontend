import axios from 'axios';
export default {
  name: 'generate_list_group',
  data () {
      return {
        items: [],
        selectedItems: []
      }
    }, mounted(){
      console.log("test");
      var items = this.$store.state.objects[this.$attrs.bd.uuid]['block_options']['list_group_definitions'];
      var val;
      for (val of items) {
          this.items.push({value: val['conditions'], text: val['field_name']});
      }
    },
  methods: {
    submitListSettings() {
      this.$emit('event')
    },

    ListGroupForm(){
      var qs = require('qs');
      axios.get('http://127.0.0.1:3001/list/group_list_generator', {
          'params': {filter_attributes: this.$attrs.item, bduuid:this.$attrs.item[0]["bduuid"]},
          'paramsSerializer': function(params) {
             return qs.stringify(params, {arrayFormat: 'brackets'})  /// USE arrayFormat'brackets' for multiarray other options: https://github.com/ljharb/qs strg+F => arrayFormat
          },
      }).then( (response) => {
        this.$store.commit('UpdateBlockData', [{ bduuid: this.$attrs.item[0]["bduuid"], block_data: response.data}])
      })
      .catch(e => {
      })
    }
  }
}
