const users = [{
        username: "jesse",
        password: "jesse"
    },
    {
        username: "oscar",
        password: "oscar"
    },
    {
        username: "silvia",
        password: "silvia"
    },
    {
        username: "simon",
        password: "simon"
    },
    {
        username: "natasha",
        password: "natasha"
    },
    {
        username: "elias",
        password: "elias"
    }
];


function check(form) { /*function to check userid & password*/
    /*the following code checkes whether the entered userid and password are matching*/
    for (let i = 0; i < users.length; i++) {
        if (form.username.value == users[i].username && form.password.value == users[i].password) {
            valid = true;
            break;
        } else {
            valid = false;
        }
    }
    if (valid) {
        window.open('https://www.google.se/') /*opens the target page while Id & password matches*/
    } else {

        document.getElementById("Change").innerHTML = "Prova Igen";

        //alert("Error Password or Username")/*displays error message*/
    }


}