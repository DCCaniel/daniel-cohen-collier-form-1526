// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let submit = document.getElementById("submit-button");

// <input type="text" id="fullname">,
let name = document.getElementById("fullname");

// <input type="text" id="email">
let mail = document.getElementById("email");

// <textarea id="message"></textarea>
let msg = document.getElementById("message");


// Declare variable that will 
// store regular expression for email
let regularEmail = document.getElementById("email").value.indexOf("@");

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateForm() {

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    let formData = {};
    // Declare array that will store the errors
    let errors = [];

    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // Check if fullname is not empty.
    if (name.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
       formData.fullName = name.value;
    }
    // Otherwise:
    else {
       // Create a corresponding error-message
       // and add it to your array "errors".
       errors.push("<h3>Error: Name field is blank.</h3>")
    // End your conditional here.
  	}

    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
    if (mail.value !== "") {
       	// Check if email is valid.
       	if (regularEmail.value !== "") {
       	// If so:
          // Pass the collected value
          // to your object "data".
          formData.email = mail.value;
        }
       // Otherwise:
       	else {
          // Create a corresponding error-message
          // and add it to your array "errors".
    		errors.push("<h3>Error: Email is invalid.</h3>");
       // End your nested conditional here.
    		}
    // Otherwise:
    		} else {
       // Create a corresponding error-message
       // and add it to your array "errors"
       errors.push("<h3>Error: Email field is blank.</h3>");
    // End your outer conditional here.
  			}
 		
    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    if (msg.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
       formData.message = msg.value;
    // Otherwise:
  	} else {
       // Create a corresponding error-message
       // and add it to your array "errors"
       errors.push("<h3>Error: Message field is blank.</h3>")
    // End your conditional here.
  	}

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
    if (errors.length === 0) {
       // If so: 
       // Print it in JavaScript console.
       console.log(formData);
     }
    // Otherwise:
    else {
      // Print the data in JavaScript console.
      console.log(errors);
      // Clear text-fields
//      submit = '';
//			name = '';
//			mail = '';
//			msg = '';
    // End your conditional here.
  	}
// Close your function here
    }
// Register your form to "click" event.
submit.addEventListener("click", validateForm);