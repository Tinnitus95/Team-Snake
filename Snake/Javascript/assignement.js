function turnInAssignment(course, id) {
    var file = document.getElementById(id).value;
    if (file === "") {
        window.alert("Filen saknas!")
        return
    } else {
        window.alert("Tack för uppgiften i " + course + " " + file);
    }
    location.reload();
};