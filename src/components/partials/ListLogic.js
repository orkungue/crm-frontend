import axios from 'axios';
import { mapState } from 'vuex'
export default {
  name: 'List',
  props: ['bd'],
  data () {
    return {
      search: '',
      pagination: {
        rowsPerPage: 15,
        page: 3
      },
      arrow_type: 'arrow_left',
      DocApps: '',
      controller_name: '',
      filter_loaded: false,
      group: {block_definitions: []},
      headers: [],
      HideSettings: true,
      isHiddenTypes: true,
      loading: false,
      search: '',
      showControllerTypes: false,
    }
  }, mounted (){
    //this.pagination.totalItems = this.$store.state.objects[this.$props.bd.uuid]["list_count"];
    this.loading = true;
    this.controller_name = this.$props.bd.model;
    var headers = Object.keys(this.$store.state.objects[this.$props.bd.uuid]["block_data"][0]);
    var val;
    var a = headers;
    for (val of a) {
        this.headers.push({text: val, value: val});
    }
      axios.get('http://127.0.0.1:3001/list/get_listgroup?bduuid='+ this.$parent.$attrs.id).then(response => {
        this.$store.state.objects[this.$props.bd.uuid]["block_options"]["list_group_definitions"] = [];
        this.$store.state.objects[this.$props.bd.uuid]["block_options"]["list_group_definitions"] = response.data;
        console.log("test");
      })
      .catch(e => {
      })


      this.$store.state.objects[this.$props.bd.uuid]["block_options"] = [];
        axios.get('http://127.0.0.1:3001/list/get_listfilter?bduuid='+ this.$parent.$attrs.id).then(response => {
          this.$store.state.objects[this.$props.bd.uuid]["block_options"]["filter_definitions"] = [];
          this.$store.state.objects[this.$props.bd.uuid]["block_options"]["filter_definitions"] = response.data;
          console.log(this.$store.state.objects[this.$props.bd.uuid]["block_options"]);
        })
        .catch(e => {
        })

    this.loading = false;

    if (this.$store.state.objects[this.controller_name + '_types']){
      this.showControllerTypes = true;
    }
  }, methods: {
    getListSettingsFunction: function(e){
        if((this.HideSettings == true)){
          this.HideSettings = false;
        }else{
          this.HideSettings = true;
        }
    },
    start(){
        setTimeout(()=>{
          this.stop()
        },2000);
    }, stop(){
      //###############WENN 1,8 SEKUNDEN GEKLICKT DANN GLEICH GESPEICHERTE FILTER###############//
      //alert("jetzt gespeicherte Filter anzeigen");
    },
    edit: function(item){
      if(this.arrow_type != "arrow_left"){
        axios.get('http://127.0.0.1:3001'+this.$route.path+'/'+item.id)
        .then(response => {
            this.hasGroup2 = true;
            this.$store.state.hasGroup2 = true;
            this.$store.state.group2 = response.data;
            this.$store.state.group2.id = item.id;
        })
        .catch(e => {
        })
      } else {
        //this.$router.push(this.$route.path.replace('/list','/edit/') + item);
        this.$router.push("/" + this.$parent.$props.block.model + "/edit/" + item.id)
      }
    },
    changeSize: function(event){
      if(this.arrow_type == "arrow_left"){
        event.target.closest(".blocktemplate").classList.add("blocktemplate_split");
        this.arrow_type = 'arrow_right';
      }else {
        this.arrow_type = 'arrow_left';
        event.target.closest(".blocktemplate").classList.remove("blocktemplate_split");
        this.$store.state.hasGroup2 = false;
        this.$store.state.group2 = false;
      }
    },
  }
}
