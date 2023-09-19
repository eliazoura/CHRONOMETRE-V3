let largeur = document.documentElement.clientWidth; /* 1200 */
console.log("🚀 script.js:2 ~ largeur:", largeur)

let hauteur = document.documentElement.clientHeight;
console.log("🚀 script.js:5 ~ hauteur:", hauteur)

let resetEl = document.getElementById("reset");

let pausEl = document.getElementById("pause");



//let stopEl = document.getElementById("stop");


let startEl = document.getElementById("start");



// ////////////////////////////////////////////
let reset = false;
let freez = false;

let start = false;

// ////////////////////////////////////////////


resetEl.addEventListener("click", init);

pausEl.addEventListener("click", pause)

//stopEl.addEventListener("click", stop);

startEl.addEventListener("click", startOK);


// ////////////////////////////////////////////

let h0El = document.getElementById("h0");
//console.log("🚀 ~ file: script.js:10 ~ h0El:", h0El)

let m0El = document.getElementById("m0");
//console.log("🚀 ~ file: script.js:13 ~ m0El:", m0El.textContent)


let s0El = document.getElementById("s0");
//console.log("🚀 ~ file: script.js:17 ~ s0El:", s0El)


// ////////////////////////////////////////////


let hor = 0;
console.log("🚀 hor:", hor)
let min = 0;
console.log("🚀 min:", min)
let sec = 0;
console.log("🚀sec:", sec)




function init() {
   console.log("ici INIT")

   location.reload();
}

/*



function init-A-VOIR() {
   console.log("ici INIT")

   reset = false;
   start = false;
   freez = false;

   sec = 0;
   min = 0;
   hor = 0;
   checkS();
   checkM();
   checkH();

   return;
}



*/


function pause() {
   console.log("ici PAUSE")

   console.log("🚀 script.js:78 ~ pause ~ start:", start)
   freez = !freez;
   console.log("🚀 script.js:80 ~ pause ~ freez INV:", freez)

}


function startOK() {
   console.log("ici startOK")

   start = !start;
   console.log("🚀 ~ file: script.js:103 ~ startOK ~ start INV:", start)

   topChrono();

}




function topChrono() {

   console.log("ici TOPCHRONO")

if(start){


   if (sec == 59) {

      sec = 0;
      min++;

      checkM();


   }


   

   sec++;


   checkS();


   // ///////////////////////////////


   console.log("🚀 ~ file: script.js:18 ~ hor:", hor)
   console.log("🚀 ~ file: script.js:20 ~ min:", min)
   console.log("🚀 ~ file: script.js:37 ~ start ~ sec:", sec)


   if (hor < 23 && min == 59 && sec == 59) {
      console.log("AJOUT UNE MINUTE")
      hor++;
      min = 0;
      sec = 0;

      checkS();
      checkM();
      checkH();


   }




   if (hor == 23 && min == 59 && sec == 59) {
      hor = 0;
      min = 0;
      sec = 0;

      checkS();
      checkM();
      checkH();
   }


   setTimeout(topChrono, 1000)






}

return


}









//
//function topChrono() {
//
//   console.log("ici START")
//
//
//   while (start) {
//
//
//      Y_Incr();
//
//
//
//      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/block#instruction_de_bloc
//   }
//
//
//
//
//
//
//
//return;
//
//
//
//
//}





function Y_Incr() {


   if (sec == 59) {

      sec = 0;
      min++;

      checkM();


   }



   sec++;


   checkS();


   // ///////////////////////////////



   console.log("🚀 ~ file: script.js:18 ~ hor:", hor)
   console.log("🚀 ~ file: script.js:20 ~ min:", min)
   console.log("🚀 ~ file: script.js:37 ~ start ~ sec:", sec)



   if (hor < 23 && min == 59 && sec == 59) {
      console.log("AJOUT UNE MINUTE")
      hor++;
      min = 0;
      sec = 0;

      checkS();
      checkM();
      checkH();


   }



   if (hor == 23 && min == 59 && sec == 59) {
      hor = 0;
      min = 0;
      sec = 0;

      checkS();
      checkM();
      checkH();
   }


   setTimeout(topChrono, 1000)


}

function N_Incr() {



   if (!start) {

      setTimeout(N_Incr, 1000)

   }



   topChrono();





}




function checkS() {


   if (sec < 10) {

      sec = "0" + sec;

   }

   s0El.textContent = sec;



}



function checkM() {

   let mChar = m0El.textContent.length;

   console.log("🚀  ~ 134 MCHAR:", mChar)

   if (min < 10) {

      min = "0" + min;

   }

   m0El.textContent = min;


}



function checkH() {

   let hChar = h0El.textContent.length;

   console.log("🚀 153 ~ HCHAR:", hChar)

   if (hor < 10) {

      hor = "0" + hor;

   }


   h0El.textContent = hor;


}
