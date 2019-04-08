import axios from 'axios';
export default {
  name: 'Group',
  props: ['route','group'],
  data (){
    return{
      tab: null,
      all_block_items: "",
    }
  },
  created() {
    /*
    if(this.$route.path.split("/")[1] == "document" && this.$route.path.split("/")[2] == "edit"){
      axios.get('http://127.0.0.1:3001/document/edit/'+this.$route.path.split("/")[3]).then(response => {
        this.$router.push(response.data);
      })
      .catch(e => {
      });
    }else{
      axios.get('http://127.0.0.1:3001'+this.$route.path).then(response => {
        this.$store.state.main_objects = response.data;
        this.object = response.data;
      })
      .catch(e => {
      });
    }
    */
  },
  methods: {
    saveFavorite: function (){
      let data = JSON.stringify();
      debugger
      axios.post("http://127.0.0.1:3001/application/save_favorites?favorite_item="+this.$props.route).then(

      );
    },
    globalSaveFunction: function () {
      debugger
      axios.post('http://127.0.0.1:3001/'+this.$props.route , {gduuid: this.$props.group.uuid, subject: "subject", from: "orkun.guenes@hotmail.de", to: "guenes@logo-consult.com", body: "body_content"} ).then(response => {
      }).catch(err => {
        console.log(err)
      }).finally(() => (this.isLoading = false))
      /*axios.post('http://127.0.0.1:3001/'+this.$props.group.model+'/update_partial', {form_data: this.$store.state.group1.block_definitions, body: this.postBody, gdid: this.$props.group.uuid,  object_id: this.$route.path.split("/")[3]} ).then(response => {
      }).catch(err => {
        console.log(err)
      }).finally(() => (this.isLoading = false))
      */
    },
  }
}
