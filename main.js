//pseudo code
//Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
//create my api inside server so user can not see the logic 
//fetch my api from server an d use it in my js 
//create my event listener
// inside my function i will grab value from input
// check if input is palindrome with a conditionnal
//used AI help in this project 
document.querySelector('button').addEventListener('click', isPalindrome);

function isPalindrome() {
  // Get the value from the input field inside the function
  const word = document.querySelector('input').value;
  // Check if the input is empty and provide user feedback
  if (!word) {
    document.querySelector('h2').innerText = 'Please enter a word.';
    return;
  }
  // Use the fetch API to call your server's endpoint,
  // including the user's word as a query parameter.
  fetch(`/api?word=${encodeURIComponent(word)}`)
    .then(res => {
      // Check if the response was successful.
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      // Return the response as text.
      return res.text();
    })
    .then(data => {
      // Display the server's response in the h2 element.
      console.log(data);
      document.querySelector('h2').innerText = data;
    })
  // .catch(error => {
  //   // Catch and display any errors during the fetch request.
  //   console.error('Error fetching data:', error);
  //   document.querySelector("h2").textContent = 'Error checking word.';
  // });
}

