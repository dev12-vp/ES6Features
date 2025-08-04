let data = async () => {
    try {

        let getData = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        let jsonData = await getData.json()
        console.log("data : ",jsonData);

    } catch (error) {
        console.log('error', error)
    }

}

data()