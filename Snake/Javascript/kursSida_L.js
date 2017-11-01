function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function openClass(evt, tabName) {
  // Declare all variables
  var j, classcontent, classlinks, test;
  // Get all elements with class="tabcontent" and hide them
  classcontent = document.getElementsByClassName("classcontent");
  for (j = 0; j < classcontent.length; j++) {
    classcontent[j].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  classlinks = document.getElementsByClassName("classlinks");
  for (j = 0; j < classlinks.length; j++) {
    classlinks[j].className = classlinks[j].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
