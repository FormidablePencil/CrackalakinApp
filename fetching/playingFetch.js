//fetch requests other than get. Here is update, delete and create.
export const playingWithFetch = async () => { //~ getting all data... not specific
   const res = await fetch('http://10.0.0.103:8000/items')
   const data = await res.json()
   console.log(data)
}

export const postingData = async ({ id, dataToPostToServer }) => {
   const postRequestStuff = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ highround: 21, highscore: 12, username: 'Gary' })
   }
   const res = await fetch('http://10.0.0.103:8000/items', postRequestStuff)
   const data = await res.json()
   console.log(data) //~should get back from the server that should tell me what it done...
}
//~ how do you make a post request to the server


//~ Take the highscore and high round and save it to db
//~ pull highscore and round from db
//~ create a registering new user system and permitting data only to those users