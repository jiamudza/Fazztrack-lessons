function palindrome(text) {
    // if text is not a string
    if(typeof text !== "string") {
        return `${text} is not a string`;
        // if text is a string
    } else {
        let textLower = text.toLowerCase();
        let textHalf = Math.floor(text.length/2);
        // if text length is too short
        if(textLower.length <= 2) {
            return `string length must be greater than 2`;
        } else {
            // palindrome loop
            for(let i = 0 ; i < textHalf; i++) {
                if(textLower[i] === textLower[text.length - 1 - i]) {
                    return `${text} is palindrome`;
                } else return `${text} is not palindrome`;
            }
        }
    }
}

console.log(palindrome("M"));
console.log(palindrome("Aranara"));
console.log(palindrome("jakarta"))
console.log(palindrome(2));
console.log(palindrome(true));
