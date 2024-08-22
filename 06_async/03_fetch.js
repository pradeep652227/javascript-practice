(async function() {

    // const res=await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10',{
    //     method:'GET'
    // });

    const newTodo = {
        "description": "Todo-1, testing purpose",
        "title": "Todo-1"
    };

    try {
        const res1 = await fetch('https://api.freeapi.app/api/v1/todos/', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                "content-type": 'application/json'
            }
        });

        console.log(`Result of Posting a New Todo`);
        console.log(res1);
    } catch (err) {
        console.log(err);
    }
})();
