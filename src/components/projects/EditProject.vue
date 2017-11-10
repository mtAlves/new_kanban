<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="blue-grey darken-3 elevation-4">
        <v-card-title class="blue black--text">
          {{project.name.toUpperCase()}}
          <v-spacer></v-spacer>
          <v-btn floating small class="red lighten-2" @click.native="cancel()">
            <v-icon light>cancel</v-icon>
          </v-btn>
          <v-btn floating small class="blue" @click.native="save()">
            <v-icon light>save</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-layout row wrap>

              <v-flex xs12>
                <v-select class="input-group--focused" label="Responsável Administrativo" autocomplete v-model="project.administrative_responsible" :items="usersList" item-text="name"></v-select>
              </v-flex>
  
              <v-flex xs12>
                <v-select class="input-group--focused" label="Responsável Técnico" autocomplete v-model="project.technical_responsible" :items="usersList" item-text="name"></v-select>
              </v-flex>

              <v-flex xs12 sm5>
                <v-menu lazy  :close-on-content-click="true"  v-model="menu_start"  transition="scale-transition" offset-y full-width  :nudge-left="40" max-width="290px">
                  <v-text-field slot="activator" label="Data final" v-model="project.start" prepend-icon="event" readonly ></v-text-field>
                  <v-date-picker locale="pt-BR" v-model="project.start" no-title scrollable actions></v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex xs12 sm5>
                <v-menu lazy  :close-on-content-click="true"  v-model="menu_end"  transition="scale-transition" offset-y full-width  :nudge-left="40" max-width="290px">
                  <v-text-field slot="activator" label="Data final" v-model="project.end" prepend-icon="event" readonly ></v-text-field>
                  <v-date-picker locale="pt-BR" v-model="project.end" no-title scrollable actions></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12>
                  <v-text-field box class="input-group--focused" multi-line label="Descrição" v-model="project.description"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
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
      project: {
        administrative_responsible:null,
        description:"",
        end:"",
        id:null,
        name:"",
        sprints:[],
        start:"",
        tasks:[],
        technical_responsible:""
      },
      menu_start: false,
      menu_end: false
    }
  },

  methods:{

  	cancel(){
      this.$router.push('/projects')
    },

    save(){
      console.log(this.project)
    },

    getProject(){
      let project = this.projectsList.find( project => project.id == this.$route.params.id);
      console.log(project);
      this.project = project;
    }

  },

  computed:{
  	...mapGetters({
  		projectsList:'getProjectsList',
  		usersList: 'getUsersList'
  	})
  },

  created(){
    this.getProject()
  }
}

</script>

<style>
	

</style>