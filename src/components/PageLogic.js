import axios from 'axios';
export default {
  name: 'Page',
  props: ['route'],
  data () {
    return {
      group: {
        block_definitions: [],
        action_definitions: []
      }, loading: false,

    }
  },mounted() {
  this.loading = true;
  this.$store.state.hasGroup2 = false;
  this.$store.state.hasGroup1 = false;
  this.$store.state.action_definitions = null;
  if(this.$route.path.split("/")[1] == "document" && this.$route.path.split("/")[2] == "edit") {
    axios.get('http://127.0.0.1:3001/document/edit/'+this.$route.path.split("/")[3]).then(response => {
      this.$router.push(response.data);
    })
    .catch(e => {
    }).finally(() => (this.loading = false));
  } else {
    axios.get('http://127.0.0.1:3001/application/get_page?path='+this.$route.path)
    .then(response => {
      this.$store.state.group1 = null;
      this.$store.state.group2 = null;
      this.$store.state.action_definitions = null;
      this.$store.state.action_definitions = response.data.action_definitions;
      if(this.$store.state.hasGroup2 && !this.$store.state.hasGroup1) {
        this.$store.state.group1 = response.data;
        this.$store.state.hasGroup2 = false;
      } else if(this.$store.state.hasGroup1) {
        if (this.$store.state.group1 == this.$store.state.group2){
        } else {
          this.$store.state.group2 = response.data;
          this.$store.state.hasGroup2 = true;
        }
      } else {
        if(response.data.action == "list"){
             this.$store.state.group1Style = "group1";
             this.$store.state.group1 = response.data;
             this.$store.state.hasGroup2 = true;
        } else {
          this.$store.state.group1Style = "group1_alone";
          this.$store.state.hasGroup1 = true;
          this.$store.state.hasGroup2 = false;
          this.$store.state.group1 = null;
          this.$store.state.group1 = response.data;
        }
        this.$store.state.hasGroup1 = true;
      }
    })
    .catch(e => {
      this.errors.push(e);
      this.loading = false;
    }).finally(() => (this.loading = false))
  }
}
}

/*
NEW BUT BUGGY BUT PLEASE WORK B!TCH
import { mapState } from 'vuex'

export default {
  name: 'Page',
  computed: mapState([
   'group1', 'group2'
  ]),
 mounted() {
  	//console.log(this.$store)
    var payload= {'path': this.$route.path};
    this.$store.dispatch('GET_PAGE', payload)
  }
}



*/
