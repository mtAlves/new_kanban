<template>
	<v-layout>
		<v-flex xs12 sm10 offset-sm1 >
			<v-card>
		        <v-toolbar class="blue-grey darken-3" dark>
		          <v-btn icon @click="">
		             <v-icon color="yellow">add</v-icon>
		          </v-btn>
		          <v-spacer></v-spacer>
		          <v-text-field label="Pesquisar..."  class="yellow--text mt-3" single-line  append-icon="search"  dark ></v-text-field>
		        </v-toolbar>

		        <v-list >
		            <v-list-tile v-for="(sprint, index) in sprintList" :key="index" avatar @click="">
		              	<v-list-tile-action>
		                	<v-btn icon @click.native="editItem(sprint)" >
		                   		<v-icon dark color="yellow lighten-3"> edit </v-icon>
		                	</v-btn>
		              	</v-list-tile-action>
		              	<v-list-tile-action>
			                <v-btn icon @click.native="removeItem(sprint);">
			                   	<v-icon dark color="red lighten-2"> delete </v-icon>
			                </v-btn>
		              	</v-list-tile-action>
		              	<v-list-tile-content>
		                	<v-list-tile-title v-text="sprint.code"></v-list-tile-title>
		              	</v-list-tile-content>
		            </v-list-tile>
		        </v-list>
	        </v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import axios from 'axios';
import store from '@/core';
import { mapGetters } from 'vuex'

const url = 'project-list/';

export default {
  data () {
    return {
     
    }
  },

  methods:{

  },

  computed: {
  	...mapGetters({
  		sprintList: 'getSprintsList'
  	})
  },

  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
