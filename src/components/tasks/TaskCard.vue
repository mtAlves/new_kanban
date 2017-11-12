<template>
<v-flex xs6 sm4 md3>
    <v-card :class="tabColor">
      <v-card-text class="text-xs-center black--text" >{{name}}</v-card-text>
        <v-layout row wrap>

          <v-flex xs12 class="mb-1" v-for="task in tasks">
            <v-card :color="cardColor" class="black--text" >
              <v-card-title>
                <h6>{{task.name}}</h6>
              </v-card-title>

              <v-flex xs12 offset-xs3>
                <v-tooltip top>
                  <v-btn icon slot="activator">
                    <v-icon color="grey darken-2">event</v-icon>
                  </v-btn>
                  <span>{{reverseDate(task.started)}}</span>
                </v-tooltip>

                <v-tooltip top>
                  <v-btn icon slot="activator">
                    <v-icon v-if="task.due" color="grey darken-2">event_available</v-icon>
                    <v-icon v-else color="grey darken-2">event_busy</v-icon>
                  </v-btn>
                  <span v-if="task.due">{{reverseDate(task.due)}}</span>
                  <span v-else>Data não informada</span>
                </v-tooltip>
              </v-flex>

              <v-flex>
                <v-tooltip top>
                  <v-btn icon slot="activator">
                    <v-icon color="grey darken-2">person</v-icon>
                  </v-btn>
                  <span v-if="task.responsible">{{userById(task.responsible)}}</span>
                  <span v-else>Responsavel não informado</span>
                </v-tooltip>

              <v-tooltip top>
                  <v-btn icon slot="activator">
                    <v-icon color="grey darken-2">description</v-icon>
                  </v-btn>
                  <span v-if="task.description">{{task.description}}</span>
                  <span v-else>Sem descrição</span>
                </v-tooltip>

                <v-tooltip top>
                  <v-btn icon slot="activator">
                    <v-icon color="grey darken-2">assignment</v-icon>
                  </v-btn>
                  <span v-if="task.project">{{projectById(task.project)}}</span>
                  <span v-else>Nenhum projeto relacionado</span>
                </v-tooltip>

                <v-tooltip top>
                  <v-btn icon slot="activator">
                    <v-icon color="grey darken-2">motorcycle</v-icon>
                  </v-btn>
                  <span v-if="task.sprint">{{sprintById(task.sprint)}}</span>
                  <span v-else>Nenhum sprint relacionado</span>
                </v-tooltip>
              </v-flex>

              <v-card-actions>
                <v-btn icon @click.native="editTask(task.id)">
                  <v-icon color="grey darken-4">edit</v-icon>
                </v-btn>
                <v-btn icon @click.native="editTask(task.id)">
                  <v-icon color="grey darken-4">delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
    </v-card>
</v-flex>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  props:[
  	'tabColor',
  	'name',
    'cardColor',
    'tasks'
  ],
  data: () => ({
    users: []
  }),

  methods: {

    userById (url) {
      let name = '';
      let id = url.split('/').reverse()[1];
      this.usersList.map( user => user.id == id ? name = user.name : null);
      return name;
    },

    projectById (url) {
      let name = '';
      let id = url.split('/').reverse()[1];
      this.projectsList.map( project => project.id == id ? name = project.name : null);
      return name;
    },

    sprintById (url) {
      let name = '';
      let id = url.split('/').reverse()[1];
      this.sprintsList.map( sprint => sprint.id == id ? name = sprint.code : null);
      return name;
    },

    reverseDate (date) {
      return date.split('-').reverse().join('/');
    },
  },

  computed:{
    ...mapGetters({
      sprintsList:'getSprintsList',
      projectsList:'getProjectsList',
      usersList: 'getUsersList'
    })
  },

  created() {

  }

}
</script>

<style scoped>
	

</style>