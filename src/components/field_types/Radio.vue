<template>

  	<div id="radios">
      <div v-for="object in field.attributes" :key="object.id">
      <input type="radio" name="test" :value="object.id" v-model="object[field.field_name]"><label>{{object}}</label>
    </div>
  	</div>
</template>
<script>

export default {
  name: 'Radio',
  props: ['field','object']
}
</script>
