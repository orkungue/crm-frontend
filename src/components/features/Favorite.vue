<template>
  <div>
<span>{{ getFavorites() }}</span>

  </div>
</template>

<!--<script src="./FavoriteLogic.js"></script>-->
<script>
import axios from 'axios';
export default {
  name: 'Favorite',
  props: ['items'],
  data () {
    return {
      items: {},
    }
  }, created: function() {
    axios.get('http://127.0.0.1:3001/favorite/').then((response) => {
        this.$data.items = response.data;
      }).catch(function(error) {
        console.log(error);
      });

  },
methods: {
  getFavorites(salut) {
    console.log(this.$data.items);
      return `${this.$data.items}`
  }
}
}

</script>
