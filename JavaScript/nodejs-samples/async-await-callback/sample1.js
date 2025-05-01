const helperPromise = function(){
    const promise = new Promise(function (resolve, reject){
        const x = "Hello";
        const y = "Hellop"; // It will show as error
        // const y = "Hello" this are same it will not go for the error 
        if( x == y){
            resolve("Strings are same")
        } else {
            reject("Strings are not same")
        }
    });
    return promise;
}
async function demoPromise(){
    try{
        let msg = await helperPromise();
        console.log(msg);

    } catch(error){
        console.log("Error: " + error)
    }
}

demoPromise();