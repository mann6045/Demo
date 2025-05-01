function myData(){
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            const data = {
                name:"Aman", age: 21
            };
            resolve(data);
        }, 2000)
    })
}

myData().then(
    (data) => {
        console.log("Data: ", data);
    }
).catch((error) => {
    console.log("Data: " + JSON.stringify(data));
})


