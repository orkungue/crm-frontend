import axios from 'axios';
export default {
  name: 'generate_filter',
  data () {
      return {
        select: { state: 'enthält', abbr: 'like' },
        items: [
          { state: 'enthält nicht', abbr: 'FL' },
          { state: 'enthält', abbr: 'like' },
          { state: 'beginnt mit', abbr: 'GA' },
          { state: 'beginnt nicht mit', abbr: 'NE' },
          { state: 'gleich', abbr: 'CA' },
          { state: 'endet mit', abbr: 'NY' }
        ]
      }
    },created(){
      console.log("test");
    },
  methods: {
    submitListSettings() {
      this.$emit('event');
    },
  }
}
