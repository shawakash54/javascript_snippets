async function fetchInfo(user){
    const response = await fetch(`url`)
    const json = response.json();
    if(response.status != 200){
        throw new Error(json.message)
    }
    return json
}

async function showUser(user){
    try{
        const userDet = fetchInfo(user)
        console.log(userDet.name)
    }catch(err){
        console.error(`Error: ${err.message}`)
    }
}

showUser("shawakash54")