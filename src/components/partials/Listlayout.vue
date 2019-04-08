<template>
<div id="table_content" ref="table_content">
 <template>
   <v-card>
     <v-card-title>
       <v-text-field
       v-if="this.$parent.$props.block.has_search"
       v-model="search"
       append-icon="search"
       label="Search"
       single-line
       hide-details
       />
       <v-spacer></v-spacer>
       <v-icon v-if="showControllerTypes" v-on:click="isHiddenTypes = !isHiddenTypes">apps</v-icon>&nbsp;
       <v-icon @click="getListSettingsFunction()" id="filter_this" @mousedown="start" @touchstart="start" @touchend="stop" @touchcancel="stop">filter_list</v-icon>&nbsp;
         <!--<v-icon large>fullscreen</v-icon>-->
         <v-icon large  v-if="this.$parent.$props.block.has_changeable_width" @click="changeSize">{{arrow_type}}</v-icon>
       </v-card-title>
       <br>
     <transition name="fade">
       <div v-show="!HideSettings" class="slideup">
           <list-setting-panel v-bind:bd="bd"></list-setting-panel>
          <!--<filter-parital v-bind:item="this.$store.state.filter_definitions"></filter-parital>-->
          <!--<list-group-parital v-bind:item="this.$store.state.filter_definitions"></list-group-parital>-->
      </div>
     </transition>

     <v-data-table
     v-show="HideSettings"
     :headers="headers"
     :items="this.$store.state.objects[this.$props.bd.uuid]['block_data']"
     :search="search"
      hide-actions
     >
   ><!-- im this.$store.state.objects  können mehere objecte vorhanden sein z.b. typen und der inhalt der liste deswegen muss bei items this.controller_name sein
         dann zieht er sich den aus den params und in den params ist controllername => Controllername.all -->
 <v-progress-linear slot="progress" indeterminate></v-progress-linear>
<template slot="items" slot-scope="props">
  <tr @click="edit(props.item)">
    <td v-for="column_value in headers">{{props.item[column_value.text]}}</td>
     </tr>
     </template>
     <v-alert slot="no-results" :value="true" color="error" icon="warning">
       Your search for "{{ search }}" found no results.
     </v-alert>
   </v-data-table>
 </v-card>
</template>
  </div>
</template>
<script src="./ListLogic.js"></script>
<style src="../../assets/stylesheets/ListStyle.css"></style>
