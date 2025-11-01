const character = {
  name: "Герой",
  hp: 100,
  elementHp: document.getElementById("hp1"),
  elementScore: document.getElementById("score1"),

  update() {
    this.elementHp.value = this.hp;
    this.elementScore.textContent = `Здоров'я: ${this.hp}`;
    if (this.hp > 60) this.elementHp.style.accentColor = "lime";
    else if (this.hp > 30) this.elementHp.style.accentColor = "orange";
    else this.elementHp.style.accentColor = "red";
  },

  takeDamage(dmg) {
    this.hp = Math.max(0, this.hp - dmg);
    this.update();
  },

  randomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const enemy = {
  name: "Суперник",
  hp: 100,
  elementHp: document.getElementById("hp2"),
  elementScore: document.getElementById("score2"),

  update() {
    this.elementHp.value = this.hp;
    this.elementScore.textContent = `Здоров'я: ${this.hp}`;
    if (this.hp > 60) this.elementHp.style.accentColor = "lime";
    else if (this.hp > 30) this.elementHp.style.accentColor = "orange";
    else this.elementHp.style.accentColor = "red";
  },

  takeDamage(dmg) {
    this.hp = Math.max(0, this.hp - dmg);
    this.update();
  },

  randomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

let turn = 1;

function fight(type = "normal") {
  let [min, max] = type === "strong" ? [10, 25] : [5, 15];

  if (turn === 1) {
    let dmg = character.randomDamage(min, max);
    enemy.takeDamage(dmg);
    alert(`${character.name} атакує і завдає ${dmg} шкоди!`);
    turn = 2;
  } else {
    let dmg = enemy.randomDamage(min, max);
    character.takeDamage(dmg);
    alert(`${enemy.name} атакує і завдає ${dmg} шкоди!`);
    turn = 1;
  }

  if (character.hp === 0 || enemy.hp === 0) {
    const winner = character.hp > enemy.hp ? character.name : enemy.name;
    alert(`🏆 Переміг ${winner}!`);
  }
}

document.getElementById("fightBtn").addEventListener("click", () => fight("normal"));
document.getElementById("strongAttackBtn").addEventListener("click", () => fight("strong"));

character.update();
enemy.update();
