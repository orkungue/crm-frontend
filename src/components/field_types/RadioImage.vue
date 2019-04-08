<template>
  <div id="radioimages">
    {{field.name}}
    <div class="app_list_horizontal">
      <div v-for="object in field.attributes" :key="object.id" class="radio-box" >
        <label class="radio-container">
          <input name="method" type="radio" class="radio-hidden" :id="object.name" :value="object.id">
          <img :src="`/static/${field.attributes_from}/${object.controller_name}_content.png`" :bduuid="field.bduuid" :attributes_from="field.attributes_from" class="radio-image" :value="object.id" :js_function="field.js_function" v-on:click="callFunction" style="min-height: 100px;">
          <div>
            <div v-if="object.type_name">
              <b>{{object.type_name}}</b>
            </div>
            <div v-if="object.object_id">
              <b>{{object.controller_name}}ID: {{object.object_id}}</b>
            </div>
            <a></a>
          </div>
        </label>
        <!--<input type="radio" name="test" @click="nextStepFunction" :value="object.id"><label>{{object}}</label>-->
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'RadioImage',
  props: ['field'],
  methods: {
    nextStepFunction: function(params){
        var element = event.currentTarget;
        var id = element.getAttribute('value');
        var bduuid =  element.getAttribute('bduuid');
        var attributes_from =  element.getAttribute('attributes_from');
        console.log(element);
        axios.get('http://127.0.0.1:3001/application/path_builder?bduuid='+ bduuid +'&object_id='+id +"&attributes_from="+attributes_from).then(response => {
        //axios.get('http://127.0.0.1:3001/application/new?bduuid='+ bduuid +'&object_id='+id).then(response => {
          this.$router.push(response.data);
        })
        .catch(e => {
        })
    }, callFunction: function(event){
      console.log(event.currentTarget.getAttribute("js_function"));
      var params = event;
      var fnName = "this." + event.currentTarget.getAttribute("js_function") + "(params)";
      eval(fnName);
    }
  }
}
</script>
