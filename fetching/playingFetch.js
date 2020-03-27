//fetch requests other than get. Here is update, delete and create.
export const playingWithFetch = async () => {
  //~ getting all data... not specific
  const res = await fetch("http://10.0.0.103:8000/items");
  const data = await res.json();
};

export const postingData = async ({ id, dataToPostToServer }) => {
  const postRequestStuff = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ highround: 21, highscore: 12, username: "Gary" })
  };
  const res = await fetch("http://10.0.0.103:8000/items", postRequestStuff);
  const data = await res.json();
  console.log(data); //~should get back from the server that should tell me what it done...
};

export const registerValidation = async (dataToValidate) => {
  const validateNewUser = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataToValidate)
  };
  const res = await fetch("http://10.0.0.6:8000/users/register", validateNewUser);
  const data = await res.json();
  console.log(data);
};

export const loginValidation = async (dataToValidate) => {
  const validateNewUser = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataToValidate)
  };
  const res = await fetch("http://10.0.0.6:8000/users/login", validateNewUser);
  const data = await res.json();
  console.log(data)
}

//~ 1. Retrieve all of users data (user that was authenticated). If loginValidation route password to the user typed is valudated then save grab user's data (score, round, etc.) and also the data for the score board (highround, highscore and the usersnames)
//~ 2. save the highscore and highround under the user when player reaches personal high best

//@ and I think that's all we'll need to do with the db