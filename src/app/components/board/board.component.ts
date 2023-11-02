import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  squares = Array(9).fill(null);
  winSquares = Array(3).fill(null);
  winner: string | null = null;
  draw: boolean = false;
  xIsNext: boolean = true;
  endGame: boolean = false;
  
  newGame() {
    this.squares = Array(9).fill(null);
    this.winSquares = Array(3).fill(null);
    this.winner = null;
    this.draw = false;
    this.xIsNext = true;
    this.endGame = false;
  }

  getPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }

  handleClick(i: number) {
    if(this.endGame)
      return;
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.endGame = !this.endGame;
        this.winSquares = [a, b, c];
        return this.squares[a];
      }
      
      else if ((!this.winner && (this.squares.filter(value => value === null)).length===0)) {
        this.endGame = !this.endGame;
        this.draw = !this.draw;
        return null;

      }
    }
    return null;
  }
}
