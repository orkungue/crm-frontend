import axios from 'axios';
export default {
  name: 'Chat',
  props: ['chat','object'],
  data () {
    return {
      search: '',
      contents: '',
      from: '',
      to: '',
      items: [
      ],
      show_chat_content: false,
    }
  }, mounted() {
    axios.get('http://127.0.0.1:3001/chat/').then(response => {
      this.items = response.data;
      console.log(this.items);
    }).catch(e => {
      this.errors.push(e);
    })
  }, methods: {
    open_chat(item){
      this.to = item;
      this.from = "6";
      axios.get('http://127.0.0.1:3001/chat/' + item).then(response => {
        console.log(response.data);
        this.contents = response.data;
      }).catch(e => {
        this.errors.push(e);
      })
    },
    submit(){
      axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/chat_update',
      params: {
        from: this.from,
        to: this.to,
        text: this.send_text
      }
    });
    /*
        axios.get('http://127.0.0.1:3001/api/chat_update', {chat: {from: this.from, to: this.to, text: this.send_text}}).then(response => {
          alert("test23");
        console.log(response.data);
        this.contents = response.data;
      }).catch(e => {
        this.errors.push(e);
      })
*/
   }
  }
}
