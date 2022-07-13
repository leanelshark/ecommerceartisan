import axios from 'axios';

const mockApiUrl = 'https://62c9adba4795d2d81f803921.mockapi.io/EcoMuMa/usuario';

function getUsers() {
    axios
        .get(mockApiUrl, {headers: {'Content-Type': 'application/json'}})
        .then((response) =>{
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
 }

 //getUsers();

 function addUser() {
    const body = {
        name: 'Daniela',
        age: 21,
        lastName: 'John',
    };
    axios
        .post(mockApiUrl,body)
        .then((response) =>{
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });

 }

 //addUser();