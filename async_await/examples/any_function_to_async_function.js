//JS allows us to convert any function to an async function.

//writing a function declaration instead of a function and using arrow syntax.

const fetchUser = async (handle)=>{
    const url = `https:.../.../${handle}`
    const response = await fetch(url)
    return await response.json();
}

fetchUser("Shaw")
    .then(user=>{
        console.log(user.name)
    });

//await keywords can be only used inside the asynchronous functions
//to use it in the code, outside the function we need to have a JS iffy pattern, immediately invoked function.

(async function(){
    const user = await fetchUser("Shaw");
    console.log(user.name);
})();
    

//as a arrow function

(async ()=>{
    const user = await fetchUser("Shaw");
    console.log(user.name);
})();



//Using async function inside a class

class UserClient{
    async fetchUser(handle){
        const url = `https:.../.../${handle}`
        const response = await fetch(url)
        return await response.json();
    }
}

(async ()=>{
    const client = new UserClient();
    const user = client.fetchUser("Shaw");
    console.log(user.name)
})()