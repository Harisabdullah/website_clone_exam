const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  // Get the value of the input fields
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;

  // Check if all fields are filled in
  if (!username || !password || !passwordConfirm) {
    alert("Please fill in all fields");
    return;
  }

  if(password !== passwordConfirm){
    alert("Passwords do not match");
    return;
  }
   alert("Success");

});