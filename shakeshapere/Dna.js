//credit by :daniel shiffman
//edited by : jonathan laksamana purnomo
//i created dna with my own way i just using his template

function randomChar(){
    let c = random(0,128);
    return String.fromCharCode(c);
}

// Constructor (makes a random DNA)
class DNA {
  constructor(num) {
    // The genetic sequence
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < num; i++) {
      this.genes[i] = randomChar(); // Pick from range of chars
    }
  }

  // Converts character array to a String
  getPhrase() {
    return this.genes.join("");
  }

  // Fitness function (returns floating point % of "correct" characters)
  calcFitness(target) {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == target.charAt(i)) {
        score++;
      }
    }
    this.fitness = score / target.length;
  }

  // Crossover
  crossover(partner) {
    // A new child

      let child = new DNA(this.genes.length); //ini result untuk nampung calon hasil we called child
      let midPoint = floor(random(this.genes.length)); // random  suatu posisi dari 0 - lengthnya
      for(var i  = 0 ; i<this.genes.length ; i++){
          if(i<midPoint){
              child.genes[i] = this.genes[i];
          }
          else{
              child.genes[i] = partner.genes[i];
          }
      }
      return child;
  }

  // Based on a mutation probability, picks a new random character
  mutate(mutationRate) {
      for(var i = 0 ; i<this.genes.length ; i++){
          if(random(1) < mutationRate){
              this.genes[i] = randomChar();
          }
      }
  }
}