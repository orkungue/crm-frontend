<template>
<div>
    <div v-if="loading" class="page_progressbar">
      <v-progress-circular :size="180" :width="12" indeterminate color="primary">Loading</v-progress-circular>
    </div>
  <div v-bind:class="this.$store.state.pageStyle"  v-else>
    <group v-bind:route="route" v-if="this.$store.state.hasGroup1" v-bind:group="this.$store.state.group1" v-bind:class="this.$store.state.group_split"></group>
    <transition name="slide">
      <group v-bind:route="route" v-if="this.$store.state.hasGroup2" v-bind:group="this.$store.state.group2" class="group2"></group>
    </transition>
  </div>
</div>
</template>
<script src="./PageLogic.js"></script>
