// Import fetch from node-fetch if you're using Node.js
import fetch from 'node-fetch';

const link = "https://jsonplaceholder.typicode.com/posts?_limit=5";

fetch(link)
  .then(Response => Response.json())
  .then(data => {
    console.log("recived data");
    data.forEach(({ userId, id, title, body }) => {
      console.log(`{\nuserId: ${userId}\n id: ${id}\n title: ${title}\n body: ${body}\n}`);
    });
  })
  .catch(err => console.error("error", err.message));
