/* 
// c'est un commentaire

//variable

// Question: comment on déclare une variable ?
let a = ''; //let a = 0
const b = ''; //const b = 0

//Question: comment affecter une chaine de caractère a une variable ?
let c = 'Bonjour les gens!!';

// Question: comment changer une valeur dans une variable ?
c = 'Bonjour la D-Web'

// Question: comment vérifier le contenu d'une variable ?
alert(c)

// Question: De quoi avons nous besoin pour faire une addition ? 
let d = 5 + 6;

let e = 5; let f = 6;
let total = e + f;

// Question: de quoi avons nous besoin pour une concatenation 
let section = "D-Web";
let salutation = "Bonjour";
alert(salutation+section);

// Exercice:

 * Créer 4 variables 3 numérique et une avec une chaine de caracteres suivante
 * "Le total est"
 * Vous devez mettre en place une division, une mutiplication, une soustraction et une addition 
 * avec des chiffres différents et afficher pour chaque operation une alerte avec le resutat 
 
const T = 'Le total est : ';
let x = 8;
let y = 5;
let z = 12;


alert(T+(x+y));
alert(T+(x-y));
alert(T+(x*y));
alert(T+(x/y));
 */

// Question: comment changer le contenu d'un element html
// identifier element html
let bh1 = document.querySelector("h1");
bh1.innerHTML = "Bonsoir les D-Web";

//identifier le 2eme element h1 et changer son contenu
let bh2 = document.querySelectorAll("h2");
bh2[1].innerHTML = "Section en avant";

// affecter contenu du 2eme h2 dans h3
let bh3 = document.querySelector("h3");
let changeH2 = bh2[1].innerHTML = "Merci beaucoup";

bh3.innerHTML = changeH2;

let bh2s = document.querySelector("h2.ssh2");
bh2s.innerHTML = "BENJAMIN mal de tete";

console.log(bh2);

// exercice:
/**
 * Creer la variable paragraphe puis recupérer l'element html p et ajouter le contenu suivant 
 * "La D-Web est en vacances a patir du 1er mars 2022" */

let paragraphe = document.querySelector("p");
paragraphe.innerHTML = "La D-Web est en vacances a patir du 1er mars 2022";

// Question: comment ajouter un element html en javascript
// dans la div.info, ajouter un element html
// cibler element parent
let divI = document.querySelector("div.info");

// creation nouveau paragraphe
let pHtml = document.createElement("p");
let pText = document.createTextNode("La DWEB maitrise javascript.");

// ajouter texte dans la balise html p
pHtml.appendChild(pText);
divI.append(pHtml);

console.log(pHtml);

// Comment poser une question
// window.prompt ("Poser un question");

// Comment recupérer une réponse a une question
let reponse = document.querySelector("p.r")
//reponse.innerHTML = prompt("Comment va la D-Web")

//Exercie
/**
 * Questionnaire
 * Poser les questions correspondant aux textes des paragraphes présent dans la div.form
 * Afficher chaque paragraphe et reponse
 * Option: mettre le nom et la ville en MAJ
 */

// ligne 197
// Question: comment mettre en place automatiquement
// afficher un nom dans un element html vide
function afficheNom(){
    let dA = document.querySelector(div.afficher);

    dA.children.append("Paco"); 

    return dA;
}

// executer function afficheNom
// afficheNom();

// Question: comment creer une horloge numerique
// Question: comment rendre l'horloge dynamique
function afficheHeure(){
    // recuperer element html 
    let divA = document.querySelector("div.afficher");

    // recuperer et ecrire dans paragraphe
    divA.children[0].innerHTML = "Afficher heure";

    // creer un objet Date
    let objDate = new Date();

    /**
     * heure = getHours
     * minute = getMinutes
     * seconde = getSeconds
     */
    divA.children[0].innerHTML = objDate.getHours()+":"+objDate.getMinutes()+":"+objDate.getSeconds();
    // renvoi resultat
    return divA;

}
afficheHeure();