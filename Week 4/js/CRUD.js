const wrapper = document.querySelector('#wrapper');
const url = 'https://63a5a93a318b23efa79a1907.mockapi.io/userAccount';
let output = "";
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.map(data => {
            output +=  `
                <div class="rounded-min shd-pure2" id="card" data-id=${data.id}> 
                    <h4 class="px-15" id="email">email : ${data.email}</h4>
                    <p class="px-15" id="password">password : ${data.password}</p>
                    <p class="px-15" id="number">number : ${data.number}</p>
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
})