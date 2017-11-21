// Spits out number of groups chosen
function groupGenerateGroups() {
    var numGroups = document.querySelector("#groupNr");
    var groupGroups = document.querySelector("#groups");
    var groupGroupsCount = document.querySelector("#groupGroupsCount");

    // Resets the list before appending new
    groupGroups.innerHTML = "";

    for (let i = 0; i < numGroups.value; i++) {
        groupGroups.innerHTML +="<div class=\"gruppering\" id=\"grupp" + i + "\"><ol data-draggable=\"target\"><h3>Grupp " + (i+1) + "</h3></ol></div>";
    }
}

function createEdu(){
  var eduName = document.getElementById('eduInput');
  var name = eduName.value;
  var eduDiv = document.getElementById("eduDivEmpty");
  if (eduDiv !=null) {
    eduDiv.innerHTML +="<div class=\"eduGroup\"><ol data-draggable=\"target\"><h3>" + name + "</h3></ol></div>"
}
}
function createCourse(){
  var courseName = document.getElementById('coursenameinput');
  var nameCourse = courseName.value;
  var coursePoint = document.getElementById('coursepoints');
  var pointCourse = coursePoint.value;
  var coursedate = document.getElementById('startdate');
  var date = coursedate.value;
  var end = document.getElementById('enddate');
  var enddate = end.value;
  var teachers = document.getElementById('teachers');
  var teach = teachers.value;
  var courseDiv = document.getElementById('courseDivEmpty');

  if(courseDiv != null) {
    courseDiv.innerHTML +="<div class=\"courseGroup\"><h3>"+ nameCourse+"(" +pointCourse +
    ") </h3> <p>Kursstart: "+ date + "</p> <p>Kursslut: " + enddate +"</p>" + "<p> Lärare: " + teach + "</p>"
  }


}
