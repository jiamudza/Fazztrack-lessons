let userList = new Promise((resolve, reject) => {
    let success = false;
    if(success) {
        resolve ([
            {
                name: "aji",
                age: 21
            },
            {
                name: "aji",
                age: 21
            },
            {
                name: "aji",
                age: 21
            }

        ])
    } else {
        reject([]);
    }
})

async function getUserList() {
    try {
        let user = await userList;
        return user 
    } catch {
        return error;
    }

}

console.log(getUserList);