<template>
  <v-app dark id="inspire">

    <v-navigation-drawer persistent clipped enable-resize-watcher v-model="drawer" app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link" exact>
          <v-list-tile-action>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="blue-grey darken-3" dense fixed clipped-left app>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-x left absolute :nudge-width="100">
        <v-toolbar-title slot="activator">
          <v-btn icon>
            <v-icon>account_circle</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-list>
          <v-list-tile @click="logout">
            <v-list-tile-title class="red--text"> Logout </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <main>
      <v-content>
        <v-container fill-height>
          <v-layout justify-center>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import {config} from './config';
import axios from 'axios';

  export default {
    data: () => ({

      drawer: true,
      items: [
        { title: 'Gestão de atividades', icon: 'home',  link: '/', color: 'white' }, 
        { title: 'Projetos', icon: 'assignment',  link: 'project', color: 'blue' },
        { title: 'Tarefas', icon: 'fa-tasks',  link: 'task', color: 'red' }, 
        { title: 'Sprints', icon: 'motorcycle',  link: 'sprint', color: 'yellow' }, 
        { title: 'Atividades contínuas', icon: 'fa-spinner',  link: 'continuous_activity', color: 'green' }
      ]

    }),

    methods: {

      logout(){
        config.localstore.set('token', '');
        axios.defaults.headers.common['Authorization'] = null;
        this.$router.push('/login');
      }

    },

    created() {

    }

  }
</script>

<style>

</style>