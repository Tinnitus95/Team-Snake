const userName =["oscar", "silvia", "simon"];
const passWord =["123","456","789"];


function check(form) { /*function to check userid & password*/
               /*the following code checkes whether the entered userid and password are matching*/
               for(let i = 0; i < 3; i++) {
               if(form.username.value == userName[i]  && form.password.value == passWord[i]) {
                  valid = true;
                  break;
               } else {
                 valid = false;
               }
               }
               if (valid) {
                 window.open('https://www.google.se/')/*opens the target page while Id & password matches*/
                 }
               else {
                   alert("Error Password or Username")/*displays error message*/
               }


}
