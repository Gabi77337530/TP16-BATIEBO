// alert("Le fichier fonctionne !")

// console.log("Hello");

// let maVariableSuperCool = "KamelCase";

// console.log(maVariableSuperCoolvariable);

// var unText = "Voici un text";
// console.log(unText);
// unText = "Nouveau Text...";
// console.log(unText);

// const prenom = "Justine";
// prenom= "Julien"
// console.log(prenom);

// let unChiffre = 24;
// unChiffre = 12;
// console.log(unChiffre);

// let chiffre = 24;
// let nouvelleChaine = "Le chiffre attendu est : " + chiffre + "degrés";

// console.log(nouvelleChaine)

// let string = "Je suis une chaine";
// let numbe = 24;
// let boolean = True;
// let array = ["Je", "suis", 24, false];
// let object = {
//   Prenom: "audrey",
//   Age: 34,
//   ville: BOBO,
// };

// console.log(typeof array);

// console.log(4+5);

let X = 2;
let Y = 5;
if (X < Y){
     console.log("x est inferieur à y");
} else {
     console.log2("x estsupérieur à y")
}



// let x =5;
// let y =2;
// if (x==y){
//      console.log("false !");
// }else if{
//      console.log("true !");

//  }

 else {
      console.log(X + "et" + Y +" ne sont pas du tout égaux")
 }
  function faireQuelqueChose() {
      console.log("je fais quelque chose !");
      console.log("trop cool");
 }

 const faireUneTache = (tache) => {
     console.log("je fais :" + tache); 
 };
 faireUneTache("les courses");
 faireUneTache("le menage");

// function add2() {
//      let a= 4
//      console.log(a)
//     return a +2 ;
// }
// add2;



// calc(4, 9);

// (function maFonction(){
//      console.log('je me joue toute seule');
// })();

// (() =>{
// console.log("je me joue toute seule")
// })();


let total =0;
function addition (x, y){
     total +=x
     return total
}
function soustraction (x){
     total -= X;
     return total;
}
function division (x){
     if (total=== 0){
       return( total=x);
     }else{
          total*=x;
          return total;
     }     
}
function multiplication (x){
     if (total=== 0){
          return( total=x);
        }else{
             total*=x;
             return total;
        } 
        function reset(){
          total=0;
        }    
   }
