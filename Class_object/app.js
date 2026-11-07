class Etudiant {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  info() {
    return `Nom: ${this.nom}, Age: ${this.age}`;
  }
}

let ET1 = new Etudiant("Ali", 22);
console.log(ET1.info());

let ET2 = new Etudiant("Rami", 19);
console.log(ET2.info());