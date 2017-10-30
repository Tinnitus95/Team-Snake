function generate() {
    // Generera ett slumpmessigt nummer mellan 1 och 100
    let random = Math.floor((Math.random() * 100) + 1);

    // Hämta data från input fältet
    let d = document.getElementById("date").value;
    // Ta bort - i datum
    let date = d.replace(/-/g, '');

    // Hämta vald kurs i selector elementet
    let c = document.getElementById("list");
    let course = c.options[c.selectedIndex].value;

    // Skicka tillbaka koden till reponse id
    document.getElementById("response").innerHTML = course + "-" + date + "-" + random;
}