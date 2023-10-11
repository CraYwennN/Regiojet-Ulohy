const randomizer = new Promise((sejeTo,nesejeTo) => {
  const random = Math.random();
  if (random > 0.5) {
    sejeTo(random); // sejeTo => Resolve
  } else {
    nesejeTo('cislo < 0.5'); // nesejeTo => Reject
  }
});

randomizer.then((cislo) => {
    if (parseInt( cislo.toString().slice(-1) )%  2 === 0) {
      console.log(`Cislo ${cislo} je sude.`);
    } else {
      console.log(`Cislo ${cislo} je liche.`);
    }
  })
  .catch((error) => {
    console.error(`vratime error ${error}`);
  });

