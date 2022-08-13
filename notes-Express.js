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

//  ---------------- START TEMPLATE ------------------------
// -------- Possibly a template for many Express.js Connection ---------------
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// ********* Every time we create a server that will serve a front and 
// as well as JSON DataTransfer, and create a server that's looking to 
// accept POST data we need to use the following code ***********

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.statistis('<directory name>'));

// ************* END middleware functions **********************

// ----- TEST to see if it is running ------------
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});
// ------ END TEST ------------------------

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//  -------------- END TEMPLATE --------------------------------

//  -------START----------this is from MODULE 11 Challenge ----------------------
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// This goes in the db.json file
[
  {
    "title": "Test",
    "text": "Test",
    "id": "e1356850-0f0c-11eb-86a6-0b297e79cf71"
  }
]

//  ----------END-------------Module 11 Challenge notes -------------------

