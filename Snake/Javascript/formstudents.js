function myFunction() {
    if (document.querySelector("input[name=answer-q1]:checked") === null) {
        window.alert("Lämna svar på alla frågorna")
        return false
    } else if (document.querySelector("input[name=answer-q2]:checked") === null) {
        window.alert("Lämna svar på alla frågorna")
        return false
    } else if (document.querySelector("input[name=answer-q3]:checked") === null) {
        window.alert("Lämna svar på alla frågorna")
        return false
    } else if (document.querySelector("input[name=answer-q4]:checked") === null) {
        window.alert("Lämna svar på alla frågorna")
        return false
    } else if (document.querySelector("input[name=answer-q5]:checked") === null) {
        window.alert("Lämna svar på alla frågorna")
        return false
    }
    var q = [];
    q.push(document.querySelector("input[name=answer-q1]:checked").value)
    q.push(document.querySelector("input[name=answer-q2]:checked").value)
    q.push(document.querySelector("input[name=answer-q3]:checked").value)
    q.push(document.querySelector("input[name=answer-q4]:checked").value)
    q.push(document.querySelector("input[name=answer-q5]:checked").value)
    window.alert("Tack för dina svar!")
}

function reset() {
    document.getElementById("q1").reset();
    document.getElementById("q2").reset();
    document.getElementById("q3").reset();
    document.getElementById("q4").reset();
    document.getElementById("q5").reset();
}