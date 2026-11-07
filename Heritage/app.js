class Etudiant {
    constructor (nom,age) {
        this.nom = nom;
        this.age = age;
    }
    info() {
        return `Etudiant nom:${this.nom} age:${this.age}`;
    }
}
class Stagiare extends Etudiant {
    constructor (nom,age,stage) {
        super(nom,age);
        this.stage = stage;
    }
    info() {
        return `Stagiare nom:${this.nom} age:${this.age} stage:${this.stage}`;
    }
}

    let stg1= new Stagiare("ali", 20, "dev");
    console.log(stg1.info());
    let stg2= new Stagiare("ahmed", 22, "test");
    console.log(stg2.info());
    
    