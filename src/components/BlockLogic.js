/*import axios from 'axios';
export default {
  name: 'Block',
  props: ['block'],
  data () {
    return {
      isHidden: true,
      object: {},
    }
  },  created() {
    this.loading = true;
        axios.get('http://127.0.0.1:3001/application/get_block_data?bduuid='+this.block.uuid +'&path='+this.$route.path).then(response => {
            this.$store.state.objects[response.data["block_data"][0]["bd"]["uuid"]] = response.data["block_data"][0];
            this.object = this.$store.state.objects[response.data["block_data"][0]["bd"]["uuid"]];
            this.$store.state.objects[response.data["block_data"][0]["bd"]["uuid"]] = response.data["block_data"][0];
        })
        .catch(e => {
        });

    },
methods: {
    newTrianglePartial: function (){
    //'/'+block.model+'/new?'+this.$route.path.split('/')[1]+'_id='+this.$route.path.split('/')[3]" v-if="this.$route.path.split('/')[3]
    this.$router.push({path: "/" + this.block.model + "/new/"})//, query: {object: this.object}

    }
  },
}
*/

import { mapState } from 'vuex'

export default {
  name: 'Block',
  props: ['block'],
 computed: mapState([
 'objects', 'loading'
]),
 mounted() {
  	//console.log(this.$store)
      var payload= {'bduuid': this.block.uuid, 'path': this.$route.path};
      this.$store.dispatch('GET_BLOCKDATA', payload)
  },
  methods: {
      newTrianglePartial: function (){
      //'/'+block.model+'/new?'+this.$route.path.split('/')[1]+'_id='+this.$route.path.split('/')[3]" v-if="this.$route.path.split('/')[3]
      this.$router.push({path: "/" + this.block.model + "/new/"})//, query: {object: this.object}

      }
  }
}
