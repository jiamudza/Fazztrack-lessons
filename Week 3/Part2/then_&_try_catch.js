const cekHariKerja = (day) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dataDay =['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            } )
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// const cekHari = cekHariKerja("sabtu");

// cekHari
//     .then(response => console.log(response + " adalah hari kerja"))
//     .catch(response => console.log(response));



async function cekHari2() {
    try {
        const result = await cekHariKerja("minggu");
        console.log(result + "adalah hari kerja");
    } catch(err) {
        console.error(err);
    }
}
cekHari2()