import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: string | null = null;
  @Input("data-i") buttonIndex: number = NaN;
  @Input("data-endGame") endGame: boolean = false;

  isDisabled() {
    console.log(this.buttonIndex+"-"+this.value+"-"+this.endGame)
    if(this.value==="" && this.endGame) {
      return true;
    }
    return false;
  }
}
