import axios from 'axios';
export default {
  data () {
    return {
    }
  }, methods: {
      addToList: function() {
        this.items.push({
          text: this.newItem
        })
      }
    }
}
