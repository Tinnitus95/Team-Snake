var allQuestions = [{
        "question": "Vad är ditt problem?"
    },
    {
        "question": "Hur löser du problemet?"
    },
    {
        "question": "Vill du ha nya tofflor till julklapp?"
    }
];

function newQuestion() {
    var q = document.getElementById("newQuestion").value;
    if (q !== "") {
        var newQ = {
            "question": q
        }
        allQuestions.push(newQ)
    }
    generateQuestions();
}

function generateQuestions() {
    var table = "";
    for (var i = 0; i < allQuestions.length; i++) {
        table += "<tr>";
        table += "<td><button type=\"button\" onclick=\"updateQuestion(q" + i + ")\">Sparar</button></td>";
        table += "<td><button type=\"button\" onclick=\"removeQuestion(" + i + ")\">Ta bort</button></td>";
        table += "<td><textarea rows=\"1\" cols=\"30\" id=\"q\"" + i + ">" + allQuestions[i].question + "</textarea></td>";
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
    delete allQuestions[id]
    generateQuestions();
}