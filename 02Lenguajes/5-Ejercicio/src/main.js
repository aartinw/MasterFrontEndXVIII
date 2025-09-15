class SlothMachine {
  constructor() {
    this.coins = 0;
  }

  randomBoolean() {
    return Math.random() >= 0.5;
  }

  play() {
    this.coins++;

    const bool1 = this.randomBoolean();
    const bool2 = this.randomBoolean();
    const bool3 = this.randomBoolean();

    if (bool1 && bool2 && bool3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play();
