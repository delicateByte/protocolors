import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.sass'],
  animations: [
    trigger('showPicker', [
      state('small', style({
        transform: 'translate(-50%, -60%) scale(0) rotate(30deg)'
      })),
      state('enlarged', style({
        transform: 'translate(-50%, 30%) scale(1) '
      })),
      transition('small => enlarged', [
        animate('0.3s ease')
      ]),
      transition('enlarged => small', [
        animate('0.3s ease')
      ]),
    ]),
    trigger('enlarge', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('enlarged', style({
        transform: 'scale(5)',
      })),
      transition('small => enlarged', [
        animate('0.3s ease')
      ]),
      transition('enlarged => small', [
        animate('0.3s ease')
      ]),
    ]),
  ]
})
export class InputFormComponent implements OnInit {

  @ViewChild('preview') preview: ElementRef;

  color = '#aa0033';
  isOpened = false;


  constructor() { }

  ngOnInit(): void {
  }

  change(event: any): void {
    this.color = event.color.hex;
  }

  togglePicker(e): void{
    this.isOpened = !this.isOpened;
  }

  closePicker(): void{
    this.isOpened = false;
  }
}
