<template>
  <div id="dragdiv">
    <dnd-grid-container :layout.sync="layoutJson" :col-num="4" :is-mirrored="true">
        <dnd-grid-box boxId="box-b">
            <h1>Box 2</h1>
        </dnd-grid-box>
        <dnd-grid-box boxId="box-c">
            <h1>Box 3</h1>
        </dnd-grid-box>
        <dnd-grid-box boxId="box-d">
            <h1>Box 4</h1>
        </dnd-grid-box>

    </dnd-grid-container>
    </div>
</template>
<style>
.dnd-grid-box{
  border: 1px solid blue;
}
</style>
<script>
import { Container, Box } from '@dattn/dnd-grid'
// minimal css for the components to work properly
import '@dattn/dnd-grid/dist/dnd-grid.css'
export default {
  data: () => ({
    layoutJson: [
    {
        id: 'box-a',
        hidden: false,
        pinned: false,
        position: {
            x: 0,
            y: 0,
            w: 7,
            h: 1,
            minH: 5
       }
    },
    {
        id: 'box-b',
        hidden: false,
        pinned: false,
        position: {
            x: 0,
            y: 0,
            w: 2,
            h: 1
        }
    },
    {
        id: 'box-c',
        hidden: false,
        pinned: false,
        position: {
            x: 0,
            y: 0,
            w: 2,
            h: 1
        }
    },
    {
        id: 'box-d',
        hidden: false,
        pinned: false,
        position: {
            x: 0,
            y: 0,
            w: 2,
            h: 1
        }
    },
],
  }),
  components: {
       DndGridContainer: Container,
       DndGridBox: Box
   }
};
</script>
