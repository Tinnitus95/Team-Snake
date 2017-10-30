function myFunction() {
    var file = document.getElementById("kursToUpload").value;
    let i = document.getElementById("file-course-select");
    let course = i.options[i.selectedIndex].value;
    if (file === "") {
        window.alert("Filen saknas!")
        return
    } else {
        window.alert("Tack för uppgiften i " + course + file);
    }
    location.reload();
};