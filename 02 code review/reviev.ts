let pole: Array<string> = []; // definujes funkcie nad touto premennou, urob z toho objekt

import PIVO from './constants' // preklep constant

const firstElemet = "WTF"; // preklep firstElement
pole.push(firstElemet) 

let addElement = function (element) { //zbytočne porušenie konvencie, použi const | Použi všade function() alebo () =>  
  pole.push(element);  
}

  var toString = () => { // chybna indentacia, pouzi const
     return pole.join(', ')
  };

function dejDvanactky = () => { // zly zapis funkcie kombinacia "function" + "= () => {}" 
  pole.reduce((pivo) => { // funkcia pracuje s premennou "pivo" ale to neni definovane vo funkcii ani poslane ako argument
  const volume = pivo.volume; // kedze pivo neexistuje je zbytocne hladat .volume ak by sme ale pracovali s premennou PIVO nevedeli by sme ziskat .volume kedze je to string nie object s .volume
    if (volume > 0.5) {
      return pivo;
    }
  })
}


const addBeers = () => {  // funkcia viac menej nedava zmysel 3 krat nezavisle pushuje PIVO.length do pole
  pole.push(PIVO.length); // kedze nam PIVO.length vrati cislo nastal by typescript error kedze array ma definovany typ na string
  pole.push(PIVO.length);
  pole.push(PIVO.length);
}
