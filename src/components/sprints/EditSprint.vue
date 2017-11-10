<template>
	<div>TESTE SPRINT EDIT</div>

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
  		sprintsList:'getSprintsList',
  		usersList: 'getUsersList'
  	})
  },

  created(){

  }
}

</script>

<style>
	

</style>