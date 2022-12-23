// palindrom

function palindrome(string) {
    string = document.getElementById("palindrome-check").value
    let textLower = string.toLowerCase();
    let half = Math.floor(string.length/2);
    let result = document.getElementById("result")

    for(let i = 0 ; i < half; i++) {
        if(textLower[i] === textLower[string.length - 1 - i]) {
            return result.innerHTML = `${string} is palindrome`
        }
        else return result.innerHTML = `${string} is not palindrome`;
    }
}