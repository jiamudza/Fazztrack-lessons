const user = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const names = ['andi-adm', 'yoga-adm', 'febri-usr', 'putri-usr'];
            let username = names.find((item) => item === name)

            if(username.includes("adm")) {
                resolve(`${username} adalah seorang admin`)
            } else {
                reject(`user adalah customer`);
            }
        }, 3000) 
    })
}

const userAdmin = user('yoga-adm').then(response => response)
.catch(err => err)

console.log(userAdmin)
    
