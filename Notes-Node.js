// ---- Arrow functions are not direct replacements to the functions we know, but rather a way of creating
// --- more concise function expressions where possible. They don't need the 'function' keyword and instead
// -- use syntax like the following:

// Using function expression syntax
const addNums = function(numOne, numTwo) {
    return numOne + numTwo;
};
// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
    return numOne + numTwo;
};
//  ---- From Lesson 9 --------------

const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);


// -------------- END from Lesson 9 --------------

// ----- The following is used to create a file document -------

fs.writeFile('index.html', generatePge(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});

// The first argument is the file name that will be created, or the output file. 
// The second argument is the data that's being written: the HTML string template. 
// The third argument is the callback function that will handle any errors as well as the success message.

// ----- END create file -----

