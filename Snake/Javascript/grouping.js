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
