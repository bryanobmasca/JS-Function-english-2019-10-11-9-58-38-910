function alphabetSort(message){
    var splitString = message.split(""); // Make it a new array
    var sortArray = splitString.sort(); // Sort the newly created array
    var sortMessage = sortArray.join(""); // Join values in the array    
    return console.log(sortMessage); // Return the sort message
}
alphabetSort('hello');