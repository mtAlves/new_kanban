<template>
  <v-app dark id="inspire">

    <v-navigation-drawer persistent clipped enable-resize-watcher v-model="drawer" app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="">
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

    <v-toolbar color="indigo darken-4" dense fixed clipped-left app>
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
          <v-list-tile v-for="user_action in user_actions" :key="user_action.title" @click="">
            <v-list-tile-title :class="user_action.color" v-text="user_action.title"></v-list-tile-title>
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
  export default {
    data: () => ({
      drawer: true,
      items: [
        { title: 'Gestão de atividades', icon: 'home',  link: 'home', color: 'white' }, 
        { title: 'Projetos', icon: 'assignment',  link: 'projeto', color: 'blue' },
        { title: 'Tarefas', icon: 'fa-tasks',  link: 'tarefa', color: 'red' }, 
        { title: 'Sprints', icon: 'motorcycle',  link: 'sprint', color: 'yellow' }, 
        { title: 'Atividades contínuas', icon: 'fa-spinner',  link: 'atividade-continua', color: 'green' }
      ],
      user_actions: [
        { title: 'Login', color: 'green--text' }, 
        { title: 'Logout', color: 'red--text' }, 
        { title: 'Registrar', color: 'blue--text'} 
      ]
    })
  }
</script>

<style>

</style>