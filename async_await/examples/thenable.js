//await operator converts any non promise value into a resolved promise

(async ()=>{
    const x = await 34      
    //converts the above to `const x = await Promise.resolve(34)`
    

})()