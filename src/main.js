import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import Default from "./layouts/AppLayout.vue"
import Simple from "./layouts/SimpleLayout.vue"
import './assets/stylesheets/stylesheet.css'
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
import VueQuillEditor from 'vue-quill-editor'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'



// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
window.axios = require('axios');

Vue.use(VueQuillEditor)


Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyABYyepcGjnqpYxTMrekbsjWPUwrpYi6j0' // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
});

Vue.config.devtools = true ////Sehr wichtig kannst damit devtools an aus schalten mit dev tools kann man z.b. passwörter unverschlüsslt params objects etc sehen.


Vue.component("default-layout", Default)
Vue.component("simple-layout", Simple)

const Group = () => import('./components/Group.vue')
const Block = () => import('./components/Block.vue')
const Field = () => import('./components/Field.vue')
const ListLayout = () => import('./components/partials/Listlayout.vue')
const ExpansionListLayout = () => import('./components/partials/ExpansionListLayout.vue')
const InputString = () => import('./components/field_types/InputString.vue')
const InputNumeric = () => import('./components/field_types/InputNumeric.vue')
const InputSwitch = () => import('./components/field_types/InputSwitch.vue')
const InputText = () => import('./components/field_types/InputText.vue')
const RadioImage = () => import('./components/field_types/RadioImage.vue')
const InputAddress = () => import('./components/field_types/InputAddress.vue')
const InputCombobox = () => import('./components/field_types/InputCombobox.vue')

const InputAutoComplete = () => import('./components/field_types/InputAutoComplete.vue')
const InputProgressbar = () => import('./components/field_types/InputProgressbar.vue')
const InputDate = () => import('./components/field_types/InputDate.vue')
const Radio = () => import('./components/field_types/Radio.vue')

const Headline = () => import('./components/field_types/Headline.vue')
const Paragraph = () => import('./components/field_types/Paragraph.vue')
const Normal = () => import('./components/field_types/Normal.vue')
const Calendar = () => import('./components/features/Calendar.vue')
const QuillEditor = () => import('./components/partials/QuillEditor.vue')
const DraggableList = () => import('./components/partials/DraggableList.vue')
const TCom = () => import('./components/partials/TCom.vue')
const FileUpload = () => import('./components/partials/FileUpload.vue')
const Activities = () => import('./components/features/Activities.vue')
const MileStone = () => import('./components/customer/MileStone.vue')
const Notes = () => import('./components/features/Notes.vue')
const Chat = () => import('./components/features/Chat.vue')
const Favorite = () => import('./components/features/Favorite.vue')
const Bugzilla = () => import('./components/features/Bugzilla.vue')
const LineChart = () => import('./components/features/dashleads/charts/LineChart.vue')
const PieChart = () => import('./components/features/dashleads/charts/PieChart.vue')
const PolarChart = () => import('./components/features/dashleads/charts/PolarChart.vue')
const BlockChart = () => import('./components/features/dashleads/charts/BlockChart.vue')

const ListSettingPanel = () => import('./components/list/ListSettingPanel.vue')
const Filter = () => import('./components/list/Filter.vue')
const ListCalculation = () => import('./components/list/ListCalculation.vue')
const ListGroup = () => import('./components/list/ListGroup.vue')
const Ms = () => import('./components/customer/MileStone.vue')
const Landing = () => import('./components/Landing.vue')

import VueModalTor from 'vue-modaltor'


//var qs = require('qs');
//Vue.prototype.$qs = require('qs');

Vue.use(require('vue-moment'))
Vue.use(VueModalTor)
Vue.use(Vuetify)

Vue.config.productionTip = false

/*
router.beforeEach((to, from, next) => {
const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
if(requiresAuth) {
   next('/');
} else {
  next();
}
});
*/

// Global components
Vue.component('group', Group)
Vue.component('block', Block)
Vue.component('landing', Landing)
Vue.component('bugzilla', Bugzilla)
Vue.component('list-setting-panel', ListSettingPanel)
Vue.component('filter-parital', Filter)
Vue.component('list-calc-parital', ListCalculation)
Vue.component('list-group-parital', ListGroup)
Vue.component('field', Field)
Vue.component('ListLayout', ListLayout)
Vue.component('ExpansionListLayout', ExpansionListLayout)
Vue.component('calendar', Calendar)
Vue.component('editor', QuillEditor)
Vue.component('draggable-list', DraggableList)
Vue.component('tcom', TCom)
Vue.component('fileupload', FileUpload)
Vue.component('milestone', MileStone)
Vue.component('activities', Activities)
Vue.component('line-chart', LineChart)
Vue.component('pie-chart', PieChart)
Vue.component('polar-chart', PolarChart)
Vue.component('block-chart', BlockChart)
Vue.component('notes', Notes)
Vue.component('chat', Chat)
Vue.component('favorite', Favorite)
Vue.component('input-string', InputString)
Vue.component('input-numeric', InputNumeric)
Vue.component('input-switch', InputSwitch)
Vue.component('input-autocomplete', InputAutoComplete)
Vue.component('input-text', InputText)
Vue.component('input-combobox', InputCombobox)
Vue.component('input-progressbar', InputProgressbar)
Vue.component('input-date', InputDate)
Vue.component('input-address', InputAddress)
Vue.component('radio-image', RadioImage)
Vue.component('radio', Radio)
Vue.component('headline', Headline)
Vue.component('paragraph', Paragraph)
Vue.component('normal', Normal)


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created() {
  axios.interceptors.request.use((config) => {
    config.headers.client = window.localStorage.getItem('client');
    config.headers['access-token'] = window.localStorage.getItem('access-token');
    config.headers.uid = window.localStorage.getItem('uid');
    config.headers['token-type'] = window.localStorage.getItem('token-type');

    return config;
  });

  axios.interceptors.response.use((response) => {
    // Set user headers only if they are not blank.
    // If DTA gets a lot of request quickly, it won't return headers for some requests
    // so you need a way to keep headers in localStorage to gettting set to undefined
    if (response.headers.client) {
      localStorage.setItem('access-token', response.headers['access-token']);
      localStorage.setItem('client', response.headers.client);
      localStorage.setItem('uid', response.headers.uid);
      localStorage.setItem('token-type', response.headers['token-type']);
    }
    // You have to return the response here or you won't have access to it
    // later
    return response;
  });
},
beforeMount() {
  const API_URL = 'http://127.0.0.1:3001/';
  const VALIDATE_URL = `${API_URL}auth/validate_token`;
  // check if the user has a valid token and populate user store info
  axios.get(VALIDATE_URL)
    .then((response) => {
      Store.login(response.data.data);
    })
},
})
