
export default {

	atividades_list (state, atividadesList) {
	    state.atividadesList = atividadesList.sort(
	    	(a,b)=> a.id_atividade - b.id_atividade
	    	)
	  },
  
}
