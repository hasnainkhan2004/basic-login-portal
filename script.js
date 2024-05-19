function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please fill out this field");
        return false;
    }
    //login process 
    if (username !== "admin" || password !== "password") {
        alert("Invalid username or password");
        return false;
    }
    return true;
}