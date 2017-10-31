const elev = [{
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
const teacher = [{
    username: "jesse1",
    password: "jesse1"
  },
  {
    username: "oscar1",
    password: "oscar1"
  },
  {
    username: "silvia1",
    password: "silvia1"
  },
  {
    username: "simon1",
    password: "simon1"
  },
  {
    username: "natasha1",
    password: "natasha1"
  },
  {
    username: "elias1",
    password: "elias1"
  }
];
const admin = [{
    username: "jesse2",
    password: "jesse2"
  },
  {
    username: "oscar2",
    password: "oscar2"
  },
  {
    username: "silvia2",
    password: "silvia2"
  },
  {
    username: "simon2",
    password: "simon2"
  },
  {
    username: "natasha2",
    password: "natasha2"
  },
  {
    username: "elias2",
    password: "elias2"
  }
];


function check(form) { /*function to check userid & password*/
  /*the following code checkes whether the entered userid and password are matching*/
  if (form.userchoice.value == "student") { // i html så finns det en lista så man kan välja student lärare eller admin
    for (let i = 0; i < elev.length; i++) {
      if (form.username.value == elev[i].username && form.password.value == elev[i].password) {
        valid = true;
        break;
      } else {
        valid = false;
      }
    }
    if (valid) {
      window.open('../Html/huvudelevsida.html#', "_self") /*opens the target page while Id & password matches*/

    } else {

      document.getElementById("Change").innerHTML = "Prova Igen"; //displays error message


    }
  } else if (form.userchoice.value == "teacher") {
    for (let i = 0; i < teacher.length; i++) {
      if (form.username.value == teacher[i].username && form.password.value == teacher[i].password) {
        valid = true;
        break;
      } else {
        valid = false;
      }
    }
    if (valid) {
      window.open('../Html/lararsida.html', "_self") /*opens the target page while Id & password matches*/

    } else {

      document.getElementById("Change").innerHTML = "Prova Igen"; //display error message


    }
  } else if (form.userchoice.value == "admin") {
    for (let i = 0; i < admin.length; i++) {
      if (form.username.value == admin[i].username && form.password.value == admin[i].password) {
        valid = true;
        break;
      } else {
        valid = false;
      }
    }
    if (valid) {
      window.open('../Html/huvudelevsida.html', "_self") /*opens the target page while Id & password matches*/

    } else {

      document.getElementById("Change").innerHTML = "Prova Igen"; //display error message


    }
  }

}


function handle(e) {
  if (e.keyCode === 13) {
    e.preventDefault(); // så att man kan logga in med Enter
    document.getElementById("login-btn").click();
  }
}
