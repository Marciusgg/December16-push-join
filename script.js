function elfMorse(message) {
  // Morsės abėcėlė
  const morseCode = {
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--.."
  };
  // Paverčiame žinutę į didžiasias raides, jei tai nebuvo užrašyta
  message = message.toUpperCase();
  // Susikuriame kintamajį, kuriame talpinsime konvertuotą žinutę
  let convertedMessage = [];
  // Išskirstome žinutę į atskiras raides naudojant for
  for (let i = 0; i < message.length; i++) {
      // Kiekviena žinutės raidė priskiriama 'char' kintamąjam
      let char = message[i];
      // Jeigu raidė yra morzės abėcėlėje,
      if (morseCode[char]) {
          // Konvertuotai žinutei sukuriame naują kintamąjį,
          let morse = morseCode[char];
          // Rezultatą siunčiame į kitą funkciją, kuri morzės abėcėlės raidę konvertuoja į elfų morzę.
          convertedMessage.push(toHolidayMorse(morse));
      }
  }
  
  // Funkciją konvertuojanti morzės kodą į elfų morzę
  function toHolidayMorse(char) {
      // Kintamasis rezultatui
      let result = [];
      // Loop'as konvertuojantis . ir - į ho ir hoho
      for (let i = 0; i < char.length; i++) {
          // Jeigu raidėje yra (.), tai '.push("ho")'
          if (char[i] === ".") {
              result.push("ho");
            // Jeigu raidėje yra (-), tai '.push("hoho")'
          } else if (char[i] === "-") {
              result.push("hoho");
          }
      }
      // Funkcija grąžina konvertuotus . ir - į 'ho' ir 'hoho' sujungtus 
      return result.join(" ");
  }

  // Grąžintos išanalizuotos raidės iš 'function toHolidayMorse()' sujungiamos ir parodoma visa konvertuota žinutė
  return convertedMessage.join(" ");
}

console.log(elfMorse("Marry"));
