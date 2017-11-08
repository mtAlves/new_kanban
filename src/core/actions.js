import axios from 'axios'

const BASE_URL = 'http://172.30.11.26:3000/scrum-list/';

export default {

    ATIVIDADESLIST ({ commit }) {
		axios.get(`${BASE_URL}atividade-list/`)
		.then(res => { commit ('atividades_list', res.data) })
    },  
}