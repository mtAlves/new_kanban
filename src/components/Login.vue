<template>
    <v-layout row wrap class="text-xs-center">
    <v-flex xs12 sm6 offset-sm3 justify-space-between>
      <v-card class="blue-grey darken-3">
        <v-card-title>
          <v-card-text class="title">KANBAN LOGIN</v-card-text>
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="login">
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  placeholder="Username" single-line
                  append-icon="account_box" class="blue--text" hide-details> 
                  </v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  placeholder="Password" single-line type="password"
                  append-icon="vpn_key" class="blue--text mb-5" hide-details> 
                  </v-text-field>
              </v-flex>
            </v-layout>
            <v-btn class="cyan--text" type="submit">login</v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import auth from '../core/auth'

export default {
  data () {
    return {
      user: '',
      password: '',
      error: false,
      text: ''
    }
  },
  methods: {

    login () {
      auth.login(this.user, this.password, (loggedIn, err) => {
        if (err) {
          console.log('login', err)
          this.error = true
          this.text = err
        } else if (loggedIn === false) {
          console.log('login', loggedIn)
          this.error = true
          this.text = 'Bad login information'
        } else {
          console.log(this.$route)
          this.$router.push(this.$route.query.redirect || '/')
        }
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title{
    font-family: 'Architects Daughter';
    font-size: 3em !important;
    color: #00b2cc;
  }

</style>
