function submitForm() {
    // Get values from form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const idea = document.getElementById('idea').value;

    // Check if all fields are filled
    if (name && email && phone && idea) {
      // If all fields are filled, show success message
      alert("Success! Message Sent!");
    } else {
      // If one or more fields are empty, show error message
      alert("Message not sent. Please fill out all the input fields.");
    }
  }