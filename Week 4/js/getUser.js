const url = "https://63a5a93a318b23efa79a1907.mockapi.io/userAccount"

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(data => {
            console.log(data)
        });
    })
