<template>
  <div id="dragdiv">
    <div class="drag">
      <v-card>
{{this.item}}
        <draggable v-model="list" class="dragArea" :options="{group:'people'}">
        <div class="dragged_item" v-for="element in list">{{element.name}}</div>
        </draggable>
      </v-card>
      <v-card>
        <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
        <div class="dragged_item" v-for="element in list2">{{element.name}}</div>
        </draggable>
      </v-card>
    </div>
  </div>
</template>
<style>
.drag{
  min-height: 200px;
}
.dragArea{
  width: 47%;
  text-align: left;
  border: 1px solid black;
  float: left;
  min-height: 30px;
  max-height: 200px;
  overflow-y: auto;
}

.dragged_item{
  padding: 2px;
}

.dragged_item:active{
  background-color: #82b1ff;
}
.dragged_item::after{
  background-color: #82b1ff;
}
</style>
<script>
 import draggable from 'vuedraggable';
export default {
  name: 'CalcList',
  props: ['item'],
  data: () => ({
    list: [{name: "test"}],
    list2: [],
  }),created (){
    for (i = 0; i < this.item.length; i++) {
      if (this.item[i][1] == "integer" && this.item[i][0] != "id"){
        this.list.push(Object.assign({name: this.item[i][0]},));
      }
    }
  },
  components: {
    draggable
  },
};
</script>
