const getEmail = document.querySelector('#email-input');
const getPassword = document.querySelector('#password-input');
const getNumber = document.querySelector('#number-input')
const addNewUser = document.querySelector(".form-for-regist");
const url = "https://63a5a93a318b23efa79a1907.mockapi.io/userAccount"

addNewUser.addEventListener('submit', (e) => {
    e.preventDefault();
    
    fetch(url, {
        method: "POST",
        headers: {
            'tittle' : 'user API'
        },
        body:
            {
                email: getEmail.value,
                password: getPassword.value,
                number: getNumber.value
            }
        
    })
    .then(response => console.log(response.json()))
    .catch(err => err);
})
