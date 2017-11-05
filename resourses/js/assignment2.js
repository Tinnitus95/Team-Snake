function showAttendence(id, cb) {
    var checkbox = document.getElementById(cb);
    var data = document.getElementById(id);
    if (checkbox.checked === true) {
        data.style.display = "block";
    } else {
        data.style.display = "none";
    }
}