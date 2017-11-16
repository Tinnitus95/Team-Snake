var allQuestions = [{
        "question": "Hur upplever du tempot i skolan just nu?"
    },
    {
        "question": "Vad har kursen gett dig? Nämn några viktiga saker."
    },
    {
        "question": "Hur upplever du stämningen i klassen?"
    },
    {
        "question": "Hur motiverad är du i dina studier?"
    },
    {
        "question": "Tycker du att du har tillgång till det du behöver?"
    },
    {
        "question": "Är du nöjd med dina studier?"
    }
];

function newQuestion() {
    var q = document.getElementById("newQuestion").value;
    if (q !== "") {
        var newQ = {
            "question": q
        }
        allQuestions.push(newQ);
    }
    document.getElementById('newQuestion').value = '';
    generateQuestions();
}

function generateQuestions() {
    var table = "";
    for (var i = 0; i < allQuestions.length; i++) {
        table += "<tr>";
        table += "<td><button type=\"button\" onclick=\"updateQuestion(\'" + i + "\')\">Sparar</button></td>";
        table += "<td><button type=\"button\" onclick=\"removeQuestion(\'" + i + "\')\">Ta bort</button></td>";
        table += "<td><textarea rows=\"2\" cols=\"30\" id=\"" + i + "\">" + allQuestions[i].question + "</textarea></td>";
        table += "</tr>";
    }
    document.getElementById("questions").innerHTML = table;
}

function updateQuestion(id) {
    var q = document.getElementById(id).value;
    allQuestions[id].question = q;
    generateQuestions();
}

function removeQuestion(id) {
    delete allQuestions.splice(id, 1);
    generateQuestions();
}

function questionDaily() {
    var q = document.getElementById("questionDaily").value;
    document.getElementById("questionDaily").innerHTML = q;
}