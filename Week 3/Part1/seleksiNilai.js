function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    let selected = [];
    if(nilaiAwal > nilaiAkhir) {
        return `Nilai akhir harus lebih besar dari nilai awal`;
    } else {
        if(dataArray.length <= 5) {
            return `Jumlah angka dalam dataArray harus lebih dari 5`;
        } else {
            for(let i = 0; i < dataArray.length; i++) {
                if(dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
                    selected.push(dataArray[i])
                } else if(selected.length == 0) {
                    return `Nilai tidak ditemukan`;
                };
            }
        }
    }
    return selected;
}

console.log(seleksiNilai(1,10,[2,6,7,9,11,13,17,22]));
console.log(seleksiNilai(10,1,[2,6,7,9,12,22,17]));
console.log(seleksiNilai(1,10,[2,6,7,9,8]));
console.log(seleksiNilai(1,10,[1,11,12,17,22,0]));