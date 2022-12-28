let card = document.querySelector('.card');
let output = ``;
let url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.map(data => {
           return output += `
            <ul id="card-wrapper" data-id=${data.id}>
    <li>id : ${data.id}</li>
    <li>name: ${data.name}</li>
    <li>username: ${data.username}</li>
    <li>email: ${data.email}</li>
    <li class="address">
        <ul>
            <li id="address" >address ></li>
        </ul>
        <div class="" id="address-inner">
            <ul>
                <li>street: ${data.address.street}</li>
                <li>suite: ${data.address.suite}</li>
                <li>city: ${data.address.city}</li>
                <li>zipcode: ${data.address.zipcode}</li>
            </ul>
        </div>
    </li>
    <li class="geo" >
        <ul>
            <li id="geo">geo ></li>
            <div class="" id="geo-inner">
                <ul>
                    <li>lat: ${data.address.geo.lat}</li>
                    <li>lng: ${data.address.geo.lng}</li>
                </ul>
            </div>
        </ul>
    </li>
    <li>phone: ${data.phone}</li>
    <li>website: ${data.website}</li>
    <li class="company" >
        <ul>
            <li id="company">Company ></li>
        </ul>
        <div class="" id="company-inner">
            <ul>
                <li>name: ${data.company.name}</li>
                <li>catchPrase: ${data.company.catchPrase}</li>
                <li>bs: ${data.company.bs}</li>
            </ul>
        </div>
    </li>
</ul>`

            
        })
        card.innerHTML = output;
    })
