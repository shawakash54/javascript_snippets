//when an async function is called, it returns a promise. When it returns a value, the promise will be resolved with that value
//it is quite easy to call a asynchronous function as a part of the promise chain


async function getUser(handle){
    const url = `https:/.../.../${handle}`;
    const response = await fetch(url);
    return await response.json();
}


getUser("Shaw")
    .then(user=>{
        console.log(user.name);
    })