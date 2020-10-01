function countWords(message){
    var splitString = message.split(" "); // Make it a new array
    return console.log(splitString.length); // Return the length of the array
}
countWords('Good morning, I love JavaScript.'); // should return 5