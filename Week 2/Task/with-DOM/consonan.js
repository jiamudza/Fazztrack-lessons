function consonan(text) {
    text = document.getElementById("consonan").value;
    let converted = document.getElementById("converted");

    if(typeof text !== "string") {
        return converted.innerHTML = `${text} is not a string`;
    } else {
        let consonanChange = text.replace(/a/g, "o");
        return converted.innerHTML = consonanChange;
    }
}