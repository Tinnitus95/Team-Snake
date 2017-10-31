function groupShow() {
  var a = document.getElementById('groupNr').value;

  if (a == 1) {
    document.getElementById('grupp1').style.display = 'flex';
  } else if (a == 2) {
    document.getElementById('grupp1').style.display = 'flex';
    document.getElementById('grupp2').style.display = 'flex';
  } else if (a == 3) {
    document.getElementById('grupp1').style.display = 'flex';
    document.getElementById('grupp2').style.display = 'flex';
    document.getElementById('grupp3').style.display = 'flex';
  }

}
