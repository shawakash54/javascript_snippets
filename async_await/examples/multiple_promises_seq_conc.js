//Bad approach - approach that makes the await statement wait.

async function fetchFrom(handle){
    const response = await fetch(handle)
    return await response.json()
}

async function badApproach(handle){
    const user = await fetchFrom(`..../user/${handle}`)
    const repo = await fetchFrom(`..../user/repos/${handle}`)

    console.log(user.name)
    console.log(repo.length)
}

async function goodApproach(handle){
    //if we don't await on an async method, it returns a promise and hence the execution is now concurrent
    const userPromise = fetchFrom(`..../user/${handle}`)
    const repoPromise = fetchFrom(`..../user/repos/${handle}`)
    
    const user = await userPromise
    const repo = await repoPromise

    console.log(user.name)
    console.log(repo.length)
}