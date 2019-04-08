<template>
    <div id="app">

        <v-select
        v-model="selectedItems"
        :items="items"
        item-text="text"
        item-value="value"
        return-object
        single-line
        ></v-select>

         <v-flex xs12>
           <v-btn v-on:click="submitListSettings()" >Group</v-btn><v-btn>Reset</v-btn><v-btn>Save Group</v-btn><!-- :loading="loading"-->
       </v-flex>
         </v-container>
    </div>
</template>
<script src="./ListGroupLogic.js"></script>
