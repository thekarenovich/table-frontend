import axios from 'axios';

const PERSON_API_BASE_URL = 'http://localhost:8081/api/persons';

class PersonService{

    getPersons(){
        return axios.get(PERSON_API_BASE_URL);
    }
}

export default new PersonService();