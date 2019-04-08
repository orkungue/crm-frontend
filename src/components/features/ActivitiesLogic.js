import axios from 'axios';
import * as d3 from 'd3';
export default {
  name: 'activities',
  props: ['activities', 'object'],
  data () {
    return {
      loading: true,
      //isHidden: false,
      object: {}
    }
  },
  created: function() {
    axios.get('http://127.0.0.1:3001/activites')
    .then(response => {
      var expensesByName = d3.nest()
  .key(function(d) { return d.object_controller_name; })
  .entries(response.data);
        this.$store.state.activites = expensesByName;
    })
    .catch(e => {
      this.errors.push(e);
    })
  },
}
