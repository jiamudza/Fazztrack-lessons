function replaceVokalToO(text) {
    let vokalChange=[];

    if(typeof text !== "string" || text == "") {
        return `${text} is not a string`;
    } else{
        for(let i = 0; i < text.length ; i++) {
            if(text[i] == "a") {
                vokalChange.push("o");
            } else if (text[i] == "A") {
                vokalChange.push("O");
            } else {
                vokalChange.push(text[i]);
            }

        }
        return vokalChange.join("");
    }
}

console.log(replaceVokalToO("jAkartA"));
console.log(replaceVokalToO(true));