<template>
<div id="app">
  <v-card>
  <div id="note_container">
      <textarea v-for="item in items" v-bind:todo="item" v-bind:key="item.id" class="note_elements">
        {{item.text}}
      </textarea>
   </div>
    <br>
    <input v-model="newItem" style="box-shadow: 0 0 3px #000; margin: 10px"/>
    <button v-on:click="addToList()">Add Item</button>
  </v-card>
  <br>
  </div>
</template>
<script src="./NoteLogic.js"></script>
<style src="./NoteStyle.css"></style>
