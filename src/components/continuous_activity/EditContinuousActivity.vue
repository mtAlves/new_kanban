<template>
	<div>TESTE</div>

</template>

<script>
import axios from 'axios';
import store from '@/core';
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
    	
    }
  },

  methods:{
  	
  },

  computed:{
  	...mapGetters({
  		continuousList:'getContinuousList',
  		usersList: 'getUsersList'
  	})
  },

  created(){

  }
}

</script>

<style>
	

</style>