const randomizer = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve(random);
  } else {
    reject('Čislo je menšie ako 0.5');
  }
});

async function getRandomNumber() {
  try {
    const cislo = await randomizer;
    if (parseInt(cislo.toString().slice(-1)) % 2 === 0) {
      return `Cislo ${cislo} je sude.`;
    } else {
      return `Cislo ${cislo} je liche.`;
    }
  } catch (error) {
    throw new Error(`Promise bol odmietnuty s errorom ${error}`);
  }
}

async function getResult() {
  try {
    const result = await getRandomNumber();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

getResult();
