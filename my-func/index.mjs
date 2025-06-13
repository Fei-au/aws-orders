import axios from "axios";

export const handler = async (event) => {
  // TODO implement
  // const name = event.queryStringParameters?.name;
  // const response = {
  //   "age": 25
  // };
  
  const result = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(result.data)
  };
};