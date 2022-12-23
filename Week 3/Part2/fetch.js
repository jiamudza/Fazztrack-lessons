// const userList = fetch('https://jsonplaceholder.typicode.com/users');
// userList
//     .then(response => response.json())
//     .then(data => {
//         let dataName = data.map((item) => item.name);
//         console.log(dataName);
//     })
//     .catch(error => console.log(error))

async function data() {
    try{
        let getData = await fetch('https://jsonplaceholder.typicode.com/users');
        let Data = await getData.json();
        let dataName = Data.map((item) => item.name);
        console.log(dataName)
    } catch(err) {
         console.log(err + "Data not found")
    }

}

data()

