// commentaires 

/**
 * block de commentaire
 */

/*
 * generer nombre aleatoire entre 1 et 150
 * afficher limite aleatoir de 1 a n 
 * recuperer nombre propose
 * verifier le nombre
 * - si le nombre est bon : 
 * afficher message gagnant
 * 
 * - si le nombre pas bon :
 * verifier limite :
 * 
 * - si limite atteinte :
 * afficher bon nombre 
 * afficher message perdu 
 * 
 * - si limite non atteinte : 
 * afficher indices 
 */

// générer un nombre aléatoire entre 1 et 150 
function devineMoi(min, max){
    //générateur aleatoir js 
    return Math.floor(Math.random() * max) + min;
}

let resultat = devineMoi(1, 150);
console.log()

// generer nombre aleatoire entre 1 a 15 
function essai(min, max){
    //nombre d'essaie
    return Math.floor(Math.random() * max) + min;
}

let nbrE = essai(1, 15);
let tour = 0;

// afficher nbrE dans le jeux 
let spanE = document.querySelector("span.essais");
spanE.innerHTML = nbrE;

// ecouteur sur le bouton 'reponse'

let bt = document.querySelector("button");
bt.addEventListener("click", function(){
    let reponse = document.querySelector("input#reponse");

    // comparer reponse et resultat
    if(reponse.value == resultat){
        
        // afficher message gagnant
        let win = document.querySelector(".reponse");
        win.innerHTML = "YOU WIN!!!";


    } else {
        console.log("non")
    }
});
