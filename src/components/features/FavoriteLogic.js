import axios from 'axios';
export default {
  name: 'Favorite',
  props: ['items'],
  data () {
    return {
      items: [],
    }
  }, created: function() {
    axios.get('http://127.0.0.1:3001/favorite/').then((response) => {
        console.log(response.data); // DISPLAYS THE DATA I WANT
        this.items = response.data; // THROWS TYPE ERROR: Cannot set property 'thoughtWallet' of undefined at eval
        console.log(this.items);
      }).catch(function(error) {
        console.log(error);
      });
      }
}
