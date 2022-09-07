// Lets create a game

const supportChampion = {
  name: "Alistar",
  powers: ["Q", "R"],
  health: 50,
  heal(potion1, potion2) {
    let newHealth = (this.health += potion1 + potion2);
    console.log(newHealth);
  },
  abilities(a, b) {
    let newabilities = this.powers.push(a, b);
    console.log(newabilities);
  },
};

const mythicChampion = {
  name: "Viktor",
  powers: ["E", "A"],
  health: 30,
};
console.log(mythicChampion);
supportChampion.heal.call(mythicChampion, 70, 10);
supportChampion.abilities.apply(mythicChampion, ["H", "K"]);
console.log(mythicChampion);
