var assignments = [{
    "text": "...här kommer elevs uppgift sen...",
    "feedback": "",
    "grade": ""
}, {
    "text": "...här kommer elevs uppgift sen...",
    "feedback": "",
    "grade": ""
}]

function showAssignment(number) {
    // Bygg en sträng från objektet och addera mellan paragraferna
    var uppgiftstext = "<h3>Uppgifts text</h3><p>" + assignments[number].text + "</p>";

    // Dynamisk textarea 
    var textarea = "<h3>Lämna feedback</h3><textarea id=\"feedbackText\" rows=\"4\" cols=\"30\"></textarea>";

    // Dynamisk select function 
    var selector = "<h3>Betyg</h3><select id=\"gradeSelect\">";
    selector += "<option value=\"VG\">VG</option>";
    selector += "<option value=\"G\">G</option>";
    selector += "<option value=\"IG\">IG</option>";
    selector += "</select>";

    var button = "<button onclick=\"submitGrade(" + number + ")\">Submit</button>";

    // Uppdatera HTML efter ID
    document.getElementById("assignmentText").innerHTML = uppgiftstext;
    document.getElementById("feedback").innerHTML = textarea;
    document.getElementById("grade").innerHTML = selector;
    document.getElementById("submitButton").innerHTML = button;
};

function submitGrade(number) {
    // hämtar select elementet värdet och spara i assignments objektes grade
    var g = document.getElementById("gradeSelect");
    assignments[number].grade = g.options[g.selectedIndex].value;

    // hämtar textarea elementet värdet och spara i assignments objektet feedback
    var fb = document.getElementById("feedbackText").value;
    if (fb === "") {
        window.alert("lämna feedback");
        return;
    }
    assignments[number].feedback = fb;

    window.alert("Uppgifterna är nu uppdaterade");
    location.reload(); // laddar om sidan
};