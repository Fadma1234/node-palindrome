const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const page = parsedUrl.pathname;

  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
    //Get the word from the query parameters
    const word = parsedUrl.query.word;
    let result = '';

    if (word) {
      //Perform the palindrome check logic here
      const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
      const reversedWord = cleanedWord.split('').reverse().join('');

      if (cleanedWord === reversedWord) {
        result = `"${word}" is a palindrome!`;
      } else {
        result = `"${word}" is NOT a palindrome.`;
      }
    } else {
      result = 'Please provide a word in the URL.';
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //Send the result message, not the function
    res.end(result);
  } else if (page == '/style.css') {
    fs.readFile('style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else if (page == '/main.js') {
    fs.readFile('main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(7000, () => {
  console.log('Server is running on port 8000');
});
