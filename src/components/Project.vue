<template>
	<v-layout>
		<v-flex xs12 sm10 offset-sm1 >
			<v-card>
		        <v-toolbar class="blue-grey darken-3" dark>
					<!-- add method -->	
					<v-dialog v-model="addButton" persistent max-width="500px"> 
				      <v-btn icon dark slot="activator"> <v-icon color="blue">add</v-icon></v-btn>
				      <v-card>
				        <v-card-title>
				          <span class="headline">Adicionar Projeto</span>
				        </v-card-title>
				        <v-card-text>
				          <v-container grid-list-md>
				            <v-layout wrap>
				              <v-flex xs12 sm6 md4>
				                <v-text-field label="Legal first name" required></v-text-field>
				              </v-flex>
				              <v-flex xs12 sm6 md4>
				                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
				              </v-flex>
				              <v-flex xs12 sm6 md4>
				                <v-text-field label="Legal last name" hint="example of persistent helper text"
				                  persistent-hint
				                  required
				                ></v-text-field>
				              </v-flex>
				              <v-flex xs12>
				                <v-text-field label="Email" required></v-text-field>
				              </v-flex>
				              <v-flex xs12>
				                <v-text-field label="Password" type="password" required></v-text-field>
				              </v-flex>
				              <v-flex xs12 sm6>
				                <v-select
				                  label="Age"
				                  required
				                  :items="['0-17', '18-29', '30-54', '54+']"
				                ></v-select>
				              </v-flex>
				              <v-flex xs12 sm6>
				                <v-select
				                  label="Interests"
				                  multiple
				                  autocomplete
				                  chips
				                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
				                ></v-select>
				              </v-flex>
				            </v-layout>
				          </v-container>
				          <small>*indicates required field</small>
				        </v-card-text>
				        <v-card-actions>
				          <v-spacer></v-spacer>
				          <v-btn color="red darken-1" flat @click.native="addButton = false">Cancelar</v-btn>
				          <v-btn color="blue darken-1" flat @click.native="">Adicionar</v-btn>
				        </v-card-actions>
				      </v-card>
				    </v-dialog>
				    <!-- ending add method -->

		          <v-spacer></v-spacer>
		          <v-text-field label="Pesquisar..."  class="blue--text mt-3" single-line  append-icon="search"  dark ></v-text-field>
		        </v-toolbar>
				<v-expansion-panel expand>
					<v-expansion-panel-content v-for="(project, index) in projects" :key="index" avatar @click="">
				  		<div slot="header">
							<v-btn icon @click.native="editItem(project)"><v-icon dark color="blue lighten-3">edit</v-icon></v-btn>
			                <v-btn icon @click.native="removeItem(project)"><v-icon dark color="red lighten-2">delete</v-icon></v-btn>	
				  		{{project.name}}
				  		</div>
				  			<v-card color="blue-grey lighten-1">
								 <v-container grid-list-md>
							        <v-layout row wrap>
							          <v-flex xs6>
							            <v-text-field v-if="project.administrative_responsible" class="input-group--focused" disabled box dark label="Responsável Administrativo" :value="nameById(project.administrative_responsible)"></v-text-field>
							            <v-text-field v-else class="input-group--focused" disabled box dark label="Responsável Administrativo" value="Não informado"></v-text-field>
							          </v-flex>
							          <v-flex xs6>
							            <v-text-field v-if="project.technical_responsible" class="input-group--focused" disabled box dark label="Responsável Técnico" :value="nameById(project.technical_responsible)"></v-text-field>
										<v-text-field v-else class="input-group--focused" disabled box dark label="Responsável Técnico" value="Não informado"></v-text-field>
							          </v-flex>
							          <v-flex xs12 sm5 offset-sm1>
						                <v-text-field class="input-group--focused"
						                  single-line :value="reverseDate(project.start)"
						                  append-icon="event" disabled> 
						                </v-text-field>
						              </v-flex>
						              <v-flex xs12 sm5>
						                <v-text-field v-if="project.end"
						                  single-line :value="reverseDate(project.end)"
						                  append-icon="event_available" disabled> 
						                </v-text-field>
						                <v-text-field v-else
						                  single-line :value="project.ended"
						                  append-icon="event_busy" disabled> 
						                </v-text-field>
						              </v-flex>
							          <v-flex xs12>
							            <v-text-field box class="input-group--focused" multi-line label="Descrição" disabled v-model="project.description"></v-text-field>
							          </v-flex>
							        </v-layout>
							      </v-container>
				  			</v-card>
					</v-expansion-panel-content>
				</v-expansion-panel>
	        </v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import axios from 'axios';
import store from '@/core';
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
     addButton: false
    }
  },

  methods:{
  	nameById (url) {
  		let nome = '';
  		let id = url.split('/').reverse()[1];
  		this.usersList.map( user => user.id == id ? nome = user.name : null);
  		return nome;
  	},
  	reverseDate (date) {
  		return date.split('-').reverse().join('/');
  	}
  },

  computed: {
	...mapGetters({
		projects: 'getProjectsList',
		usersList: 'getUsersList'
	})

  },

  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input-group--focused{
	color:#00FFFF !important;
}

</style>
