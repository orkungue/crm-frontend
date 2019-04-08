import axios from 'axios';
export default {
  name: 'Tcom',
  props: ['tcom', 'block_data'],
  data: function () {
      return {
        tcomtypes: [],
        icon: "email",
        controller_name: 'customer_tcom',
       rules: {
         required: value => !!value || 'Required.',
         email: value => {
           const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           return pattern.test(value) || 'Invalid e-mail.'
         },
         phone: value => {
           const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
           return pattern.test(value) || 'Invalid number.'
         }
       }
      }
  },
  mounted() {
      // To demonstrate functionality of exposed component functions
      // Here we make focus on the user input
      axios.get('http://127.0.0.1:3001/application/tcoms').then(response => {
        this.tcomtypes = response.data;
      })
      .catch(e => {
      })
  }
}
