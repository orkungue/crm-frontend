<template>
  <div id="app">
    <template>
      <div class="wrapper">
        <table>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
          <tr v-for="data in tableData">
            <td>{{ data.date }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.address }}</td>
          </tr>
          <tr>
            <td colspan="13">
              <infinite-loading :distance="10" :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
            </td>
          </tr>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  data() {
       return {
         tableData: [{
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         },
         {
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         },
         {
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         },
         {
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         },
         {
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         },
         {
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         },
         {
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         }],
       }
     },
     methods: {
       onInfinite() {
         setTimeout(() => {
           this.tableData.push(JSON.parse(JSON.stringify(this.tableData[0])));
           this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
         }, 10);
       },
     }
   }
</script>

<style>
 /* Optional Styles */
 .wrapper {
   height: 200px;
   overflow-y: auto;
   border: 1px solid red;
 }

 table {
   border-collapse: collapse;
 }

 th, td {
   border: 1px solid;
   padding: 4px;
 }
 </style>
