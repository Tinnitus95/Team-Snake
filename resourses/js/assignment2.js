let header = "<tr><th>Kurser</th><th>Närvaro</th></tr>"
let thiago = "<tr><td>html</td><td>5%</td><td>Css</td><td>89%</td></tr><tr><td>agila</td><td>10%</td></tr>"
let silvia = "<tr><td>html</td><td>100%</td></tr><tr><td>agila</td><td>95%</td></tr>"
let sarmento = "<tr><td>html</td><td>85%</td></tr><tr><td>agila</td><td>90%</td></tr>"
let jorge = "<tr><td>html</td><td>100%</td></tr><tr><td>agila</td><td>100%</td></tr>"
let nando = "<tr><td>html</td><td>98%</td></tr><tr><td>agila</td><td>99%</td></tr>"


function displayUserData(user) {
    if (user === "thiago") {
        document.getElementById("user-data").innerHTML = header + thiago;
    } else if (user === "silvia") {
        document.getElementById("user-data").innerHTML = header + silvia;
    } else if (user === "sarmento") {
        document.getElementById("user-data").innerHTML = header + sarmento;
    } else if (user === "jorge") {
        document.getElementById("user-data").innerHTML = header + jorge;
    } else if (user === "nando") {
        document.getElementById("user-data").innerHTML = header + nando;
    }

};