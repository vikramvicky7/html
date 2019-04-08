function validateForm() {
    var e= document.forms.userForm.email.value;
    var p = document.forms.userForm.password.value;

    if (e == "") {
        alert("Enter email");
        return false;
    }
    if (p  == "") {
        alert("Enter password");
        return false;
    }
    return true;
}