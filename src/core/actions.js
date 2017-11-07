import axios from 'axios'
import {config, Base} from '../config';

const BASE_URL = 'http://172.30.11.26:3000/scrum-list/';

export default {
	login (context, {user, password}) {
		axios.post('http://172.30.11.26:3000/scrum-list/user-list/login/', {user, password})
		.then( res => {
			console.log(res.data.token);
		})
	}
    
}