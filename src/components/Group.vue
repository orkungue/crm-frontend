<template>
  <div :class="['group', group.action, group.name]">
    <form method="POST" name="formData" ref="formData" @submit.prevent>
<!--      <p>
        <v-toolbar dense="true" absolute
      scroll-off-screen
      scroll-target="#scrolling-techniques">-->
      <router-link  v-if="group.action == 'edit' || group.action == 'new'" :to="this.$route.path.replace('/new/', '/save/')">
        <v-icon @click="globalSaveFunction()">save</v-icon>
        <v-icon @click="saveFavorite">favorite</v-icon>
      </router-link>
    <!--</v-toolbar>
  </p>-->
      <v-container grid-list-md text-xs-center>
        <v-tabs
        slot="extension"
        v-model="tab"
        fixed-tabs
        color="transparent"
      >
      <v-tab :key="all_block_items">
        {{group.name}}
      </v-tab>
        <!--<v-tab v-for="block in group.block_definitions" :key="block.uuid" :href="`#tab-${block.uuid}`" v-if="block.is_tab == 1">
          {{block.name}}
        </v-tab>-->
      </v-tabs>
        <div  v-if="this.$store.state.group2 && group.action != null" style="border: 1px solid blue display: inline-block; width: 40%; float: right; ">
          <router-link v-if="group.action == 'list'" :to="this.$route.path.replace('/list','/edit/'+ this.$store.state.group2.id +'')">{{this.$store.state.group2}}<v-icon>edit</v-icon></router-link>
        </div>
        <v-layout row wrap>
          <v-tabs-items v-model="tab">
              <v-tab-item :key="all_block_items">
                <div v-for="block in group.block_definitions" class="blocktemplate" v-bind:class="block.classname">
                  <block
                    :id="block.uuid"
                    v-bind:block="block"
                    >
                  </block>
                </div>
              </v-tab-item>
          <!--<v-tab-item v-for="block in group.block_definitions" :key="block.uuid" :id="`tab-${block.uuid}`" class="blocktemplate" style="width: 99%;">
          <block
            :id="block.uuid"
            v-bind:block="block"
            >
          </block>
        </v-tab-item>-->
      </v-tabs-items>
        </v-layout>
      </v-container>
    </form>
  </div>

</template>
<script src="./GroupLogic.js"></script>
