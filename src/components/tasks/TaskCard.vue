<template>
<v-flex xs3>
    <v-card :class="tabColor">
      <v-card-text class="text-xs-center black--text" >{{name}}</v-card-text>
    </v-card>
</v-flex>
</template>

<script>
export default {
  props:[
  	'tabColor',
  	'name'
  ],
  data: () => ({
    
  }),

}
</script>

<style scoped>
	

</style>