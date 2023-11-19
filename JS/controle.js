function verif1() {
  permis = document.getElementById("permis").value;
  nom = document.getElementById("nom").value;
  prenom = document.getElementById("prenom").value;
  genre = document.form.genre;

  if (
    permis.length != "8" ||
    permis.indexOf("/") != 2 ||
    isNaN(permis.substring(0, 2)) ||
    isNaN(permis.substring(3, permis.length))
  ) {
    alert("Permis Invalide!");
    return false;
  } else if (nom.length < 3 || nom.length > 20 || !alpha(nom)) {
    alert("Nom Invalide!");
    return false;
  } else if (prenom.length < 3 || prenom.length > 20 || !alpha(prenom)) {
    alert("Prenom Invalide!");
    return false;
  } else if (!genre[0].checked && !genre[1].checked) {
    alert("Selectionner votre genre!");
    return false;
  }
  return true;
}

function alpha(ch) {
  ch = ch.toUpperCase();
  test = true;
  i = 0;
  while (i < ch.length && test) {
    if (ch.charAt(i) < "A" || ch.charAt(i) > "Z") {
      test = false;
    }
    i++;
  }
  return test;
}
