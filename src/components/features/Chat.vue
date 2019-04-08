<!--<template>
  <v-chat>
    <!--
    <div style="max-height: 500px; min-height: 500px; overflow: hidden;">
    <v-navigation-drawer permanent v-model="drawer" app stateless>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Orkun Günes</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.username"
          @click="open_chat(item.id)" v-on:click="show_chat_content = true">
          <v-list-tile-action>
            <li><v-icon v-if="item.gender==1">pregnant_woman</v-icon> <v-icon v-else>accessible_forward</v-icon>{{item.firstname}} {{item.lastname}}</li>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
</v-navigation-drawer>
<v-content v-if="show_chat_content" style="margin-top: 20px;height:350px; max-height: 350px; overflow-y: scroll;">
    <div v-for="content in contents">
      <div class="chat_content_container"  v-if="content.send_from != 6">
        <img alt="Avatar">
        <p>{{content.text}}</p>
        <span class="chat_time-left">{{ content.created_at | moment("dddd, MMMM Do YYYY hh:mm") }}</span>
      </div>
      <div class="container darker" v-else>
        <img alt="Avatar" class="right">
        <p>{{content.text}}</p>
        <span class="time-right">{{ content.created_at | moment("dddd, MMMM Do YYYY hh:mm") }}</span>
      </div>
    </div>
</v-content>
<v-content fluid grid-list-md v-if="show_chat_content" style="margin-top: -50px;">
  <form @submit.prevent="submit">
    {{from}}
    {{to}}
   <v-layout row wrap>
       <v-flex xs11>
       <v-textarea rows="2" required v-model="send_text"/>
     </v-flex>
       <v-flex xs1>
    <v-btn
      type="submit"
    >
      submit
    </v-btn>
    </v-flex>
  </v-layout>
</form>
</v-content>
</div>
</v-chat>
</template>
<script src="./ChatLogic.js"></script>
<style>
.chat_content_container {
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
}

/* Darker chat container */
.darker {
    border-color: #ccc;
    background-color: #ddd;
}

/* Clear floats */
.chat_content_container::after {
    content: "";
    clear: both;
    display: table;
}

/* Style images */
.chat_content_container img {
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
}

/* Style the right image */
.chat_content_container img.right {
    float: right;
    margin-left: 20px;
    margin-right:0;
}

/* Style time text */
.time-right {
    float: right;
    color: #aaa;
}

/* Style time text */
.time-left {
    float: left;
    color: #999;
}
</style>
-->
