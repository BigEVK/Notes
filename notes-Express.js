// --------- the standard fetch() usage for making a GET request! --------
fetch(queryUrl)
  .then(response => {
    if (!response.ok) {
      return alert('Error: ' + response.statusText);
    }
    return response.json();
  })
  .then(animalData => {
    console.log(animalData);
    printResults(animalData);
  });
//   -------------END------------------------------------------

// ********* Every time we create a server that will serve a front and 
// as well as JSON DataTransfer, and create a server that's looking to 
// accept POST data we need to use the following code ***********

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.statistis('<directory name>'));

// ************* END middleware functions **********************
