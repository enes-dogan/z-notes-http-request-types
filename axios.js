const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/4');
      console.log('axios Package API');
      console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
