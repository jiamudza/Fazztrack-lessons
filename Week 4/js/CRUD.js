const wrapper = document.querySelector('#wrapper');
const url = 'https://63a5a93a318b23efa79a1907.mockapi.io/userAccount';
const update = document.querySelector('#submit-update')
const cancel = document.querySelector('#cancel-update')
const modal = document.querySelector("#modal");
let emailUp = document.querySelector("#email-up")
let passwordUp = document.querySelector("#password-up")
let numberUp = document.querySelector("#number-up")
let output = "";
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.map(data => {
            output +=  `
                <div class="rounded-min shd-pure2" id="card" data-id=${data.id}> 
                    <label for="email">Email:</label>
                    <h4 class="px-15" id="email">${data.email}</h4>
                    <label for="password">Password:</label>
                    <p class="px-15" id="password">${data.password}</p>
                    <label for="number">Number:</label>
                    <p class="px-15" id="number">${data.number}</p>
                    <button type="delete" class="btn" id="delete-post">delete</button>
                    <button class="btn" id="edit-post">edit</button>
                </div>`
        });
        wrapper.innerHTML = output;
    })

wrapper.addEventListener('click', (event) => {
    event.preventDefault();

    let deleteButtonClicked = event.target.id == "delete-post";
    let editButtonClicked = event.target.id == "edit-post";

    let id = event.target.parentElement.dataset.id;

    if(deleteButtonClicked) {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(() => location.reload())
        
    }

    if(editButtonClicked) {
        modal.removeAttribute('class')
        const parent =event.target.parentElement;

        let emailContent = parent.querySelector('#email').textContent;
        let passwordContent = parent.querySelector('#password').textContent;
        let numberContent = parent.querySelector('#number').textContent;

        emailUp.value = emailContent;
        passwordUp.value = passwordContent;
        numberUp.value = numberContent;

        update.addEventListener('click', (e) => {
            e.preventDefault()
                fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email: emailUp.value,
                    password: passwordUp.value,
                    number: numberUp.value
                })
            })
            .then(res => res.json())
            .then(modal.setAttribute('class','d-none'))
        })
        cancel.addEventListener('click', (e) => {
            e.preventDefault()
            modal.setAttribute('class', 'd-none')
        })

    }
})