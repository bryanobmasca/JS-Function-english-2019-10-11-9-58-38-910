function reverseString(message) {
    var splitString = message.split(""); // Make it a new array
    var reverseArray = splitString.reverse(); // Reverse the newly created array
    var revMessage = reverseArray.join(""); // Join values in the array    
    return console.log(revMessage); // Return the reverse message
}
reverseString("hello");