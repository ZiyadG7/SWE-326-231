const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const eventEmitter = new CustomEventEmitter();

function simulateLogin(username, password) {
  const randomDelay = Math.random() * 1.9 + 0.1; // Random delay between 0.1 and 2 seconds
  setTimeout(() => {
    const timestamp = new Date().toLocaleString();
    if (username === 'admin' && password === 'password') {
      console.log(`${timestamp}: Successful login for ${username}`);
      eventEmitter.emit('userLoggedIn', username);
    } else {
      console.log(`${timestamp}: Failed login attempt for ${username}`);
      eventEmitter.emit('userLoginFailed', username);
    }
  }, randomDelay * 1000);
}

eventEmitter.on('userLoggedIn', (username) => {
  console.log(`Welcome, ${username}!`);
});

eventEmitter.on('userLoginFailed', (username) => {
  console.log(`Login failed for ${username}`);
});

function promptUser() {
  process.stdout.write('Enter username (or "exit" to quit): ');

  process.stdin.once('data', (data) => {
    const userInput = data.toString().trim();

    if (userInput.toLowerCase() === 'exit') {
      process.exit();
    } else {
      const password = Math.random() < 0.5 ? 'password' : 'wrongpassword'; 
      simulateLogin(userInput, password);
      promptUser();
    }
  });
}

console.log('Simulating user logins...');
promptUser();