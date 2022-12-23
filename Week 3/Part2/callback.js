const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month =['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error ("Sorry, Data Not Found"), [])
        }
    }, 4000)
}

// callback
const showMonth = (response, months) => {
    let fullMonths = months.map(item => item);
    if(response==null) {
        console.log(fullMonths)
    } else {
        console.log(response,fullMonths)
    }
    
}

getMonth(showMonth)