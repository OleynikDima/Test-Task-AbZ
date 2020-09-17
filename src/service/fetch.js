

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency'
const users = 10;

const fetchUser = () => {
    return fetch(BASE_URL + `/api/v1/users?page=1&count=${users}`)
            .then(response => response.json())
            .then(data => data.users)
            .catch(error => console.log(error))
}

export default fetchUser;