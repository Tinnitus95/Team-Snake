// Create a function to return different courses depending on what you want to see
function courses(status) {
    // If statement to return different courses for different statuses
    if (status === "ongoing") {
        var courses = ["Swedish", "English"]
    } else if (status === "done") {
        var courses = ["Portuguese"]
    } else if (status === "future") {
        var courses = ["Spanish"]
    } else {
        console.log("Unknown status")
    }

    var list = '';
    // Create return html list
    courses.forEach(function (listItem) {
        list += '<li>'
        list += listItem
        list += '</li>'
    });
    console.log(list)

    // create a variable called htmlChunk and assign it the HTML 
    // page element specified by the ID "courses-content"
    // ElementID is dynamic depending on params
    var courseList = document.getElementById('courseList');

    // change the HTML inside htmlChunk (and so "courses-content") 
    courseList.innerHTML = list;
}


function coursesContent(course) {
    var courseContent = document.getElementById('courseContent');
    courseContent.innerHTML = ["Pass"]
}