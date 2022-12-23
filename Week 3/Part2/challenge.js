let getUsers = () => {
    return new Promise(async (resolve,reject) => {
        try {
            let getData = await fetch("https://jsonplaceholder.typicode.com/users");
            if(getData.ok) {
                let data = await getData.json();
                resolve(data.map(item => item.name))
            } else {
                reject("Data Fetching is Failed");
            }
        }
        catch {
            reject("fetch URL is not found")
        }
    })
}

getUsers()
    .then(response => console.log(response))
    .catch(response => console.error(response));