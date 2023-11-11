const process = require('process');

const chatbotResponses = {
  1: 'Web development professionals should have the following key skills:\n\n- Proficiency in Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS)\n- In-depth knowledge of Python, Ruby, and PHP\n- Familiarity with DSL (Domain Specific Language), such as SQL\n- A strong sense of JavaScript and JavaScript libraries, including JQuery\n- Problem-solving capabilities',
  2: 'The primary responsibilities of a web developer include:\n\n- Testing and debugging web applications\n- Designing, developing, and deploying web applications\n- Uploading websites onto servers and registering them with multiple search engines\n- Coordinating with other programmers and designers to ensure the smooth development of web projects\n- Fixing bugs, troubleshooting, and resolving problems\n- Implementing contingency plans in case of system failures\n- Developing proper code structures for solving specific tasks\n- Providing support in the maintenance and upkeep of websites',
  3: 'HTTP/2 has a number of notable advantages over HTTP 1.1, which are:\n\n- Advanced server-push technology\n- Reduced network footprint\n- Uses network resources more effectively\n- Eliminates security issues related to HTTP 1.1, such as a response splitting attack\n- Enables superior capabilities, including effective TLS handling, prioritization, multiplexing, compression, and flow control\n- Compact command representation, which facilitates easier implementation and processing\n- Robust and efficient data processing between server and client\n- Improved throughput and lower network latency\n- Less error-prone',
  4: 'The following actions should be performed to improve page loading speed:\n\n- Decrease image size\n- Clear unwanted widgets\n- HTTP compression\n- Placing script reference at the bottom and CSS at the top\n- Reduce redirects\n- Minimize lookups\n- Caching',
  5: 'XHTML differs from HTML in many ways, for example:\n\n- All tags in XHTML must be in lowercase\n- XHTML requires the use of double quotes for all attributes\n- In XHTML, tags must be properly closed\n- XHTML does not permit an inline element to contain a block-level element',
  'Exit': 'Goodbye! Have a great day!',
};

function chatbot(input) {
  input = input.trim();

  if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
    console.log(chatbotResponses['Exit']);
    process.exit();
  }

  const response = chatbotResponses[input];

  if (response) {
    console.log(response);
  } else {
    console.log('I am sorry, I do not understand. Can you please enter a valid number?');
  }
}

function promptUser() {
  process.stdout.write('User: ');

  process.stdin.once('data', (data) => {
    const userInput = data.toString().trim();

    chatbot(userInput);

    promptUser();
  });
}

console.log('Chatbot: Hello! How can I assist you today?');
console.log('Chatbot: Here are some questions you can ask me:');
console.log('1. What skills should a good Web Developer have?');
console.log('2. Are you aware of the roles and responsibilities of a Web Developer?');
console.log('3. What are the added benefits of HTTP/2 compared to HTTP 1.1?');
console.log('4. Can you list a few ways to speed up Page Loading?');
console.log('5. How is XHTML different from HTML?');
console.log('Chatbot: Please enter the number corresponding to the question you want to ask.');
console.log('Chatbot: You can type "exit" or "quit" to end the conversation.');

promptUser();