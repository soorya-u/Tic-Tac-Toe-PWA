import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: string = "";
  @Input("data-endGame") endGame: boolean = false;
  @Input("data-win") winner: string | null | boolean= false;

  isDisabled() {
    if(this.value==="" && this.endGame) {
      return true;
    }
    return false;
  }
}
