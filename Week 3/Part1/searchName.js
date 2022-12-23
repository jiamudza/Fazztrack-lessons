const searchName = (input, limit, callback) => {
    const names = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"];
    names.sort();

     let container = [];
     let nameLower;
     let inputLower = input.toLowerCase(); //lowercase input

     for(let i = 0; i < names.length; i++) {
        nameLower = names[i].toLowerCase(); //lowercase name
        if(nameLower.includes(inputLower)) {
            if(container.length < limit) {
                container.push(names[i]);

            } else continue;

        } else continue
     }
     return callback(container);

}

// callback
const result = (text) => {
    return text;
} 

console.log(searchName("an", 3, result));
console.log(searchName("an", 4, result));