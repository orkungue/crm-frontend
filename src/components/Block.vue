<template :class="['group', group.action]">
  <div v-if="loading" class="page_progressbar">
    <v-progress-circular :size="180" :width="12" indeterminate color="primary">Loading</v-progress-circular>
  </div>
  <div id="test" v-else>
    <div v-if="block.blocktype == 'partial'">
      <h1>{{block.name}}</h1>
      <component v-if="block.template_path" :is="block.template_path" :key="block.template_path" v-bind:bduuid="block.uuid"  v-bind:block_data="this.$store.state.objects[block.uuid]['block_data']">
      </component>
    </div>
    <div id="blocktemplate"  name="test" v-if="block.blocktype == 'form'">
      <h1>{{block.name}}</h1>
      <field
        v-for="field in block.field_definitions"
        :key="field.uuid"
        v-bind:field="field"
        v-bind:object="objects[block.uuid]['block_data']"
      ></field>
    </div>
    <div v-else-if="block.blocktype == 'list'">
      <h1>{{block.name}}</h1>
      <ListLayout v-bind:bduuid="block.uuid" v-bind:bd="this.$store.state.objects[block.uuid]['bd']"/> <!--   v-bind:block_data="this.$store.state.objects[block.uuid]['block_data']"  -->
      <br>
      <div v-if="block.has_anchor" class="triangle triangle-0">
        <v-icon style="color: #fff;" @click="newTrianglePartial()">add</v-icon>
      </div>
    </div>
    <div v-else-if="block.blocktype == 'listexpansion'">
      <h1>{{block.name}}</h1>
      <ExpansionListLayout v-bind:bduuid="block.uuid" v-bind:block_data="this.$store.state.objects[block.uuid]['block_data']"/>
      <br>
      <div v-if="block.has_anchor" class="triangle triangle-0">
        <v-icon style="color: #fff;" @click="newTrianglePartial()">add</v-icon>
      </div>
    </div>
  </div>
</template>
<script src="./BlockLogic.js"></script>
