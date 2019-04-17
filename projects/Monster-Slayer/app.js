new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    attack: function() {
      var damage = this.calculateDamage(3, 10);
      // Player attack
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });
      // Checks if player won
      if (this.checkWin()) {
        return;
      }

      var $this = this;
      // Monster Attack
      setTimeout(function() {
        $this.monsterAttack();
      }, 1000);
    },

    specialAttack: function() {
      // Player Attack
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Players special attack hits Monster for ' + damage
      });
      if (this.checkWin()) {
        return;
      }

      var $this = this;
      // Monster Attack
      setTimeout(function() {
        $this.monsterAttack();
      }, 1000);
    },

    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10 health'
      });
      var $this = this;
      // Monster Attack
      setTimeout(function() {
        $this.monsterAttack();
      }, 1000);
    },

    giveUp: function() {
      this.gameIsRunning = false;
      this.playSound('sounds/failure.wav');
      this.turns.unshift({
        isPlayer: true,
        text: 'Player has ran from the fight!'
      });
    },

    monsterAttack: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;

      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      });
      this.checkWin();
    },

    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function() {
      if (this.monsterHealth <= 0) {
        this.playSound('sounds/game-won.wav');

        if (confirm('You won! \nStart New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }

        return;
      } else if (this.playerHealth <= 0) {
        this.playSound('sounds/failure.wav');

        if (confirm('You lost :( \nStart New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },

    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
});
