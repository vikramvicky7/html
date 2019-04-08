function validateForm() {
    var em = document.forms.userForm.username.value;
    var pass = document.forms.userForm.password.value;

    if (em == "") {
        alert("Enter email");
        return false;
    }
    if (pass == "") {
        alert("Enter password");
        return false;
    }
    return true;
}