function* createFetcher(){
    const resp = yield fetch(url)
    const json = yield resp.json()
    return `${json}`
}

const fet = createFetcher()

// fet.next().value
//     .then(res => fet.next(res).value)
//     .then(res => fet.next(res).value)
//     .then(data => console.log(data))
//     .catch(err=> console.log(err))

//Making the above thing generic. For that we need a helper function
const coroutine = (gen) => {
    const generator = gen()
  
    const handle = (result) => {
        if (result.done) return Promise.resolve(result.value)
        return Promise.resolve(result.value)
        .then(res => handle(generator.next(res)))
    }

    return handle(generator.next())
}
  
const fetcher = coroutine(createFetcher)
fetcher.then(data => console.log(data))
  
//either do the above or else include `co` npm package