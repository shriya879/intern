// 1. Callback example
function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

greetUser("Shriya", function () {
  console.log("Welcome ");
});

// 2. setTimeout (delayed action)
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// 3. setInterval (repeating action)
let count = 0;
const timer = setInterval(() => {
  console.log(` Time check: ${new Date().toLocaleTimeString()}`);
  count++;
  if (count === 3) clearInterval(timer); // stop after 3 times
}, 3000);

// 4. Promise to simulate data fetching
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve(" Data received from server");
      else reject(" Failed to fetch data");
    }, 1500);
  });
}

// 5. async/await usage
async function getUserData() {
  try {
    console.log(" Fetching user data...");
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getUserData();


