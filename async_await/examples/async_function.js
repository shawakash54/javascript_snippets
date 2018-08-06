//promise representation

function showUser(handle){
    const url = `https://..../.../${handle}`;
    fetch(url)
        .then(response => response.json())
        .then(user =>{
            console.log(user.name);
        })
}

//async await representation

function showUser2(handle){
    const url = `https://.../.../${handle}`;
    const response = await fetch(url)
    const user = await response.json();
    console.log(user.name)
}