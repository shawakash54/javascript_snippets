function* create(){
    try{
        const word = yield
        console.log(`${word}`)
    }catch(err){
        console.log(err)    //Something went wrong
    }
}

const s = create()
s.next()
s.throw('Something went wrong')
s.next('Shaw')