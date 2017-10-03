const user = [{
    username: "silvia",
    password: "silvia"
}]

function check(form) { /*function to check userid & password*/
    /*the following code checkes whether the entered userid and password are matching*/
    for (let i = 0; i < user.length; i++) {
        if (form.username.value == user[i].username && form.password.value == user[i].password) {
            valid = true;
            break;
        } else {
            valid = false;
        }
    }
    if (valid) {
        window.open('/Users/silvia/Development/git/Projekt1/Team-Snake/main.html', '_self') /*opens the target page while Id & password matches*/
    } else {

        document.getElementById("Change").innerHTML = "Prova Igen";

        //alert("Error Password or Username")/*displays error message*/
    }


}