const addNewUser = document.querySelector(".form-for-regist");
const url = "https://63a5a93a318b23efa79a1907.mockapi.io/userAccount"

addNewUser.addEventListener('submit', (e) => {
    e.preventDefault();

    const getEmail = document.querySelector('#email-input').value;
    const getPassword = document.querySelector('#password-input').value;
    const getNumber = document.querySelector('#number-input').value;
    
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(
            {
                email: getEmail,
                password: getPassword,
                number: getNumber
            }
        )
               
    })
    .then(response => response.json())
    .catch(err => err);
})
