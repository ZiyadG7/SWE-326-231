const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const eventEmitter = new CustomEventEmitter();

function simulateLogin(user) {
  const randomDelay = Math.random() * 1.9 + 0.1;
  setTimeout(() => {
    const timestamp = new Date().toLocaleString();
    console.log(`${timestamp}: ${user} logged in`);
    eventEmitter.emit('userLoggedIn', user);
  }, randomDelay * 1000);
}

eventEmitter.on('userLoggedIn', (user) => {
  console.log(`Welcome, ${user}!`);
});

eventEmitter.on('userLoggedOut', (user) => {
  console.log(`Goodbye, ${user}!`);
});

// Simulate user logins
simulateLogin('User1');
simulateLogin('User2');
simulateLogin('User3');

const logoutDelay = Math.random() * 1.9 + 0.1; 
setTimeout(() => {
  eventEmitter.emit('userLoggedOut', 'User2');
}, logoutDelay * 1000);