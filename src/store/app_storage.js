import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      ...
    ]
  },
  getters: {
    todos: state => state.todos
  }
})

const TodoList = {
  props: ['todos'],
  template: `
    <div>
      <ul>
        <li v-for="t in todos" :class="{completed: t.completed}">{{t.task}}</li>
      </ul>
    </div>
  `
}

var App = new Vue({
  computed: {
    todos: function() {
      return this.$store.getters.todos
    }
  },
  template: `
    <div>
      <todo-list :todos="todos"></todo-list>
    </div>
  `,
  store: store,
  components: {
    // Add child component to App
    'todo-list': TodoList
  }
});
    /*apps: [
      {
        name: 'Customers',
        imagepath: 'assets/images/apps/Kunde_Grau2_001.png',
        path: '/customer',
        title: 'Kunden'
      },
      {
        name: 'Documents',
        imagepath: 'assets/images/apps/Dokument_Grau2_001.png',
        path: '/docs',
        title: 'Dokumente'
      },{
        name: 'Emails',
        imagepath: 'assets/images/apps/Email_Grau2_001.png',
        path: '/emails',
        title: 'E-Mails'
      },
      {
        name: 'Appointments',
        imagepath: 'assets/images/apps/Kalendar_Grau2_001.png',
        path: '/appointments',
        title: 'Kalendar'
      }
    ]*/
