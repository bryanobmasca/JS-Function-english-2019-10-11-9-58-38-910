function palindrome(message) {
	var removeString = /[^A-Za-z0-9]/g; //Characters that are not equal to A-Z, a-z, and 0-9
	message = message.toLowerCase(); // Make all characters to lower case
	var oldMessage = message.replace(removeString, ''); //Make all characters that are not equal to A-Z, a-z, and 0-9 be ''
    var splitString = oldMessage.split(""); // Make it a new array
    var reverseArray = splitString.reverse(); // Reverse the newly created array
    var revMessage = reverseArray.join(""); // Join values in the array    
    return console.log(oldMessage === revMessage); // Return if true or false    
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true