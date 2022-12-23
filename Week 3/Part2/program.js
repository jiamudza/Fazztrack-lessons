const verification = (menuName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menuList= ['Cappucino','Americano','Frappucino','Latte','Avocado']
            let menu = menuList.find((item) => item === menuName);
            if(menu) {
                resolve(`${menu} tersedia`);
            } else {
                reject(`menu tidak tersedia`)
            }
        }, 3000)
    })
}


async function availableOrNot() {
    try{
        let available = await verification('Cappucino');
        console.log(available)
    } catch(err) {
        console.log(err);
    }

}

availableOrNot()

