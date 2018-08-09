// Promise.all takes a list of promises, and returns a single promise. If all the promises are resolved, then the single promise
// returned by Promise.all is resolved otherwise rejected. If resolved, it returns a aggregated list of the values
// order of the promises we pass to Promise.all determines the order of ther value aggregated in the return array

async function fetchFrom(handle){
    const response = await fetch(handle)
    return await response.json()
}

async function showUserAndRepo(handle){

    // const result = await Promise.all([
    //     fetchFrom(`..../user/${handle}`),
    //     fetchFrom(`..../user/repos/${handle}`)
    // ])

    // const user = result[0]
    // const repos = result[1]

    const [user, repos] = await Promise.all([
        fetchFrom(`..../user/${handle}`),
        fetchFrom(`..../user/repos/${handle}`)
    ])
}