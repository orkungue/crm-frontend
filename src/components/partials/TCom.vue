<template>
  <div id="tcomappedit" v-if="this.block_data.length > 1">
    <table>
<!--
      <tr>
        <td>{{this.block_data}} <b>{{tcomtypes}}</b></td>
      </tr>
-->
      <tr>
        <td>
          <div v-for="tcom in this.block_data">
            <v-text-field
              solo
              :append-icon="tcomtypes[1]['field_type']"
              :value="tcom.tcom_value"
              v-model="tcom.tcom_value"
              clearable
            ></v-text-field>
          </div>

        </td>
      </tr>
    </table>

  </div>
  <div id="tcomappnew" v-else>
    <table style="width: 100%;">
      <tr>
        <td>
          <div v-for="tcom in tcomtypes">
            <v-text-field
              solo
              :append-icon="tcom.type_name"
              :label="tcom.type_name"
              :rules="[rules[tcom.field_type]]"
              clearable
            ></v-text-field>
          </div>
        </td>
        <td style="width: 10px;"></td>
        <td>
          <div>
            <v-text-field
              solo
              label="Facebook"
              append-icon="share"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              solo
              label="Twitter"
              append-icon="share"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              solo
              label="Xing"
              append-icon="share"
            ></v-text-field>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script src="./TComLogic.js"></script>
