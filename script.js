

// code pour afficher a droite de la page une previsualisation de ce que l'internaut a proposé


 var button = document.querySelector('#envoi'); //   Obtenir référence au boutton de formulaire

  
 button.addEventListener('click', ()=>{ //ajouter un detecteur d'evenement pour le click sur le boutton envoyé

   var ana = document.querySelector('#analogie').value; //  Obtenir la valeur saise dans le champs si j'etais  de formulaire
   var valana = document.querySelector('#valeurAnalogie').value;//  Obtenir la valeur saise dans le champs je serais  de formulaire
   var just = document.querySelector('#justificationAnalogie').value;//  Obtenir la valeur saise dans le champs je serais  de formulaire
   var visuel = document.querySelector('#visual') //   Obtenir référence a la section dont le id est  visual et l'afecter a visuel

  
   var anavis = document.createElement('h1'); //  creer un nouveau element h1 (balise) pour l'analogie et la valeur analogie
   anavis.textContent = "si j'etais "+ana+" je serais "+valana; // ajouter la valeur anavis a cette balise
   visual.appendChild(anavis); // ajouter l'element anavis comme enfant a visual
   

   var justif = document.createElement('p');  //  creer un nouveau element p (balise) pour la justification de l'analogie
   justif.textContent = just ; // ajouter la valeur just a cette balise
   visual.appendChild(justif);// ajouter l'element justif comme enfant a visual

  //recupre l'image proposé par l'internaute

   var image = form.querySelector("input[type='file']");  //   Obtenir référence a l input dont le type est file et l'affecter a image
   if (image.files && image.files[0]) {// test pour verifier si l'internaute a bien choisie une image
    var img = document.createElement("img"); //creer un nouveau element img pour l'image
    img.src = URL.createObjectURL(image.files[0]); //lier le lien de l'image selectionné a la balise
    image.style
    visual.appendChild(img);// ajouter l'element img comme enfant a visual
  }
   
 });


 
// code chargement de données pour les analogies

var contenu = document.querySelector('#contenu'); //  Obtenir référence au bloc main

test.forEach(function creerSection(test) {


var sec = document.createElement('section');
  var right = document.createElement('div');
  
  right.setAttribute('class','columnright');
  var left = document.createElement('div');
  left.setAttribute('class','columnleft');
  var tiltle = document.createElement('h1');
  tiltle.textContent="Si j'étais " + test.analogie+ ", je serais "+ test.valeurAnalogie;
  var jus = document.createElement('p');
  jus.textContent= test.justificatifAnalogie

  left.setAttribute('class','columnright');
  
      // la division droite pour l'image
    left.setAttribute('class','columnleft');
    
    ima=document.createElement('img');
    ima.setAttribute('id',"ima")
    ima.src = 'image/'+test.image;
    





    contenu.appendChild(sec);
    sec.appendChild(right);
    right.appendChild(tiltle);
    right.appendChild(jus);
    sec.appendChild(left);
    left.appendChild(ima)


  console.log("Si j'étais " + test.analogie+ " je serais "+ test.valeurAnalogie);
  console.log(jus)
})









/*console.log(test);

test.forEach(function affichtitre(test) {
  console.log("Si j'étais " + test.analogie+ " je serais "+ test.valeurAnalogie);

})

*/


