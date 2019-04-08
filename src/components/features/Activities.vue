<template>
<div class="app">
<v-tabs slot="extension"
  v-model="tabs"
  fixed-tabs
  color="transparent">
      <v-tab
        ripple
        v-for="key in $store.state.activites" :key="key">
        {{key.key}}
      </v-tab>
      <v-tab-item
        v-for="n in $store.state.activites"
        :key="n"
      >
        <v-card flat>
          <v-card-text> {{ n.values }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
</div>
</template>
<script src="./ActivitiesLogic.js"></script>
