<template>
	<v-layout row wrap xs12>

		<card
		tabColor="yellow"
		name="A FAZER"
		/>

		<card
		tabColor="blue"
		name="FAZENDO"
		/>

		<card
		tabColor="green"
		name="FEITO"
		/>

		<card
		tabColor="red"
		name="PENDENTE"
		/>

	</v-layout>
</template>

<script>
import card from './TaskCard'
import { mapGetters } from 'vuex'

export default {
	components:{
		card
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
