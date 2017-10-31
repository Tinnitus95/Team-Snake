function openCourse(id) {
  var e = document.getElementById("hidestart");
  e.style.display = (e.style.display == 'flex') ? 'none' : 'flex';
}

function openPost(id) {
  var e = document.getElementById("newsposttoggle");
  e.style.display = (e.style.display == 'flex') ? 'none' : 'flex';
}
// Declare all variables
/*var i, contentdrop, linksdrop;

// Get all elements with class="dropcontent" and hide them
contentdrop = document.getElementsByClassName("contentdrop");
for (i = 0; i < contentdrop.length; i++) {
   contentdrop[i].style.display = "none";
}

// Get all elements with class="droplinks" and remove the class "active"
linksdrop = document.getElementsByClassName("linksdrop");
for (i = 0; i < linksdrop.length; i++) {
    linksdrop[i].className = droplinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";*/
