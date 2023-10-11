const randomizer = new Promise((sejeTo, nesejeTo) => {
    const random = Math.random();
    if (random > 0.5) {
      sejeTo(random); 
    } else {
      nesejeTo('Čislo je menśie ako 0.5'); 
    }
  });
  

  async function getRandomNumber() {
    try {
      const cislo = await randomizer;
      if (parseInt( cislo.toString().slice(-1) )%  2 === 0) {
        return (`Cislo ${cislo} je sude.`);
      } else {
        return (`Cislo ${cislo} je liche.`);
      }
    } catch (error) {
      throw new Error(`Promise bol odmietnuty s errorom ${error}`);
    }
  }
  
  
  getRandomNumber()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });