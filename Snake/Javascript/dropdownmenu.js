function openDrop(evt, tabName) {
    // Declare all variables
    var i, dropcontent, droplinks;

    // Get all elements with class="dropcontent" and hide them
    dropcontent = document.getElementsByClassName("dropcontent");
    for (i = 0; i < dropcontent.length; i++) {
       dropcontent[i].style.display = "none";
    }

    // Get all elements with class="droplinks" and remove the class "active"
    droplinks = document.getElementsByClassName("droplinks");
    for (i = 0; i < droplinks.length; i++) {
        droplinks[i].className = droplinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
